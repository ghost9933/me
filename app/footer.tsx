import Socials from "./social";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <div className="top">
          <span>Design Credits&nbsp;</span>
          <br />
          <Link
            className="underline-link"
            href={"https://brittanychiang.com/"}
            target="_blank"
            rel="noreferrer"
          >
            <em>Brittany Chiang</em>
          </Link>
        </div>
      </div>
      <div className="footer__copyright middle">
        <span>Built by&nbsp;</span>
        <span><em>Nikhil Nandkumar Mhatre</em></span>
        <img src="/emojis/rockon.png" alt="" className="emoji" />
        <span>2024</span>
      </div>
      <div className="footer__links">
        {Socials.map((social: any) => (
          <Link
            href={social.url}
            target="_blank"
            title={social.title}
            key={social.title}
          >
            <span className="text">{social.title}</span>
            <img src={`/social/${social.title}.svg`} alt={social.title} />
          </Link>
        ))}
      </div>
    </footer>
  );
}
