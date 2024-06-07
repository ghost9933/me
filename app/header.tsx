import Link from "next/link";

export default function header() {
  return (
    <header className="intro">
      <h1 className="intro__hello">
        Hello!
        <span className="emoji wave-hand"></span>
      </h1>
      <h2 className="intro__tagline">
        I&apos;m <span className="name">Nikhil Nandkumar Mhatre</span>,  a passionate software engineer dedicated to solving real-world problems through technology, continuously learning, and humbly collaborating with others to create innovative solutions.
        <img
          className="emoji technologist"
          src="./emojis/technologist.png"
          alt=""
        />
      </h2>
      <h3 className="intro__contact">
        <span>Get in touch </span>

        <img
          className="emoji pointer"
          src="./emojis/pointright.png"
          alt="pointright"
        />

        <span>
          <Link
            className="highlight-link"
            href="mailto:sanjaysatishshekar@gmail.com"
          >
            NikhilMhatre36@gmail.com
          </Link>
        </span>
      </h3>
    </header>
  );
}
