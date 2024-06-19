import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {store} from "../../redux/store";

type RootStateType = ReturnType<typeof store.getState>
type AppDispatchType = typeof store.dispatch

const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatchType>();

export {useAppDispatch, useAppSelector}