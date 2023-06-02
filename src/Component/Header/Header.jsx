import React, {Component} from "react";
import '../../index.scss'

class Header extends Component{
    render() {
        return (
            <header className='d-flex justify-between align-center p-40'>
                <div className="d-flex align-center">
                    <img src="/img/logo.png" width={40} height={40} alt='logo'/>
                    <div className='headerLeft-info'>
                        <h3 className='text-uppercase'>React Sneaker</h3>
                        <p className='opacity-5'>Магазин лучших кроссовок</p>
                    </div>
                </div>

                <ul className='d-flex'>
                    <li className='mr-30' onClick={this.props.onClickCart}>
                        <img src="/img/cart.png"
                             alt='cart'/>
                        <span>1205 руб.</span>
                    </li>
                    <li>
                        <img src="/img/user.png" alt='profile'/>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;