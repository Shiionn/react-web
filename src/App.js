import React from 'react';
import axios from 'axios'; //импортируем библиотеку 
import Card from './components/Card'; //Создаем компанент Card и импортруем код в него
import Header from './components/Header';
import Drawer from './components/Drawer';




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

}, []); //вызываем эту функцию при первом рендере App.js




//ДОБАВЛЕНИЕ В КОРЗИНУ
const onAddToCart = (obj) => { 
  //post запрос для отпраки данных на бэк
  axios.post('https://6561854ddcd355c08323e86a.mockapi.io/cart', obj); //передаем объект который добавляем в корзину по ссылке на бэк
  setCartItems((prev) =>[...prev, obj]); //добавляем новый объект в конец
};



//ДОБАВЛЕНИЕ В ИЗБРАННОЕ
const onAddToFavorite = (obj) => { 
  //post запрос для отпраки данных на бэк
  axios.post('https://656d96e3bcc5618d3c237b8b.mockapi.io/favorites', obj); //передаем объект который добавляем в корзину по ссылке на бэк
  setFavorites((prev) =>[...prev, obj]); //добавляем новый объект в конец
};




//УДАЛЕНИЕ ИЗ КОРЗИНЫ
// const onRemoveItem = (id) => {
//   console.log(id);
//   axios.delete(`https://6561854ddcd355c08323e86a.mockapi.io/cart${id}`); 
//    setCartItems(prev =>prev.filter((item) =>item.id !== id)); //добавляем новый объект в конец
//   //берем предыдущий массив, проходимся по нему и отфильтровываем тот эллемент который был передан в эту функцию
//   };



  const onRemoveItem = (id) => {
    axios.delete(`https://6561854ddcd355c08323e86a.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };


const onChangeSearchInput=(event)=>{
  //console.log(event.target.value);
  setSearchvalue(event.target.value);
}

//console.log(cartItems)

  return (
    <div className="wrapper clear">
      {/* {cartOpened ? <Drawer items ={cartItems}      onClose={()=>setCartOpened(false)} onRemove={onRemoveItem} /> : null}компонент карзины */}
      
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
      )}


      <Header onClickCart={()=> setCartOpened(true)}   />{/*компонент шапки */}

      <div className="content p-40">
       <div className="d-flex align-center justify-between mb-40"> 
        <h1>{searchValue? `Поиск по заросу: "${searchValue}"` : 'Все товары'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            {searchValue && (
            <img 
              onClick={()=>setSearchvalue('')}
              className="clear cu-p" 
              src="/img/removeAll.svg" 
              alt="Clear serch"
            />
          )}
            <input onChange={onChangeSearchInput} value ={searchValue} placeholder="Поиск..."/>
          </div>
        </div>

{/* Карточки товаров */}
        <div className=" d-flex flex-wrap"> {/* map пробегается по масиву */}
         {items.filter(item=>item.title.toLowerCase().includes(searchValue)).map((item, index) => (  
          <Card 
            key={index}
            title={item.title} 
            price ={item.price} 
            imageUrl={item.imageUrl}
            onFavorite={(obj)=>onAddToFavorite(obj)}
            onPlus={(obj)=> onAddToCart(obj)}
          />
         ))}

        </div>
      </div>
    </div>
  );
}

export default App;
