import {
    INCREASE,
    DECREASE,
    CHANGE_TEXT,
    ADD_TO_LIST,
} from '../actions/actionTypes';

const initialState = {
    counter: 0,
    text: '',
    list: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1,
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text,
            };
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item),
            };
        default:
            return state;
    }
}
