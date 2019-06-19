import AsyncStorage from '@react-native-community/async-storage';

//redux
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer, autoRehydrate } from 'redux-persist'


import reducer from './reducer'



const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['itemDetails','pricing']
};

const persistedReducer = persistReducer(persistConfig, reducer);

function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
        )
    );
    return createStore(persistedReducer, initialState, enhancer);
}

export const store = configureStore();

persistStore(store)


