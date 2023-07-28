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
export default Counter;