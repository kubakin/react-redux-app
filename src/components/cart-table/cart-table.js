import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {onDelete} from '../../actions'
const CartTable = ({ items, onDelete }) => {
    console.log(items)
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map((item,key) => {
                        const { title, price, url, id,kolvo } = item
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div onClick={()=>onDelete(id)} className="cart__close">&times;</div>
                                <div className='cart__item-kolvo'>{kolvo}шт</div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    );
};
const Dispatches = {
    onDelete
    
}
const ItemsFromStore = ({items})=>{
    return {
        items
    }
}
export default connect(ItemsFromStore,Dispatches)(CartTable);