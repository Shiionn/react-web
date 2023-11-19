function Card() {
    return (
        
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
    );
   
}
export default Card; //разрешение на экспорт данного файла 
//мы зовем компонент, которые из домика выйти не может, дверь то мы ему не открыли