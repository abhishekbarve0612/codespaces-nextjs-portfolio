import { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import ClickCount from '../components/ClickCount'
import NavBar from '../components/nav/NavBar'
import styles from '../styles/home.module.scss'


function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <div className='d-block w-100 my-home-wall justify-content-center d-flex flex-column fs-4 text-white'>
        <span className='first-line'>
          What I was in past, were My Decisions
        </span>
        <br/>
        <span className='second-line'>
          What I am now, is My Choice
        </span>
        <br/>
        <span className='third-line'>
          What I will be, is My Vision
        </span>
        <br />
        <span className='author text-end'> - Said By ME</span>
        <br />
        <span className='author-p-s text-end'>(I don't know if someone else said it first. Peace!)</span>
      </div>
      <hr className={styles.hr} />
    </main>
  )
}

export default Home
