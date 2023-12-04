import React from 'react'
import styles from './Card.module.scss';



function Card({title, imageUrl, price, onFavorite, onPlus}) {
const [isAdded, setIsAdded] = React.useState(false);
const[isFavorite, setIsFavorite]=React.useState(false); //метод для добвления в избранное


//для добавления в корзину
const onClickPlus = ()=>{
  onPlus({title, imageUrl, price});
  setIsAdded(!isAdded);
};



//для добавления в избранное
const onClickFavorite = ()=>{
  onFavorite({title, imageUrl, price}); //вызываем метод который вызывет другой метод который в свою очередь отправляет запрос на сервер
  setIsFavorite(!isFavorite);
};


//console.log(isAdded, props.title);

    return (
        
        <div className={styles.card}>
          <div className={styles.favorite} onClick={onClickFavorite}> 
            <img 
              src={isFavorite ? "/img/like_one.svg":"/img/like_zero.svg" }
              alt="Unlike it!"
            /> 
          </div> 
          <img width={133} high={112} src={imageUrl}  alt="sweater" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column cardButton">
              <span> Цена: </span>
              <b> {price} руб.</b>
            </div>
          
            <img 
              className={styles.plus} 
              onClick={onClickPlus}  
              src={isAdded ? "/img/add_to_card.svg":"/img/btn_plus.svg" } 
              alt="plus"
            />
            {/* Если нажали на кнпку меняй кртинку */}
          </div>
        </div>
    );
   
}
export default Card; //разрешение на экспорт данного файла 
//мы зовем компонент, которые из домика выйти не может, дверь то мы ему не открыли