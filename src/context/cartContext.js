import { createContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return [...state, { ...action.product, quantity: 1 }];
		case "REMOVE_FROM_CART":
			return state.filter((item) => item.id !== action.id);
		case "INCREASE_QUANTITY":
			return state.map((item) =>
				item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
			);
		case "DECREASE_QUANTITY":
			return state.map((item) =>
				item.id === action.id && item.quantity > 1
					? { ...item, quantity: item.quantity - 1 }
					: item
			);
		case "CLEAR_CART":
			return [];
		default:
			throw new Error(`Unknown action: ${action.type}`);
	}
};

export const CartProvider = () => {
	const [cart, dispatch] = useReducer(cartReducer, []);

	return (
		<CartContext.Provider value={{ cart, dispatch }}></CartContext.Provider>
	);
};

// export const useCart = () => useContext(CartContext);
