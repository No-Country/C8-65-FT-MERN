import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  // Eliminar localstorage del carro al salir de la sesion
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  cart: {
    shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {},
    paymentMethod: localStorage.getItem("paymentMethod")
      ? localStorage.getItem("paymentMethod")
      : "",
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
  favorite: JSON.parse(localStorage.getItem("favoriteItem")) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      const newFavorite = action.payload;
      const AlreadyFavorite = state.favorite.some(
        (favItem) => favItem._id === newFavorite._id
      );
      const Favorite = AlreadyFavorite
        ? state.favorite
        : [...state.favorite, { ...newFavorite, isFavorite: true }];
      localStorage.setItem("favoriteItem", JSON.stringify(Favorite));
      return { ...state, favorite: Favorite };
    case "DELETE_TO_FAVORITE":
      const Data = action.payload;
      const DeleteAlreadyFav = state.favorite.filter(
        (fav) => fav._id !== Data._id
      );
      localStorage.setItem("favoriteItem", JSON.stringify(DeleteAlreadyFav));
      return { ...state, favorite: DeleteAlreadyFav };

    case "ADD_TO_CART":
      const newItem = action.payload;
      //verificacion del item
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );

      //funcion para no repetir un item ya agregado
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    case "CART_REMOVE_ITEM": {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "CART_CLEAR":
      return { ...state, cart: { ...state.cart, cartItems: [] } };

    case "USER_SIGNIN":
      return { ...state, userInfo: action.payload };
    case "USER_SIGNOUT":
      return {
        ...state,
        userInfo: null,
        cart: {
          cartItems: [],
          shippingAddress: {},
          paymentMethod: "",
        },
      };
    case "SAVE_SHIPPING_ADDRESS":
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: action.payload,
        },
      };
    case "SAVE_PAYMENT_METHOD":
      return {
        ...state,
        cart: { ...state.cart, paymentMethod: action.payload },
      };
    default:
      return state;
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
