import Head from "next/head";
import styles from "../styles/Home.module.css";
import ReactPlayer from "react-player";

function Search({ data }) {
  const onClick = function () {
    window.location.href =
      "/search?query=" + document.getElementById("query").value;
  };
  const detectEnter = function (e) {
    if (e.key === "Enter") {
      window.location.href =
        "/search?query=" + document.getElementById("query").value;
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Video Search</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <p>{data.message}</p>
        <h1 className={styles.title}>{data.title}</h1>

        <div className={styles.video}>
          <ReactPlayer
            url={data.response}
            controls
            key={data.response}
            width="100%"
            height="100%"
          />
        </div>

        <div className={styles.grid} style={{ width: "900px" }}>
          <h3 className={styles.cardnohover}>
            Try again:{" "}
            <input
              type="text"
              id="query"
              onKeyUp={detectEnter}
              placeholder={data.query}
            ></input>
            <button onClick={onClick}>Go</button>
          </h3>

          <h3>
            <a href="/" className={styles.card}>
              &larr; Back
            </a>
          </h3>
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
      </footer>{" "}
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API

  const res = await fetch(
    `http://api-prod.contactmap.me/ssr-demo/` +
      (context.query.query || "undefined")
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Search;
