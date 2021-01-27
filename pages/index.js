import Head from "next/head";
import styles from "../styles/Home.module.css";
import ReactPlayer from "react-player";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Latest Whtsqr Video</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>WHTSQR</h1>
        <h2 className={styles.subtitle}>Latest Release: Crisis Actor</h2>
        <div className={styles.video}>
          <ReactPlayer
            url="https://vimeo.com/503780095"
            controls
            width="100%"
            height="100%"
          />
        </div>

        <div className={styles.grid}>
          <a href="/search" className={styles.card}>
            <h3>Search for a video &rarr;</h3>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        &copy; Whtsqr 2021 - &nbsp;
        <a href="https://open.spotify.com/artist/3rNp4GNS3KMX40Jetz03Mv">
          Spotify
        </a>{" "}
        &nbsp;|&nbsp;{" "}
        <a href="https://music.apple.com/au/artist/whtsqr/616305211">
          Apple Music
        </a>{" "}
        &nbsp;|&nbsp;{" "}
        <a href="https://itunes.apple.com/au/artist/whtsqr/616305211">iTunes</a>{" "}
        &nbsp;|&nbsp;{" "}
        <a href="https://www.amazon.com/s?k=whtsqr">Amazon Music</a>{" "}
        &nbsp;|&nbsp;{" "}
        <a href="https://www.youtube.com/channel/UCPH4IBcokS-jRwUbIyqYrAw">
          YouTube
        </a>{" "}
        &nbsp;|&nbsp; <a href="https://vimeo.com/whtsqr">Vimeo</a>
      </footer>
    </div>
  );
}
