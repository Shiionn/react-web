import React from 'react';
import axios from 'axios'; 
import Info from './InfoUser';
import AppContext from '../context';

const delay =(ms) => new Promise((resolve) => setTimeout(resolve, ms)) //нужно чтобы не заблочил сервер

function Drawer ({onClose, onRemove, items = [] }) {
 const {cartItems, setCartItems} = React.useContext(AppContext);
 const [orderId, setOrderId]=React.useState(null); //стэйт для айдишек заказов 
 const [isOrderComplete, setComplete]=React.useState(false);

// //формирование заказа 
//   const onClickOrder= async ()=>{
//     const {data} = await axios.post('https://656d96e3bcc5618d3c237b8b.mockapi.io/orders',{
//       items: cartItems
//     });
//     setOrderId(data.id);
//     setComplete (true);

//     for(let i=0; i<Array.length; i++){
//       const item = cartItems[i];
//       await axios.delete('https://6561854ddcd355c08323e86a.mockapi.io/cart/' +item.id);  
//       await delay(1000);//ожидание 1сек после каждого удаления
//     }
//     setCartItems([]);
//   };

const onClickOrder = async () => {
  try {
    
    const { data } = await axios.post('https://656d96e3bcc5618d3c237b8b.mockapi.io/orders', {
      items: cartItems,
    });
    setOrderId(data.id);
    setComplete(true);
    setCartItems([]);

    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      await axios.delete('https://6561854ddcd355c08323e86a.mockapi.io/cart/' + item.id);
      await delay(1000);
    }
  } catch (error) {
    alert('Ошибка при создании заказа :(');
  }

};


return (

    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина <img onClick={onClose} className="cu-p" src="/img/removeAll.svg" alt="Close"/>
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items">
              {items.map((obj) => (
                <div key = {obj.id} className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"></div>

                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn_remove.svg" 
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб. </b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб. </b>
                </li>
              </ul>
              <button onClick={onClickOrder} className="greenButton">
              Оформить заказ <img src="/img/strelka.svg" alt="Arrow"/>
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? `Заказ успешно оформлен!` : "Корзина пуста!"}
            descriprion={isOrderComplete ? `Номер вашего заказа ${orderId}. Скоро с вами свяжутся для его подтверждения`: "Добавьте хотя бы один товар, чтобы сделать заказ."} 
            image ={isOrderComplete ? "/img/logo_1.png" : "/img/empty-cart.png"}
          />
        )}
      </div>
    </div>
  );
}



export default Drawer;