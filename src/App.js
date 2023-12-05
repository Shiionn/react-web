import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios'; //импортируем библиотеку 
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home'
import Favorites from './pages/Favorites'



function App() {
  const [items,setItems] = React.useState([]); //для массива товаров
  const [cartItems,setCartItems] = React.useState([]) ; //рендерим происходящие здесть в кмпоненте drawer
  const [favorites,setFavorites] = React.useState([]) ;//массив для сохранения закладок
  const [searchValue,setSearchvalue] = React.useState('') ; //для поиска, передаем строку а не массив
  const[cartOpened, setCartOpened] = React.useState(false); // для открытия корзины




//функция для отображения товара с сервера (рендерится - 1 раз при запуске)  
React.useEffect( () =>{
  //get запрос для получения данных о товарах 
  axios.get('https://6561854ddcd355c08323e86a.mockapi.io/items').then(res=>{
    setItems(res.data);
  });


  //запрос данных для корзины
  axios.get('https://6561854ddcd355c08323e86a.mockapi.io/cart').then(res=>{
    setCartItems(res.data);//запрашиваем массив объектов с сервера и передаем их в массив setCartItems 
  });


  //запрос данных для избранного
  axios.get('https://656d96e3bcc5618d3c237b8b.mockapi.io/favorites').then(res=>{
    setFavorites(res.data);//запрашиваем массив объектов с сервера и передаем их в массив setCartItems 
  });

}, []); //вызываем эту функцию при первом рендере App.js




//ДОБАВЛЕНИЕ В КОРЗИНУ
const onAddToCart = (obj) => { 
  //post запрос для отпраки данных на бэк
  axios.post('https://6561854ddcd355c08323e86a.mockapi.io/cart', obj); //передаем объект который добавляем в корзину по ссылке на бэк
  setCartItems((prev) =>[...prev, obj]); //добавляем новый объект в конец
};




//УДАЛЕНИЕ ИЗ КОРЗИНЫ
const onRemoveItem = (id) => {
  axios.delete(`https://6561854ddcd355c08323e86a.mockapi.io/cart/${id}`);
  setCartItems((prev) => prev.filter((item) => item.id !== id));//берем предыдущий массив, проходимся по нему и отфильтровываем тот эллемент который был передан в эту функцию
};


const onAddToFavorite = async (obj) => {
  try {
    if (favorites.find((favObj) => favObj.id === obj.id)) {
      axios.delete(`https://656d96e3bcc5618d3c237b8b.mockapi.io/favorites/${obj.id}`);
    } else {
      const { data } = await axios.post('https://656d96e3bcc5618d3c237b8b.mockapi.io/favorites/', obj);
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



  return (
    <div className="wrapper clear">
      {/* {cartOpened ? <Drawer items ={cartItems}      onClose={()=>setCartOpened(false)} onRemove={onRemoveItem} /> : null}компонент карзины */}
      
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
      )}


      <Header onClickCart={()=> setCartOpened(true)}   />{/*компонент шапки */}

      
      <Route path="/" exact>
        <Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchvalue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>


      <Route path="/favorites" exact>
        <Favorites items={favorites} onAddToFavorite={onAddToFavorite}/>
      </Route>

    </div>
  );
}

export default App;
