import Popup from '@/components/popup';
import styles from './page.module.css';

export default function TripmaPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p className={styles.title}>It's more than just a trip</p>
        <div className={styles.searchContainer}>
          <input type="text" placeholder="From where?" className={styles.searchInput} />
          <input type="text" placeholder="Where to?" className={styles.searchInput} />
          <input type="date" className={styles.searchInput} />
          <input type="number" placeholder="1 Adult" className={styles.searchInput} />
          <button className={styles.searchButton}>Search</button>
        </div>
      </main>
      <Popup />
    </div>
  );
}