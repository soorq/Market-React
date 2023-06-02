import React, {Component} from "react";

import Header from "./Component/Header/Header";
import Card from "./Component/Card/Card";
import Cart from "./Component/Cart";

const itemsCard = [
    {id: 1,name: 'Мужские Кроссовки Nike Blazer Mid Suede' , price: 12999, img: '/img/1.jpg'},
    {id: 2,name: 'Мужские Кроссовки Nike Air Max 270' , price: 12999, img: '/img/2.jpg'},
    {id: 3,name: 'Мужские Кроссовки Nike Blazer Mid Suede' , price: 8499, img: '/img/3.jpg'},
    {id: 4,name: 'Кроссовки Puma X Aka Boku Future Rider' , price: 8999, img: '/img/4.jpg'},
]

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
        isOpenCart : false
    }

    this.CartOpen = this.CartOpen.bind(this)
  }
  render() {
    return(
        <div className='wrapper clear'>
            <Header onClickCart = {()=> this.CartOpen}/>
            {true ? <Cart /> : null}
            <main className="d-flex flex-column p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1 className='mb-40'>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt='search' />
                        <input type="text" placeholder='Поиск...'/>
                    </div>
                </div>

                <div className="sneakers d-flex flex-wrap align-center">
                    {
                        itemsCard.map((item,index) => (
                            <Card key={index} tovar = {item}
                                  onAdd={() => console.log('add')}
                                  onFavorite={() => console.log('избранное')}/>
                        ))
                    }
                </div>
            </main>
        </div>
    )
  }
    CartOpen = () => {
      this.setState(prev => ({isOpenCart : !prev.isOpenCart}))
        console.log(this.state.isOpenCart)
    }
}

export default App;
