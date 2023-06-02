import React, {Component} from "react";
class  Cart extends Component{
    render() {
        return(
            <div className="overlay">
                <div className="drawer">
                    <h2 className='mb-30'>Корзина</h2>

                    <div className="items">
                        <div className="cartItem d-flex align-center">
                            <img className='cartItemImg'  src="/img/1.jpg" alt="1"/>
                            <div className='mr-20'>
                                <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                                <b>12 999 руб.</b>
                            </div>
                            <img className='remove' src="/img/close.png" alt="close"/>
                        </div>
                        <div className="cartItem d-flex align-center">
                            <img className='cartItemImg'  src="/img/1.jpg" alt="1"/>
                            <div className='mr-20'>
                                <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                                <b>12 999 руб.</b>
                            </div>
                            <img className='remove' src="/img/close.png" alt="close"/>
                        </div>
                    </div>
                    <div className="CartTotalBlock">
                        <ul>
                            <li>
                                <span>Итого</span>
                                <div></div>
                                <b>21 498 руб.</b>
                            </li>
                            <li>
                                <span>Налог 5%</span>
                                <div></div>
                                <b>1074 руб.</b>
                            </li>
                        </ul>
                        <button className='greenBtn'>Оформить Заказ <img src="/img/arrow.png" alt="arrow"/></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;