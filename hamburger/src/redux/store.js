import { configureStore } from "@reduxjs/toolkit";
import AllCategoriesSlice  from "./Categories";
import SpecificPizzaSlice from "../redux/SpecificPizzaSlice";
import CartSlice from "./CartSlice";
import DesertSlice from "./DesertSlice";
import SpecificDessertSlice from "./SpecificDessertSlice";

export const store = configureStore({
    reducer:{
        Categories:AllCategoriesSlice,
        PizzaDetail:SpecificPizzaSlice,
        cart:CartSlice,
        Desert:DesertSlice,
        SpecificDesert:SpecificDessertSlice,
    }
})