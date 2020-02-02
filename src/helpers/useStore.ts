import { createContext, useContext } from "react";
import ListStore from "../stores/list";

export const StoreContext = createContext<ListStore>({} as ListStore);
export const StorePrivider = StoreContext.Provider;

export const useStore = (): ListStore => useContext(StoreContext);
