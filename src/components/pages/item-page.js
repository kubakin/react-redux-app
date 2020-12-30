import React, { useEffect } from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import {itemLoaded} from '../../actions';
import WithRestoService from '../hoc'

const ItemPage = (props) => {
    useEffect(()=>{
        props.RestoService.getMenuItem(1)
        .then(rs=>props.itemLoaded(rs))
    },[props])
    const {item} = props;
    return (
        <div className="cart"> 
            <MenuListItem menuItem = {item}/>
        </div>
    )
}
const mapDispatchToProps =  {
    itemLoaded
}
const mapStateToProps=(state) => {
    console.log(state);
    return {
        item: state.item
    }
}
export default WithRestoService()(connect(mapStateToProps,mapDispatchToProps)(ItemPage));