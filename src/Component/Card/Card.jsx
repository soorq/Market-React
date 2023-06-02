import React, {Component} from "react";
import StylesCard from  './Card.module.scss'

class Card extends Component
{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            isAdd: false,
            isFavorite: false
        }
        this.isAdded = this.isAdded.bind(this)
        this.isFavorite = this.isFavorite.bind(this)
    }
    tovar = this.props.tovar
    render() {
        return (
            <div className={StylesCard.card}>
                <div className={StylesCard.selected}>
                    <img onClick={this.isFavorite}
                         src={this.state.isFavorite ? "/img/liked.svg":"/img/like.svg"}
                         alt='liked'/>
                </div>
                <img width={133} height={112} src={this.tovar.img} alt='sneacker'/>
                <h5>{this.tovar.name}</h5>
                <div className='d-flex fle justify-between align-center'>
                    <div className='d-flex flex-column'>
                        <span>Цена:</span>
                        <b>{this.tovar.price} руб.</b>
                    </div>
                    <img className={StylesCard.plus}
                         onClick={this.isAdded}
                         src={this.state.isAdd ? "/img/checked-btn.png" : "/img/btn.png"}
                         alt='btn'/>
                </div>
            </div>
        );
    }

    isFavorite = () => {
        this.setState(prev => ({isFavorite: !prev.isFavorite}))
    }
    isAdded = () => {
        this.setState(prev => ({isAdd: !prev.isAdd}))
        console.log(this.state.isAdd)
    }
}


export default Card;