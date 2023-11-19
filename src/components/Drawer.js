function Drawer () {
return(
<div  style ={{display:'none'}} className="overlay"> {/*Тень на товары style ={{display:'none'}}*/}
    <div className="drawer">
        <h2 className=" d-flex justify-between mb-30"> 
            Корзина 
            <img className="removeBtn" src="/img/removeAll.svg" alt="Remove"/>
        </h2>
{/* начало  эллементов коризины */}
        <div className="items">

{/* первый  эллемент коризины */}

    <div className="cartItem d-flex align-center mb-20">
        <div 
        style={{backgroundImage:'url(/img/sneakers.jpg)'}} 
        className="cartItemImg"></div>

        <div className="mr-20 flex">
        <p className="mb-5">Инфо о товаре название</p>
        <b>12 999 руб.</b>
        </div>
        <img className="removeBtn" src="/img/btn_remove.svg" alt="Remove"/>
    </div> 


{/* второй  эллемент коризины */}

    <div className="cartItem d-flex align-center mb-20">
        <div 
        style={{backgroundImage:'url(/img/sneakers.jpg)'}} 
        className="cartItemImg"></div>

        <div className="mr-20 flex">
         <p className="mb-5">Инфо о товаре название</p>
        <b>12 999 руб.</b>
        </div>
        <img className="removeBtn" src="/img/btn_remove.svg" alt="Remove"/>
        </div> 
    </div>
{/* конец эллементов коризины */}

    <div className="cartTotalBlock">
      <ul>
        <li>
         <span>Итого:</span>
          <div></div>
          <b>21 498</b>
       </li>
        <li>
          <span>налог 5%:</span>
          <div></div>
          <b>1074 руб.</b>
       </li>
      </ul>
      <button className="greenButton">
         Оформить заказ <img src="/img/strelka.svg" alt="Arrow"/>
      </button>
    </div>
{/* Конец вкладки корзина */}
  </div>
</div>

);
}

export default Drawer;