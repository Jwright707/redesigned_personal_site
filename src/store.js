import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
// import dashboard from "./reducers/Dashboard/Dashboard";
// import sales from "./reducers/Sales/Sales";

// function saveToLocalStorage(state){
//     try {
//         const serializedState = JSON.stringify(state)
//         localStorage.setItem('state', serializedState)
//     }catch (e) {
//         console.log(e)
//     }
// }
//
// function loadFromLocalStorage(){
//     try {
//         const serializedState = localStorage.getItem('state')
//         if(!serializedState) {
//             return undefined
//         }
//         return JSON.parse(serializedState)
//     }catch (e) {
//         console.log(e)
//         return undefined
//     }
// }

// const persistedState = loadFromLocalStorage()

const reducer = combineReducers({
    // dashboard,
    // sales
})

const middleware = applyMiddleware(thunk);

const store = createStore(
    reducer,
    // persistedState,
    middleware
);

// store.subscribe(() => saveToLocalStorage({
//     dashboard: store.getState().dashboard,
//     sales: store.getState().sales
// }))

export default store;