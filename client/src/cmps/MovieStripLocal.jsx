import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { removeMov } from '../store/actions/movActions'
import { addShow } from '../store/actions/showActions'
import history from '../history';

export const MovieStripLocal = ({ mov }) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [hall, setHall] = useState(0);
    const [time, setTime] = useState();

    const doAdd = (event) => {
        event.preventDefault();
        const jsObj = Date.parse(time); // to unix time
        let newShow = { title: mov.name, hall: hall, time: time, ts: jsObj }
        dispatch(addShow(newShow));
        setEdit(false);
    }

    let trash = (<i className="far fa-trash-alt"></i>);
    let addForm = (
        <form onSubmit={doAdd} className="ral">
            <input className="input" type="number" name="hall" onChange={ev => { setHall(ev.target.value); }} placeholder="Hall" />
            <input className="input" type="datetime-local" name="time" onChange={ev => { setTime(ev.target.value); }} />
            <div><button className="btn-add" >Add</button></div>
        </form>);

    return (
        <div className="rb movie-strip">
            {/* LEFT */}
            <div className="ral">

                <button className="btn-del lnk-btn"
                    onClick={() => {
                        dispatch(removeMov(mov._id));
                        history.push("/movies");
                    }}>
                    {trash}
                </button>

                <p className="movie-title">{mov.name}</p>
                <button className="btn2 lnk-btn" onClick={() => setEdit(!edit)}>
                    {edit ? <p>◄ Cancel</p> : <p>Add Show</p>}
                </button>
                <div>{edit ? (addForm) : null}</div>
            </div>


            {/* RIGHT */}
            <div className="h-center">
                <p className="movie-id">id: {mov.id}</p>
            </div>
        </div>
    )
}