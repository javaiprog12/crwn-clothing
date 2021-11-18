import {createSelector} from 'reselect';

//define an input selector to return a slice o the state
const selectCart = state => state.cart;


export const selectCartHidden = createSelector (
    [selectCart],
    cart =>cart.hidden
)

//you can input selectors in an array as first argument ,the function returned asoutput selectors in second argument
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)



export const selectorCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>  cartItems.reduce((accumulatedQuantity,cartItem) => accumulatedQuantity+cartItem.quantity,0)
)


export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity,cartItem) =>accumulatedQuantity +cartItem.quantity*cartItem.price,0)
)