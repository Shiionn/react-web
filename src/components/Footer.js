import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="item1">
                   <p>Политика конфеденциальности</p>
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>©️ Copyright 2023 Unique Stiches. All Rights Reserved. </span>
                </div>
                
                <a
                    href="https://web.telegram.org/k/"
                    target="_blank"
                    rel="noreferrer"
                    className="item3"
                >  
                <img  src="/img/telegram_icon.svg" alt="телеграмм" title="связь с нами в телеграм"/>
                </a>
                
                <a
                    href="https://vk.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="item4"
                >
                <img  src="/img/vk_icon.svg" alt="Вконтакте" title="Мы в Вконтакте"/>
                </a>


                <a
                    href="mailto:wool_wally@mail.ru"
                    target="_blank"
                    rel="noreferrer"
                    className="item5"
                >
                   <img  src="/img/email_icon.svg" alt="Почта" title="Написать нам на почту"/>
                </a>

            </div>
        </footer>
    );
};

export default Footer;