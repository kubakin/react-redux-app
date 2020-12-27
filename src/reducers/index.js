const initialState = [];

const reducer = (state, actions)=>{
    switch (actions.type) {
        case 'MENU_LOADED':
            return {
                menu: actions.payload
            };
        default:
            return state;
    }
}
export default reducer;