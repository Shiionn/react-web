import Card from '../components/Card';//Создаем компанент Card и импортруем код в него

function Home({
    items,
    searchValue,
    setSearchvalue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
  }) {
    return (
      <div className="content p-40">
       <div className="d-flex align-center justify-between mb-40"> 
        <h1>{searchValue? `Поиск по заросу: "${searchValue}"` : 'Все товары'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            {searchValue && (
            <img 
              onClick={()=>setSearchvalue('')}
              className="clear cu-p" 
              src="/img/removeAll.svg" 
              alt="Clear serch"
            />
          )}
            <input onChange={onChangeSearchInput} value ={searchValue} placeholder="Поиск..."/>
          </div>
        </div>

{/* Карточки товаров */}
        <div className=" d-flex flex-wrap"> {/* map пробегается по масиву */}
         {items.filter(item=>item.title.toLowerCase().includes(searchValue)).map((item, index) => (  
          <Card 
            // key={index}
            // title={item.title} 
            // price ={item.price} 
            // imageUrl={item.imageUrl}
            // onFavorite={(obj)=>onAddToFavorite(obj)}
            // onPlus={(obj)=> onAddToCart(obj)}
            key={index}
            onFavorite={(obj) => onAddToFavorite(obj)}
            onPlus={(obj) => onAddToCart(obj)}
            {...item}
          />
         ))}

        </div>
      </div>
    );
  }
  
  export default Home;