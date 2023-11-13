


function App() {
  return (
    <div className="wrapper clear">
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
        <h1 className="mb-40">Все товары </h1>


        <div className=" d-flex sneakers">


        <div className="card">
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
