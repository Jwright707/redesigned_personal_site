import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import app from "./reducer/App";
import dashboard from "./reducer/Dashboard";
import content from './reducer/Content';
import contact from './reducer/Contact';
import loading from "./reducer/Loading"

function saveToSessionStorage(state){
    try {
        const serializedState = JSON.stringify(state)
        sessionStorage.setItem('state', serializedState)
    }catch (e) {
        console.log(e)
    }
}

function loadFromSessionStorage(){
    try {
        const serializedState = sessionStorage.getItem('state')
        if(!serializedState) {
            return undefined
        }
        return JSON.parse(serializedState)
    }catch (e) {
        console.log(e)
        return undefined
    }
}

const persistedState = loadFromSessionStorage()

const reducer = combineReducers({
    app,
    dashboard,
    content,
    contact,
    loading,
})

const middleware = applyMiddleware(thunk);

const store = createStore(
    reducer,
    persistedState,
    middleware
);

store.subscribe(() => saveToSessionStorage({
    // app: store.getState().app,
    dashboard: store.getState().dashboard,
    content: store.getState().content,
}))

export default store;