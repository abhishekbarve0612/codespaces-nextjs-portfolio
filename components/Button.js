import styles from './Button.module.scss'

export default function Button(props) {
  return <button type="button" className={styles.btn} {...props} />
}
