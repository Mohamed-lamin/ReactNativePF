import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "./features/basketSlice"
import restaurantReducer from "./features/restaurantSlice"
import commandesReducer from "./features/commandeSlice"
import typesReducer from "./features/typeSlice"
import categoryReducer from "./features/categorySlice"
import allRestaurants from './features/allrestaurantsSlice'
import allDishes from './features/alldishesSlice'
export const store = configureStore({
  reducer: {
    basket:basketReducer,
    restaurant:restaurantReducer,
    commandes:commandesReducer,
    types:typesReducer,
    categories:categoryReducer,
    theAllrestaurants:allRestaurants,
    theAlldishes:allDishes
  },
})

