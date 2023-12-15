import { ThreeExample } from './components/ThreeExample'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h2>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </h2>
      </div>

      <ThreeExample />
    </main>
  )
}
