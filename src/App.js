import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios'; //импортируем библиотеку 
import Header from './components/Header';
import Drawer from './components/Drawer';
import AppContext  from './context';

import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Orders from './pages/Orders'


import Footer from './components/Footer';

function App() {
  const [items, setItems] = React.useState([]); //для массива товаров
  const [cartItems, setCartItems] = React.useState([]) ; //рендерим происходящие здесть в кмпоненте drawer
  const [favorites, setFavorites] = React.useState([]) ;//массив для сохранения закладок
  const [searchValue, setSearchvalue] = React.useState('') ; //для поиска, передаем строку а не массив
  const[cartOpened, setCartOpened] = React.useState(false); // для открытия корзины
  const[isLoading, setIsLoading] = React.useState(true); 




//функция для отображения товара с сервера (рендерится - 1 раз при запуске)  
React.useEffect( () => {
 async function fetchData(){
  setIsLoading(true);
 try{
   //запрос данных для корзины
   const cartResponse = await axios.get('https://6561854ddcd355c08323e86a.mockapi.io/cart');
   //запрос данных для избранного
   const favoritesResponse = await axios.get('https://656d96e3bcc5618d3c237b8b.mockapi.io/favorites');
   //get запрос для получения данных о товарах 
   const itemsResponse = await axios.get('https://6561854ddcd355c08323e86a.mockapi.io/items');
   
   setIsLoading(false);
 
   setCartItems(cartResponse.data);//запрашиваем массив объектов с сервера и передаем их в массив setCartItems 
   setFavorites(favoritesResponse.data);//запрашиваем массив объектов с сервера и передаем их в массив setCartItems 
   setItems(itemsResponse.data); 
 }
 catch(error){
  alert('Ошибка при запросе данных')
 }
 }

 fetchData();
}, []); //вызываем эту функцию при первом рендере App.js




//ДОБАВЛЕНИЕ В КОРЗИНУ
const onAddToCart = async (obj) => { 
  try {
    const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
    if (findItem) {
      setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
      await axios.delete(`https://6561854ddcd355c08323e86a.mockapi.io/cart/${findItem.id}`);
    }
    else{
      //post запрос для отпраки данных на бэк
      const {data} = await  axios.post('https://6561854ddcd355c08323e86a.mockapi.io/cart', obj); //передаем объект который добавляем в корзину по ссылке на бэк
      setCartItems((prev) =>[...prev, data]); //добавляем новый объект в конец
    }
  } catch (error) {
    alert('Ошибка при добавлении в корзину')
  }

};




//УДАЛЕНИЕ ИЗ КОРЗИНЫ
const onRemoveItem = (id) => {
 try {
  axios.delete(`https://6561854ddcd355c08323e86a.mockapi.io/cart/${id}`);
  setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));//берем предыдущий массив, проходимся по нему и отфильтровываем тот эллемент который был передан в эту функцию
 } catch (error){
  alert('Ошибка при удалении из корзины, слишком частые запросы на сервер!')
 }
};


const onAddToFavorite = async (obj) => {
  try {
    if (favorites.find((favObj) => favObj.id === obj.id)) {
      axios.delete(`https://656d96e3bcc5618d3c237b8b.mockapi.io/favorites/${obj.id}`);
    } else {
      const { data } = await axios.post('https://656d96e3bcc5618d3c237b8b.mockapi.io/favorites', obj);
      setFavorites((prev) => [...prev, data]);
    }
  } catch (error) {
    alert('Не удалось добавить в фавориты');
  }
};





const onChangeSearchInput=(event)=>{
  //console.log(event.target.value);
  setSearchvalue(event.target.value);
}


const isItemAdded = (id) =>{
  return cartItems.some((obj) => Number(obj.parentId) === Number(id)); //сравниваем с родительским id чтобы при обновлении не было багов
};

  return (
    <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, setCartOpened, setCartItems, onAddToFavorite, onAddToCart}}>
      <div className="wrapper clear">
     
      
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
      )}


      <Header onClickCart={()=> setCartOpened(true)}   />{/*компонент шапки */}

      
     


      <Route path="/" exact>
        <Home
          items={items}
          cartItems={cartItems}
          searchValue={searchValue}
          setSearchValue={setSearchvalue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
          isLoading={isLoading}
        />
      </Route>


      <Route path="/favorites" exact>
        <Favorites  onAddToFavorite={onAddToFavorite}/>
      </Route>

      <Route path="/orders" exact>
        <Orders />
      </Route>


    </div>
    <Footer/>
    </AppContext.Provider>
  );
}

export default App;
