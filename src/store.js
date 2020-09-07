import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import app from "./reducer/App";
import dashboard from "./reducer/Dashboard";

function saveToLocalStorage(state){
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    }catch (e) {
        console.log(e)
    }
}

function loadFromLocalStorage(){
    try {
        const serializedState = localStorage.getItem('state')
        if(!serializedState) {
            return undefined
        }
        return JSON.parse(serializedState)
    }catch (e) {
        console.log(e)
        return undefined
    }
}

const persistedState = loadFromLocalStorage()

const reducer = combineReducers({
    app,
    dashboard,
})

const middleware = applyMiddleware(thunk);

const store = createStore(
    reducer,
    persistedState,
    middleware
);

store.subscribe(() => saveToLocalStorage({
    // app: store.getState().app,
    dashboard: store.getState().dashboard
}))

export default store;