// *********   PAGE 2 - OUR MOVIES

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { MovieStripLocal } from '../cmps/MovieStripLocal'
import { loadMov } from '../store/actions/movActions'
import { setPageName } from '../store/actions/pageActions'


export const Movies = () => {
    const dispatch = useDispatch();
    const moviesInState = useSelector((state) => state.movReducer.mov);

    useEffect(() => {
        dispatch(loadMov());
    }, [])

    useEffect(() => {
        dispatch(setPageName('2'))
    })

    return (
        <div className="page-general">
            <div className="hor-block">
                <h1>Our Movies</h1>
                <p>This is our local movie library. Use the items below to create shows</p>
            </div>
            { moviesInState ? moviesInState.map((mov, idx) => { return <MovieStripLocal key={idx} mov={mov} /> }) : null}
        </div>
    )
}