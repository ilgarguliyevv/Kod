import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setBasket: (state, action) => {
      let elemIndex = state.basket.findIndex(
        (elem) => elem._id == action.payload._id
      );
      if (elemIndex === -1) {
        state.basket = [...state.basket, { ...action.payload, count: 1 }];
      } else {
        state.basket[elemIndex].count++;
      }
      localStorage.setItem("basket", JSON.stringify([...state.basket]));
    },

    setFavorites: (state, action) => {
      let elemIndex = state.favorites.findIndex(
        (elem) => elem._id === action.payload._id
      );
      if (elemIndex === -1) {
        state.favorites = [...state.favorites, { ...action.payload }];
      } else {
        state.favorites = state.favorites.filter(
          (el) => el._id !== action.payload._id
        );
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    decreaseCount: (state, action) => {
      let elemIndex = state.basket.findIndex(
        (elem) => elem._id == action.payload._id
      );
      state.basket[elemIndex].count--;
      if (action.payload._id === -1) {
        state.basket = state.basket.filter(
          (elem) => elem._id !== action.payload._id
        );
        localStorage.setItem("basket", JSON.stringify([...state.basket]));
      }
      localStorage.setItem("basket", JSON.stringify([...state.basket]));
    },
    removeBasket: (state, action) => {
      state.basket = state.basket.filter(
        (elem) => elem._id !== action.payload._id
      );
      localStorage.setItem("basket", JSON.stringify([...state.basket]));
    },
    removeAllBasket: (state) => {
      (state.basket = []), localStorage.setItem("basket", JSON.stringify([]));
    },
  },
});
export const {
  setBasket,
  setFavorites,
  decreaseCount,
  removeBasket,
  removeAllBasket,
} = counterSlice.actions;

export default counterSlice.reducer;
