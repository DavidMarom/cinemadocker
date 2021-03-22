// *********   PAGE 3 - SHOWS

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ShowStrip } from '../cmps/ShowStrip'
import { loadShow } from '../store/actions/showActions'
import { setPageName } from '../store/actions/pageActions'


export const Shows = () => {
    const dispatch = useDispatch();
    const showsInState = useSelector((state) => state.showReducer.show);

    useEffect(() => {
        dispatch(loadShow());
    }, [])

    useEffect(() => {
        dispatch(setPageName('3'))
    })

    return (
        <div className="page-general">
            <div className="hor-block">
                <h1>Shows</h1>
            </div>

            { showsInState ? showsInState.map((show, idx) => { return <ShowStrip key={idx} show={show} /> }) : console.log('STATE NOT READY')}

        </div>
    )
}
