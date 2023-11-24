import Card from './components/Card'; //Создаем компанент Card и импортруем код в него
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {
  title: 'Кросовки 1',
  price: 12999,
  imageUrl: '/img/sneakers.jpg',
  },

  {
    title: 'Кросовки 2',
    price: 4500,
    imageUrl: '/img/sneakers.jpg',
    },

  {
     title: 'Кросовки 3',
     price: 8500,
     imageUrl: '/img/sneakers.jpg',
      },

      {
        title: 'Кросовки 4',
        price: 7530,
        imageUrl: '/img/sneakers.jpg',
        },
];





function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>{/*компонент карзины */}
      <Header/>{/*компонент шапки */}

      <div className="content p-40">
       <div className="d-flex align-center justify-between mb-40"> 
        <h1>Все товары </h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>

{/* Карточки товаров */}
        <div className=" d-flex">
         {arr.map((obj) => (
          <Card 
            title={obj.title} 
            price ={obj.price} 
            imageUrl={obj.imageUrl}
            priKlicke={()=>console.log(obj)}
          />
         ))}

        </div>
      </div>
    </div>
  );
}

export default App;
