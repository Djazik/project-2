import { configureStore  } from '@reduxjs/toolkit'
import counterSlice from './slice/counterSlice'
import wishlistSlice from './slice/wishlistSlice'
import cartSlice from './slice/cartSlice'
import {api} from "./api"
 
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    wishlist: wishlistSlice,
    cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaoultMiddleware) =>
  getDefaoultMiddleware().concat(api.middleware),
})
