import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="item1">
                   <h4> Политика конфеденциальности</h4>
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>©️ Copyright 2023 YourCompany. All Rights Reserved. </span>
                </div>
                
                <a
                    href="https://github.com/sudiptob2/simple-react-footer"
                    target="_blank"
                    rel="noreferrer"
                    className="item3"
                >  
                <img  src="/img/cart.svg" alt="cart"/>
                </a>
                
                <a
                    href="http://fb.com/sudiptob2"
                    target="_blank"
                    rel="noreferrer"
                    className="item4"
                >
                <img  src="/img/cart.svg" alt="cart"/>
                </a>


                <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="item5"
                >
                   <img  src="/img/cart.svg" alt="cart"/>
                </a>

            </div>
        </footer>
    );
};

export default Footer;