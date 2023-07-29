import React from 'react';
import ReactDOM from 'react-dom/client';
import { bindActionCreators, legacy_createStore as createStore } from 'redux';
import reducer from './reducer';
import App from './components/App';
import { Provider } from 'react-redux';


// Стврорення СТОРЕ, з вбудованого REDUX
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Деструктуризація вбудованих функція в STORE
// dispatch(action) -  Это функция, которая позволяет отправлять "действия" (actions) в хранилище. Действие - это простой объект, который описывает, что произошло в вашем приложении. Когда действие отправляется с помощью dispatch, оно передается в редьюсеры (reducers), где обрабатывается и возвращается новое состояние.
// subscribe(listener): Это функция, которая позволяет подписаться на изменения состояния хранилища. Вы можете передать функцию-слушатель (listener), которая будет вызываться каждый раз, когда происходит изменение состояния. Это позволяет вашему приложению реагировать на изменения и обновлять пользовательский интерфейс.
// getState -  Это функция, которая позволяет получить текущее состояние хранилища. Вызов getState() возвращает объект с текущим состоянием вашего приложения.

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />

        </Provider>
    </React.StrictMode>,
);



