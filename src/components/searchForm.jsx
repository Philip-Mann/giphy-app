import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { modifySearch } from '../store/searchSlice';


function SearchForm() {

    const [q, setQ] = useState('');
    const [rating, setRating] = useState('all');
    const [limit, setLimit] = useState(20);
    const dispatch = useDispatch();
    
   
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(modifySearch({
            q,
            rating,
            limit
        }))
    }

    // Standard function that work for all state changes that correspond to an input's name.
    const createChangeHandler = (setHook) => (evt) => {
        setHook(evt.target.value)
    }

    // Standard function that work for all state changes that correspond to an input's name.
    const limitChangeHandler = (evt) => {
        setLimit(parseInt(evt.target.value))
    }

    return (
        <div className="form-container mb-3">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    {/* Binding state to value */}
                    <input className="form-control" type="text" name="q" placeholder="Search for gif..." value={q} onChange={createChangeHandler(setQ)}/>
                </div>
                <div className="form-group d-flex justify-content-around">
                    <div>Limit Amount</div>
                    <div className="form-check">
                        {/* Binded state to these values as well and added onChange for each radio button */}
                        <input className="form-check-input" type="radio" id="five" name="limit" value="5" checked={5===limit} onChange={limitChangeHandler} />
                        <label className="fo d-flex justify-content-around rm-check-label" htmlFor="five">5</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" id="twenty" name="limit" value="20" checked={20===limit} onChange={limitChangeHandler} />
                        <label className="fo d-flex justify-content-around rm-check-label" htmlFor="twenty">20</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" id="fifty" name="limit" value="50" checked={50===limit} onChange={limitChangeHandler} />
                        <label className="form-check-label" htmlFor="fifty">50</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating</label>
                    {/* The value here set the value of the whole control and can change the selected item */}
                    <select className="form-control" name="rating" value={rating} onChange={createChangeHandler(setRating)}>
                        {/* These values only apply when this option is selected */}
                        <option value="all">All</option>
                        <option value="g">G</option>
                        <option value="pg">PG</option>
                        <option value="pg-13">PG-13</option>
                        <option value="r">R</option>
                    </select>
                </div>
                <button className="btn btn-dark" type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchForm;
