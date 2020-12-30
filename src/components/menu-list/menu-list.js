import React, { useEffect } from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import './menu-list.scss';
import WithRestoService from '../hoc'
import {menuLoaded, menuRequested, menuError, addToCart} from '../../actions'
import Spinner from '../spinner'
import Error from '../error'
const MenuList = (props) => {
    const {RestoService, loading,error, menuLoaded,menuError,menuRequested} = props;

    useEffect(()=>{
        menuRequested();
        RestoService.getMenuItems()
        .then(rs=>menuLoaded(rs))
        .catch(err=>menuError())
    },[RestoService,menuError,menuLoaded,menuRequested])
    const { menuItems,addToCart } = props
    if (loading) {
        return <Spinner/>
    }
    if(error) {
        return <Error/>
    }
    return (
        <ul className="menu__list">
            {menuItems.map((menuItem) => {
                return <MenuListItem addToCart={()=>addToCart(menuItem.id)} key={menuItem.id} menuItem={menuItem}/>
                
            })}
        </ul>
    )
};

const mapStateToProps = (state) => {
    return {
        menuItems:state.menu,
        loading: state.loading,
        error: state.error,
    }
}
const mapDispatchToProps = {
     menuLoaded,
     menuRequested,
     menuError,
     addToCart,
}
export default WithRestoService()(connect(mapStateToProps,mapDispatchToProps)(MenuList));