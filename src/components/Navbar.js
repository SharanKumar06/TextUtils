import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

export default function Navbar(props) {
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} mx-0`}>
        <div className="container-fluid ">
          <Link className="navbar-brand" to={'/TextUtils'}><strong>{props.title}</strong></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/TextUtils'}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/about'} className="nav-link" >{props.aboutText}</Link>
              </li>
             
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form> */}
            <div className={`form-check form-switch text-${props.mode==='light'?'dark': 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label  className="form-check-label pr-5" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
            </div>
  <div className="btn-group ml-2 px-5" role="group" aria-label="First group">
    <button type="button" className="btn btn-primary"> </button>
    <button type="button" className="btn btn-danger"> </button>
    <button type="button" className="btn btn-secondary"> </button>
  </div>

          </div>
        </div>
      </nav>
    )
}

Navbar.propTypes={title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string.isRequired
}
Navbar.defaultProps={
    title: 'Title please',
    aboutText: 'About'
}