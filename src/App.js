import React, { useState } from 'react';
import { increase, decrease, addToList, changeText } from './actions/action';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import counterStyles from './counter.module.css';
import textStyles from './text.module.css';

function App() {
    const [listElement, setListElement] = useState('');

    const dispatch = useDispatch();
    const state = useSelector((state) => state.simpleReducer);

    const { counter, text, list } = state;

    const handleChange = (e) => {
        setListElement(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addToList(listElement));
    };

    return (
        <div className='App'>
            <h1 className={counterStyles.counter}>{counter}</h1>
            <br />
            <h1 className={textStyles.text}>{text}</h1>
            <br />
            {list}
            <br />
            <button onClick={() => dispatch(increase())}>INCREASE</button>
            <br />
            <button onClick={() => dispatch(decrease())}>DECREASE</button>
            <br />
            <label>
                Change Text
                <br />
                <input
                    type='text'
                    onChange={(e) => dispatch(changeText(e.target.value))}
                />
            </label>
            <form onSubmit={handleSubmit}>
                <label>Add To List</label>
                <br />
                <input type='text' name='add_to_list' onChange={handleChange} />
                <input type='submit' />
            </form>
        </div>
    );
}

export default App;
