import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/filipebteixeira98.png"
        alt="Filipe Teixeira"
      />
      <div>
        <strong>Filipe Teixeira</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  )
}
