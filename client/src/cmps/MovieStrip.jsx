import React from 'react'
import { useDispatch } from "react-redux";
import { addMov } from '../store/actions/movActions'
import history from '../history';

export const MovieStrip = ({ mov }) => {
    const dispatch = useDispatch();

    return (
        <div className="rb movie-strip">
            <div className="ral">
                <div className="add-button-col">

                    <button className="btn2 lnk-btn" onClick={() => {
                        dispatch(addMov(mov));

                        setTimeout(function () {
                            history.push("/movies");
                        }, 500);
                    }}>
                        <i className="fas fa-plus"></i> Add</button>
                </div>
                <p className="movie-title">{mov.name}</p>
            </div>
            <p className="movie-id">id: {mov.id}</p>
        </div>
    )
}