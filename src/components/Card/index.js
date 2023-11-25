import React from 'react'
import styles from './Card.module.scss';



function Card(props) {
const [isAdded, setIsAdded] = React.useState(false);

const onClickPlus = ()=>{
  setIsAdded(!isAdded);
};


// React.useEffect(()=>{
//   console.log('Переменная изменилась ')
// }, [isAdded]);



//console.log(isAdded, props.title);

    return (
        
        <div className={styles.card}>
          <div className={styles.favorite} onClick={props.onFavorite}> 
            <img src="/img/like_zero.svg" alt="Unlike it!"/> 
          </div> 
          <img width={133} high={112} src={props.imageUrl}  alt="sneakers" />
          <h5>{props.title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column cardButton">
              <span> Цена: </span>
              <b> {props.price} руб.</b>
            </div>
          
            <img className={styles.plus} onClick={onClickPlus}  src={isAdded ? "/img/add_to_card.svg":"/img/btn_plus.svg" } alt="plus"/>
            {/* Если нажали на кнпку меняй кртинку */}
          </div>
        </div>
    );
   
}
export default Card; //разрешение на экспорт данного файла 
//мы зовем компонент, которые из домика выйти не может, дверь то мы ему не открыли