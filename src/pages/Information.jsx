import React from 'react';
import { Link } from 'react-router-dom';

function Information() {
    return (



       <div className="content p-40">
            <div className=" d-flex p-10 justify-center  ">
            <h1> О нас</h1>
            </div>
            <div className="d-flex">
                <div className="mr-20">
                    <img widh={10} heigh={10} src="/img/sweater_info.svg" alt="info" title="Дополнительная информация"/> 
                </div>

                <div className="align-left">
                <p style={{fontSize:'19px', lineHeight:'1.5'}}> 
                Добро пожаловать в наш интернет-магазин " Unique Stiches"! Мы рады приветствовать вас на странице, посвященной нашей миссии и истории бренда.
                </p>
                <p style={{fontSize:'19px', lineHeight:'1.5'}}> Наша миссия заключается в том,
                    чтобы поддержать пожилых людей и людей с 
                    ограниченными возможностями, предложив им рабочие места 
                    и творческое развитее. Мы стремимся поддерживать 
                    талантливых рукодельников, помогая им реализовать свой 
                    потенциал и заработать на своем творчестве. Мы верим, 
                    что каждый человек заслуживает возможность проявить себя 
                    и быть полезным обществу, несмотря на любые ограничения.
                </p>
                </div>       
            </div>

            <p style={{fontSize:'19px', lineHeight:'1.5'}}>
                    Покупателям мы предлагаем уникальные вязаные изделия 
                    выполненные вручную с использованием только высококачественных материалов. 
                    Приобретая наши изделия, вы не только получаете красивую и уютную вещь, 
                    но и поддерживаете талантливых мастеров.
            </p>


            <div className=" d-flex  justify-center  ">
            <h3> История создания и индивидуальные заказы</h3>
            </div>

            <div className="d-flex">
                <div className="align-right">
                    <p style={{fontSize:'19px', lineHeight:'1.5'}}> 
                    Интересный факт: наш магазин был основан группой энтузиастов, 
                    которые сами сталкивались с проблемами трудоустройства людей с 
                    ограниченными возможностями. Мы решили создать этот бренд, 
                    чтобы помочь им найти способ реализовать свои таланты и умения.
                    </p>

                    <p style={{fontSize:'19px', lineHeight:'1.5'}}>
                    По многочисленным просьбам у нас так же появилась возможность заказа изделий по вашему желанию, 
                    просто напишите нам вашу идею, прикрепите референсы, и мы 
                    обязательно свяжемся с вами для уточнения деталей и сроков работы. 
                    Срок выполнения индивидуального заказа составляет от 25 рабочих дней.
                    </p>
                </div>
                
                <div>
                <img widh={10} heigh={10} src="/img/scarf.svg" alt="info" title="Дополнительная информация"/> 
                </div>

               
            </div>
            

            <div>
                <div className="d-flex justify-center">
                    <h3>
                        Способы поддержать наш бренд
                    </h3>
                </div>

                

                <div className="d-flex">
                    <div className="mr-20">
                        <img widh={10} heigh={10} src="/img/left_boy.svg" alt="info" title="Дополнительная информация"/> 
                    </div>

                    <div className="align-left">
                    <p style={{fontSize:'19px', lineHeight:'1.5'}}> 
                    Мы приглашаем вас поддержать наш проект, делая покупки у нас. 
                    Каждая ваша покупка помогает нам продолжать поддерживать этих 
                    талантливых рукодельников и расширять ассортимент товаров. 
                    Также вы можете поддержать нас, рассказав друзьям и близким о нашем магазине.
                    Мы так же всегда в поиске новых мастеров поэтому ели вы знаете человека в возрасте,
                    который любит вязать и хочет попробовать себя в роли мастера в
                    нашем магазине или вы не можете найти работу из-за отклонений в
                    здоровье, обязательно свяжитесь с нами по почте!

                    </p>
                    </div>
                </div>


                <div className="d-flex">
                <div className="align-right  mb-40">
                    <p style={{fontSize:'19px', lineHeight:'1.5'}}>
                         Благодарим вас за внимание к нашему проекту и надеемся, 
                         что здесь вы найдете для себя удивительные вязаные изделия, 
                         сделанные с любовью и теплом, которые согрею вас даже в самые 
                         сильные холода. Спасибо за вашу поддержку!
                    </p>
                </div>
                
                <div className="mb-20">
                <img widh={10} heigh={10} src="/img/vareshki4.svg" alt="info" title="Дополнительная информация"/> 

                </div>
            </div>


            </div>
            <Link to="/">
            <button className="greenButton">
            
          <p> <img src="/img/strelka_nazad.svg" alt="Arrow"/> <span>на главную</span></p> 
            </button>
            </Link>
       </div>
      
    );
  }
  
  export default Information;