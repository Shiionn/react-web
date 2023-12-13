import React from 'react';
import axios from 'axios'; 
import Card from '../components/Card';//Создаем компанент Card и импортруем код в него



function Orders() {

const [orders, setOrders]=React.useState([]);
const[isLoading, setIsLoading] = React.useState(true); 


React.useEffect ( ()=> {
async function fetchDat(){
  const {data} = await axios.get('https://656d96e3bcc5618d3c237b8b.mockapi.io/orders');
  setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
setIsLoading(false);
}
fetchDat();
}, []);
  
console.log(orders.length);
    return (
      <div className="content p-40">       
       <div className="d-flex align-center justify-between mb-40"> 
            <h1>История заказов</h1> 
        </div>



 {orders.length>0 ? (
    <>
      {/* Карточки товаров */}
      <div className="d-flex flex-wrap"> {/* map пробегается по масиву */}
      {(isLoading ? [...Array(8)] : orders).map((item, index) => (  
        <Card 
        key={index}
        loading = {isLoading}
        {...item}
        />
        ))}
      </div>
    </>
 ):
 (
  <>
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
              <img className="mb-20" width="120px" height="120px" src="/img/emty_korobka.svg" alt="Empty" />
              <h2>Нет заказов</h2>
              <p className="opacity-6">Вы еще не сделали ни одного заказа</p>
    </div>
  </>
 )}
  </div>
    );
  }
  export default Orders;