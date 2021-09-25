import { INCREASE, DECREASE, CHANGE_TEXT, ADD_TO_LIST } from './actionTypes';

export const increase = () => {
    return {
        type: INCREASE,
    };
};

export const decrease = () => {
    return {
        type: DECREASE,
    };
};

export const changeText = (text) => ({
    type: CHANGE_TEXT,
    text,
});

export const addToList = (item) => ({
    type: ADD_TO_LIST,
    item,
});
