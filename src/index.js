import React from 'react';
import ReactDOM from 'react-dom/client';
import { bindActionCreators, legacy_createStore as createStore } from 'redux';
import reducer from './reducer';
import * as actions from './actions';
import Counter from './Counter';

// Стврорення СТОРЕ, з вбудованого REDUX
const store = createStore(reducer);

// Деструктуризація вбудованих функція в STORE
const { dispatch, subscribe, getState } = store;

// const update = () => {
// }

// subscribe(update);



const { inc, dec, rnd } = bindActionCreators(actions, dispatch);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <>
            <Counter />
        </>
    </React.StrictMode>,

);