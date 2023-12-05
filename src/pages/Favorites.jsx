import Card from '../components/Card';//Создаем компанент Card и импортруем код в него

function Favorites({items, onAddToFavorite}) {
    return (
      <div className="content p-40">
       <div className="d-flex align-center justify-between mb-40"> 
            <h1>Избранные товары</h1> 
        </div>

{/* Карточки товаров */}
        <div className=" d-flex flex-wrap"> {/* map пробегается по масиву */}
            {items.map((item, index) => (  
            <Card 
                key={index}
                //id={item.id}
               // title={item.title} 
               // price ={item.price} 
               // imageUrl={item.imageUrl}
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