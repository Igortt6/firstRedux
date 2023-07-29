import { connect, useSelector, useDispatch } from "react-redux";
import { inc, dec, rnd } from '../actions'

const Counter = () => {


    // ХУК useSelector  отримуе значення на пряму зі STORE
    const counter = useSelector(state => state.counter);

    // ХУК useDispatch - акшен криейтер. 
    const dispatch = useDispatch()

    return (
        <div className="wraper">
            <h1>{counter}</h1>
            <button onClick={() => dispatch(inc())} className="btn">inc</button>
            <button onClick={() => dispatch(dec())} className="btn">dec</button>
            <button onClick={() => dispatch(rnd())} className="btn">rnd</button>

        </div>
    )
}


export default Counter;
