import * as actionTypes from "../actions/types";

const initialState = {
    key: "value",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SOME_VALUE:
            return state;
        default:
            return state;
    }
};
export default reducer;
