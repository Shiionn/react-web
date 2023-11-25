import React from 'react'
import Card from './components/Card'; //Создаем компанент Card и импортруем код в него
import Header from './components/Header';
import Drawer from './components/Drawer';




function App() {
  const [items,setItems] = React.useState([ ]) //для массива 
  const[cartOpened, setCartOpened] = React.useState(false);


  //вытаскиваю данные с сервера, берем ответ сервера, превращаем в json и потом уже возвращаем данные этого формата в консоль 
fetch('https://6561854ddcd355c08323e86a.')
.then((responce) => {
  return responce.json();
})
.then(json => {
  setItems(json);
});

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer onClose={()=>setCartOpened(false)}/> : null}{/*компонент карзины */}
      <Header onClickCart={()=> setCartOpened(true)}   />{/*компонент шапки */}

      <div className="content p-40">
       <div className="d-flex align-center justify-between mb-40"> 
        <h1>Все товары </h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>

{/* Карточки товаров */}
        <div className=" d-flex flex-wrap">
         {items.map((obj) => (
          <Card 
            title={obj.title} 
            price ={obj.price} 
            imageUrl={obj.imageUrl}
            onFavorite={()=>console.log('Добавили в закладки')}
            onPlus={()=>console.log('Нажали плюс')}
          />
         ))}

        </div>
      </div>
    </div>
  );
}

export default App;
