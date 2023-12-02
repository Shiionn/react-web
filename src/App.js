import React from 'react'
import Card from './components/Card'; //Создаем компанент Card и импортруем код в него
import Header from './components/Header';
import Drawer from './components/Drawer';




function App() {
  const [items,setItems] = React.useState([]); //для массива товаров
  const [cartItems,setCartItems] = React.useState([]) ; //рендерим происходящие здесть в кмпоненте drawer
  const [searchValue,setSearchvalue] = React.useState('') ; //для поиска, передаем строку а не массив
  const[cartOpened, setCartOpened] = React.useState(false); // для открытия корзины




//функция для отображения товара с сервера (рендерится - 1 раз)  
React.useEffect( () =>{
//вытаскиваю данные с сервера, берем ответ сервера, превращаем в json и потом уже возвращаем данные этого формата в консоль 

  fetch('https://6561854ddcd355c08323e86a.mockapi.io/items')
  .then((responce) => {
    return responce.json();
  })
  .then(json => {
    setItems(json);
  });

}, []); //вызываем эту функцию при первом рендере App.js




const onAddToCart = (obj) => { 
  setCartItems(prev =>[...prev, obj]); //добавляем новый объект в конец
};


const onChangeSearchInput=(event)=>{
  console.log(event.target.value);
  setSearchvalue(event.target.value);
}

//console.log(cartItems)

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer items ={cartItems} onClose={()=>setCartOpened(false)}/> : null}{/*компонент карзины */}
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
         {items.filter(item=>item.title.includes(searchValue)).map((item, index) => (  
          <Card 
            key={index}
            title={item.title} 
            price ={item.price} 
            imageUrl={item.imageUrl}
            onFavorite={()=>console.log('Добавили в закладки')}
            onPlus={(obj)=> onAddToCart(obj)}
          />
         ))}

        </div>
      </div>
    </div>
  );
}

export default App;
