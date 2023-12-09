import React from "react";
import AppContext from "../context";

const Info = ({image, title, descriprion}) =>{
    const {setCartOpened} = React.useContext(AppContext);

    return(
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width="120px" height="120px" src={image} alt="Empty" />
            <h2>{title}</h2>
            <p className="opacity-6">{descriprion}</p>
            <button onClick={()=>setCartOpened(false)} class="greenButton">
              <img src="/img/strelka.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>
    )
}
//удалить этот файл
export default Info;