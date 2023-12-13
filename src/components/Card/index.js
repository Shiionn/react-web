import React from 'react'
import ContentLoader from "react-content-loader";
import AppContext  from '../../context';
import styles from './Card.module.scss';



function Card({
  id,
  title, 
  imageUrl, 
  price, 
  onFavorite, 
  onPlus, 
  favorited = false, 
  loading = false //для состояния загрузки
}) {
const {isItemAdded} = React.useContext(AppContext);
const[isFavorite, setIsFavorite]=React.useState(favorited); //метод для добвления в избранное
const obj ={id, parentId: id, title, imageUrl, price}; //parentId: id в parentId передать id который есть у продукта


//для добавления в корзину
const onClickPlus = () => {
  onPlus(obj);
};



//для добавления в избранное
const onClickFavorite = ()=>{
  onFavorite({id, title, imageUrl, price}); //вызываем метод который вызывет другой метод который в свою очередь отправляет запрос на сервер
  setIsFavorite(!isFavorite);
};


//console.log(isAdded, props.title);

    return (
        
        <div className={styles.card}>
          {
            loading ?(
            <ContentLoader 
            speed={2}
            width={150}
            height={190}
            viewBox="0 0 150 190"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <rect x="0" y="0" rx="10" ry="10" width="150" height="91" /> 
            <rect x="0" y="110" rx="10" ry="10" width="150" height="15" /> 
            <rect x="0" y="136" rx="10" ry="10" width="93" height="15" /> 
            <rect x="0" y="165" rx="10" ry="10" width="80" height="24" /> 
            <rect x="118" y="156" rx="10" ry="10" width="32" height="32" />
          </ContentLoader>
          ): (
            <>
             {onFavorite&& <div className={styles.favorite} onClick={onClickFavorite}> 
             <img 
                  src={isFavorite ? "/img/like_it.svg":"/img/not_like.svg" }
                  alt="Unlike it!"
                /> 
              </div> }
              <img width={133} high={112} src={imageUrl}  alt="sweater" />
              <h5>{title}</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column cardButton">
                  <span> Цена: </span>
                  <b> {price} руб.</b>
                </div>
              
                {onPlus &&<img //если onPlus не передан то кнопку добавить в корзину не отображать
                  className={styles.plus} 
                  onClick={onClickPlus}  
                  src={isItemAdded(id) ? '/img/add_to_cart.svg' : '/img/btn-plus.svg'}
                  alt="plus"
                />}
                {/* Если нажали на кнпку меняй кртинку */}
            </div>
          </>
          )}
        </div>
    ); 
}
export default Card; //разрешение на экспорт данного файла 
//мы зовем компонент, которые из домика выйти не может, дверь то мы ему не открыли