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
      </div>
    );
  }
  
  export default Favorites;