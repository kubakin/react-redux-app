const initialState = {
    menu: [],
    loading: false,
    error: false,
    item: {},
    items: [], //korzina
    sum: 0
};

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                loading: false,
                menu: actions.payload,
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true,
            };
        case 'MENU_ERROR':
            return {
                error: false,
                menu: state.menu,
                loading: false,
            };
        case 'KORZINA':
            console.log(state.items)
            const id = actions.payload
            let new1;
            const newItm = state.menu.find(itm => itm.id === id);
            const stateInx = state.items.findIndex(itm => itm.id === id);
            const newItem = { ...newItm }

            const summa = state.sum + newItem.price

            if (stateInx !== -1) {
                new1 = {
                    ...state.items[stateInx],
                    kolvo: state.items[stateInx].kolvo + 1,
                }
            }
            else {
                return {
                    ...state,
                    sum: summa,
                    items: [
                        ...state.items,
                        {
                            ...newItm,
                            kolvo: 1,
                        }
                    ],
                    loading: false,
                    error: false,
                }
            }
            // console.log()
            // console.log(new1)
            // console.log()

            return {
                ...state,
                sum: summa,
                items: [
                    ...state.items.slice(0, stateInx),
                    new1,
                ],
                loading: false,
                error: false,
            }
        case 'ITEM_LOAD':
            return {
                item: actions.payload,
                loading: false,
                error: false
            };
        case 'DELETE_ITEM':
            const ids = actions.payload
            const item = state.items.findIndex(itm => itm.id === ids)
            console.log(item)
            const summ = state.sum - state.items[item].price

            if (state.items[item].kolvo > 1) {
                return {
                    ...state,
                    sum: summ,
                    items: [
                        ...state.items.slice(0, item),
                        {
                            ...state.items[item],
                            kolvo: state.items[item].kolvo - 1
                        }
                    ]
                }
            }
            const newMass = state.items.filter(item => ids !== item.id)
            return {
                ...state,
                sum: summ,
                items: newMass
            }
        default:
            return state;
    }
}
export default reducer;