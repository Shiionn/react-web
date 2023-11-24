import styles from './Card.module.scss';

console.log(styles);

function Card(props) {
console.log(props);

    return (
        
        <div className={styles.card}>
          <div className={styles.favorite}>
            <img src="/img/like_zero.svg" alt="Unlike it!"/> 
          </div> 
          <img width={133} high={112} src={props.imageUrl}  alt="sneakers" />
          <h5>{props.title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column cardButton">
              <span> Цена: </span>
              <b> {props.price} руб.</b>
            </div>
            <button className="button" onClick={props.priKlicke}> 
            <img width={11} high={11} src="/img/plus.svg" alt="plus"/>
            </button>
          </div>
        </div>
    );
   
}
export default Card; //разрешение на экспорт данного файла 
//мы зовем компонент, которые из домика выйти не может, дверь то мы ему не открыли