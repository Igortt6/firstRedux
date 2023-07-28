import { connect } from "react-redux";
import * as actions from '../actions'
import { bindActionCreators } from "redux";

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div className="wraper">
            <h1>{counter}</h1>
            <button onClick={inc} className="btn">inc</button>
            <button onClick={dec} className="btn">dec</button>
            <button onClick={rnd} className="btn">rnd</button>

        </div>
    )
}

// Функція, яка повертає ПРОПСами, необхідні данні, з глобального СТЕЙТу
const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
}

// // НЕ СКОРОЧЕНИЙ ВАРІАНТ
// // Функція, яка стровює ДІЮ, і передає їх до СТЕЙТу
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch)

// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);


// СКОРОЧЕНИЙ ВАРІАНТ (якщо actions - обʼєкт)
export default connect(mapStateToProps, actions)(Counter);