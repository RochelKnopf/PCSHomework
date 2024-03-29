import './Header.css';
import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header>
        <h1>PCS Blogs</h1>
        <nav>
          <ul>
            <li><NavLink to="/blogs">blog list</NavLink></li>
          </ul>
        </nav>
      </header>
      <hr />
    </>
  )
}
