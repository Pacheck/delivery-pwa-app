import { combineReducers, createStore } from 'redux';
import { ThemeReducer } from './reducers/theme.reducer';

import { UserInfoReducer } from './reducers/user-info.reducer';
import { UserOrderReducer } from './reducers/user-orders.reducer';

const rootReducer = combineReducers({
    theme: ThemeReducer,
    userInfo: UserInfoReducer,
    userOrder: UserOrderReducer,
})

export type RootReducerType = ReturnType<typeof rootReducer>


const store = createStore(rootReducer);

export default store;
