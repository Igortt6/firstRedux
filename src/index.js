import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators, legacy_createStore as createStore } from 'redux';
import reducer from './reducer';
import * as actions from './actions';

// Стврорення СТОРЕ, з вбудованого REDUX
const store = createStore(reducer);

// Деструктуризація вбудованих функція в STORE
const { dispatch, subscribe, getState } = store;

const update = () => {
    document.getElementById('counter').textContent = getState().value;
}

subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args));
// }

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);


// Виклик функцій при зваємодії з UI
document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('rnd').addEventListener('click', rnd(value));


ReactDOM.render(
    <React.StrictMode>
        <>

        </>
    </React.StrictMode>,
    document.getElementById('root')
);