const initialState = { counter: 0 };


// Всі можливі варіанти стейту 
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC":
            return {
                ...state,
                counter: state.counter + 1
            };
        case "DEC":
            return {
                ...state,
                counter: state.counter - 1
            };
        case "RND":
            return {
                ...state,
                counter: state.counter * action.payload
            };
        default:
            return state;
    }
}

export default reducer;