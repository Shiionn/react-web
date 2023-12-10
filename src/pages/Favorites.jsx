import React from 'react';
import Card from '../components/Card';//Создаем компанент Card и импортруем код в него
import AppContext  from '../context';

function Favorites({onAddToFavorite}) {
  const {favorites} = React.useContext(AppContext);
    return (
      <div className="content p-40">
       <div className="d-flex align-center justify-between mb-40"> 
            <h1>Избранные товары</h1> 
        </div>

        {favorites.length>0 ? (
          <>
            {/* Карточки товаров */}
            <div className=" d-flex flex-wrap"> {/* map пробегается по масиву */}
              {favorites.map((item, index) => (  
                <Card 
                  key={index}
                  favorited={true}
                  onFavorite={onAddToFavorite}
                  {...item}
                        
                />
              ))}
            </div>
          </>
        ):(
          <>
            <div className="cartEmpty d-flex align-center justify-center flex-column flex">
              <img className="mb-20" width="120px" height="120px" src="/img/broken-heart.svg" alt="Empty" />
              <h2>Нет избранных товаров</h2>
              <p className="opacity-6">Вы еще не добавили ни один товар в избранное</p>
            </div>
          </>
          )}
    </div>
    );
  }
  
  export default Favorites;