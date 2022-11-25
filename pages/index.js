import { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import ClickCount from '../components/ClickCount'
import styles from '../styles/home.module.scss'


function Home() {
  return (
    <main className={styles.main}>
      <h1>Fast Refresh Demo</h1>
      <p>
        Fast Refresh is a Next.js feature that gives you instantaneous feedback
        on edits made to your React components, without ever losing component
        state.
      </p>
      <hr className={styles.hr} />
    </main>
  )
}

export default Home
