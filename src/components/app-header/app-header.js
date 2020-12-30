import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const AppHeader = ({total}) => {
    console.log(total)
    return (
        <header className="header">
            <Link className="header__link" to="/menu">
                Menu
            </Link>
            <Link className="header__link" to='item'>
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </Link>
        </header>
    )
};
const ValueFromStore = (state)=> {
    return {
        total:state.sum
    }
}
export default connect(ValueFromStore)(AppHeader);