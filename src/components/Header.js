function Header (props) {

return(
    <header class="d-flex justify-between align-center p-40">  {/* d-flex=display:flex in scss*/}
    <div className="d-flex align-center">
     <img widh={40} heigh={40} src="/img/logo_1.png" alt="description"/>
     {/* реакт сам поймет что искать в public */}
     <div> 
       <h3 className="text-uppercase">Name of website</h3>
       <p className="opacity-5">slogan like the best shop</p>
      </div>
     </div>
     <ul className="d-flex">
       <li onClick={props.onClickCart} className="mr-30 cu-p"> {/*mr-30=margin-right 30px*/ }
         <img widh={18} heigh={18} src="/img/cart.svg" alt="cart"/>
         <span> 1205 руб. </span>
       </li>
       <li className="mr-20 cu-p">
         <img widh={18} heigh={18} src="/img/fav.svg" alt="favorite"/> 
       </li>
       <li>
         <img widh={18} heigh={18} src="/img/user.svg" alt="user"/> 
       </li>
     </ul>
   </header>

);
}

export default Header;