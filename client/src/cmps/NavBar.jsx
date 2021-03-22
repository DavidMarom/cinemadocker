import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMov } from "../store/actions/movActions";
import { loadShow } from "../store/actions/showActions";
import { NavLink } from 'react-router-dom'

function _NavBar() {
  const pageName = useSelector(state => state.pageReducer.pageName);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMov());
    dispatch(loadShow());
  }, []);

  return (
    <div className="nav-bar ca">
      <NavLink to="/">
        <h1>Cinema Now</h1>
      </NavLink>

      <div className={(pageName === '1' ? "active-cell" : "inactive-cell")}>
        <NavLink to="/">
          <p className="nav-btn">Find Movies</p>
        </NavLink>
      </div>

      <div className={(pageName === '2' ? "active-cell" : "inactive-cell")}>

        <NavLink to="/movies">
          <p className="nav-btn">Our Movies</p>
        </NavLink>
      </div>
      <div className={(pageName === '3' ? "active-cell" : "inactive-cell")}>

        <NavLink to="/shows">
          <p className="nav-btn">Manage Shows</p>
        </NavLink>
      </div>
    </div>
  )
}

export const NavBar = _NavBar
