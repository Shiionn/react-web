function Card(props) {
    const onClickButton = () => {
        alert(props.title);
    };


    return (
        
        <div className="card">
          <div className="favorite">
            <img src="/img/like_zero.svg" alt="Unlike it!"/> 
          </div> 
          <img width={133} high={112} src={props.imageUrl}  alt="sneakers" />
          <h5>{props.title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column cardButton">
              <span> Цена: </span>
              <b> {props.price} руб.</b>
            </div>
            <button className="button" onClick={onClickButton}> 
            <img width={11} high={11} src="/img/btn_plus.svg" alt="plus"/>
            </button>
          </div>
        </div>
    );
   
}
export default Card; //разрешение на экспорт данного файла 
//мы зовем компонент, которые из домика выйти не может, дверь то мы ему не открыли