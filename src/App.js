


function App() {
  return (
    <div className="wrapper clear">
       <div className="overlay"> {/*Тень на товары */}
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





      <header class="d-flex justify-between align-center p-40">  {/* d-flex=display:flex in scss*/}
       <div className="d-flex align-center">
        <img widh={40} heigh={40} src="/img/logo.png" alt="description"/>
        {/* реакт сам поймет что искать в public */}
        <div> 
          <h3 className="text-uppercase">Name of website</h3>
          <p className="opacity-5">slogan like the best shop</p>
         </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30"> {/*mr-30=margin-right 30px*/ }
            <img widh={18} heigh={18} src="/img/cart.svg" alt="description"/>
            <span> 1205 руб. </span>
          </li>
          <li>
            <img widh={18} heigh={18} src="/img/user.svg" alt="description"/> 
          </li>
        </ul>
      </header>
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
        <div className="card">
          <div className="favorite">
            <img src="/img/like_zero.svg" alt="Unlike it!"/> 
          </div> 
          <img width={133} high={112} src="/img/sneakers.jpg"  alt="sneakers" />
          <h5>инфо о товаре название</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column cardButton">
              <span> Цена: </span>
              <b> 12 999 руб.</b>
            </div>
            <button className="button"> 
            <img width={11} high={11} src="/img/btn_plus.svg" alt="plus"/>
            </button>
          </div>
        </div>



        <div className="card">
         <div className="favorite">
            <img src="/img/like_zero.svg" alt="Unlike it!"/> 
          </div> 
          <img width={133} high={112} src="/img/sneakers.jpg"  alt="sneakers" />
          <h5>инфо о товаре название</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column cardButton">
              <span> Цена: </span>
              <b> 12 999 руб.</b>
            </div>
            <button className="button"> 
            <img width={11} high={11} src="/img/btn_plus.svg" alt="plus"/>
            </button>
          </div>
        </div>



        <div className="card">
          <div className="favorite">
            <img src="/img/like_zero.svg" alt="Unlike it!"/> 
          </div> 
          <img width={133} high={112} src="/img/sneakers.jpg"  alt="sneakers" />
          <h5>инфо о товаре название</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column cardButton">
              <span> Цена: </span>
              <b> 12 999 руб.</b>
            </div>
            <button className="button"> 
            <img width={11} high={11} src="/img/btn_plus.svg" alt="plus"/>
            </button>
          </div>
        </div>



        <div className="card">
          <div className="favorite">
            <img src="/img/like_zero.svg" alt="Unlike it!"/> 
          </div> 
          <img width={133} high={112} src="/img/sneakers.jpg"  alt="sneakers" />
          <h5>инфо о товаре название</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column cardButton">
              <span> Цена: </span>
              <b> 12 999 руб.</b>
            </div>
            <button className="button"> 
            <img width={11} high={11} src="/img/btn_plus.svg" alt="plus"/>
            </button>
          </div>
        </div>




        </div>




      </div>

    </div>
  );
}

export default App;
