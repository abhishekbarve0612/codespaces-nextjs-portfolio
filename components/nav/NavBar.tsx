import React from 'react';
import styles from './Button.module.scss'

const NavBar = (props: {}) => {
  const toggleDarkMode = () => {
    if (document.body.classList.contains('dark-mode')) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
  }

  return (
    <>
   <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid ml-3">
    <a className="navbar-brand" href="#">ABHISHEK</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">__about_me</a>
        <a className="nav-link" href="#">__my_projects</a>
        <a className="nav-link" href="#">__connect_with_me</a>
        <a 
          className="nav-link btn dark-mode-btn"
          onClick={toggleDarkMode}
        >__dark_mode</a>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar;
