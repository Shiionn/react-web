import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context';
function Header (props) {

const {cartItems} =React.useContext(AppContext);
const totalPrice = cartItems.reduce((sum, obj)=>obj.price + sum, 0); //посчет суммы в корзине

  return(
      <header class="d-flex justify-between align-center p-40">  {/* d-flex=display:flex in scss*/}
       <Link to="/">
        <div className="d-flex align-center">
        <img widh={60} heigh={60} src="/img/logo_purpule2.svg" alt="description"/>
        {/* реакт сам поймет что искать в public */}
        <div> 
          <h3 className="text-uppercase">Unique Stiches</h3>
          <p className="opacity-8">забота в каждой петельке</p>
          </div>
        </div>
       </Link>
       <ul className="d-flex">
        
         <li onClick={props.onClickCart} className="mr-30 cu-p"> {/*mr-30=margin-right 30px*/ }
           <img widh={18} heigh={18} src="/img/cart.svg" alt="Корзина"/>
           <span> {totalPrice} руб. </span>
         </li>
         <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img widh={18} heigh={18} src="/img/fav.svg" alt="Избранное"/>
            <span> Избранное </span>
           </Link> 
         </li>
         <li className="mr-20 cu-p">
         <Link to="/orders">
           <img widh={18} heigh={18} src="/img/order_history.svg" alt="История заказов"/> 
           <span> История заказов </span>
         </Link> 
         </li>
         <li className="mr-20 cu-p">
         <Link to="/information">
            <img widh={18} heigh={18} src="/img/about_icon.svg" alt="О компании" title='о компании'/>  
            <span> О нас </span>
         </Link> 
         </li>
       </ul>
     </header>
  
  );
  }
  
  export default Header;

