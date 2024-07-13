import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [
		{
			id: "",
			name: "",
			image: "",
			quantity: "",
			unitPrice: "",
			totalPrice: "",
		},
	],
};

const cartSlice = createSlice({
	initialState,
	name: "cart",
	reducers: {
		addItem(state, action) {
			//   console.log(action.payload)
			const itemExist = state.cart.find(
				(item) => item.id === action.payload.id
			);
			if (!itemExist) state.cart.push(action.payload);
		},
		deleteItem(state, action) {
			state.cart = state.cart.filter((item) => item.id !== action.payload);
		},
		increaseItemQuantity(state, action) {
			const item = state.cart.find((item) => item.id === action.payload);
			item.quantity++;
			item.quantity * item.unitPrice;
		},
		decreaseItemQuantity(state, action) {
			const item = state.cart.find((item) => item.id === action.payload);
			item.quantity--;
			item.quantity * item.unitPrice;
			if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
		},
		clearCart(state) {
			state.cart = [];
		},
	},
});
export const {
	addItem,
	deleteItem,
	increaseItemQuantity,
	decreaseItemQuantity,
	clearCart,
} = cartSlice.actions;
export const getTotalCartQuantity = (state) =>
	state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const getCurrentQuantity = (id) => (state) =>
	state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;
export const getTotalCartprice = (state) =>
	state.cart.cart.reduce((sum, item) => sum + item.unitPrice, 0);
export const getCart = (state) => state.cart.cart;
export default cartSlice.reducer;
