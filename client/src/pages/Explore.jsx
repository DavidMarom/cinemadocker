// *********   PAGE 1 - EXPLORE

import React, { useState, useEffect } from 'react'
import { tmdbService } from '../services/tmdbService'
import { MovieStrip } from '../cmps/MovieStrip'
import { useDispatch } from 'react-redux'
import { setPageName } from '../store/actions/pageActions'


export const Explore = () => {
    const dispatch = useDispatch();

    const [searchVal, setSearchVal] = useState('movie');
    const [lastTime, setlastTime] = useState(Date.now());
    const [que, setQue] = useState(0);
    const [movies, setMovies] = useState();

    useEffect(() => { // search field changed (debounce)
        if (searchVal) {
            if ((Date.now() - lastTime) > 2000) { // if slow enough
                tmdbService.getMovie(searchVal).then(res => { setMovies(res) }) // Do API call
                setlastTime(Date.now());
            } else {
                setQue(que + 1);
                setTimeout(function () {
                    if (que === 1 || que < 1) {
                        tmdbService.getMovie(searchVal).then(res => { setMovies(res) }) // Do API call
                        setlastTime(Date.now());
                        setQue(que - 1);
                    }
                }, 1000);
            }
        } // if searchVal
    }, [searchVal]);

    useEffect(() => {
        dispatch(setPageName('1'))
    })

    return (
        <div className="page-general">
            <div className="hor-block">

                <h1>Explore new movies</h1>
                <div className="search-bar ral">
                    <p>Search for new movies: </p>
                    <input className="input"
                        value={searchVal}
                        type="text"
                        onChange={ev => { setSearchVal(ev.target.value); }} />
                </div>
            </div>
            {movies ?
                movies.results.map((mov, idx) => {
                    return <MovieStrip
                        key={idx}
                        mov={mov}
                    />
                }) : null}
        </div>
    )
}