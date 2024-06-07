import Link from "next/link";

export default function background() {
  return (
    <section className="section">
      <div className="section__title">Background</div>
      <div className="section__content">
        <p>
          I&apos;m Nikhil Mhatre, a Graduate Teaching Assistant at{" "}
          <Link
            className="underline-link"
            href="https://www.uta.edu/"
            target="_blank"
          >
            University of Texas at Arlington
          </Link>
          , where I am perfecting my skills in Computer Science, set to graduate in May 2024. With a solid foundation in FullStack development and cloud engineering, my career spans 4 years, including a significant tenure at{" "}
          <Link className="underline-link" href="https://www.infosys.com" target="_blank">
            Infosys Limited
          </Link>
          . I am currently exploring full-time opportunities where I can leverage my expertise in software engineering and cloud technologies to create impactful solutions.
        </p>
        <p>
          I specialize in developing robust software systems that enhance user experience and am known for my ability to troubleshoot and optimize cloud-based applications for scalability and efficiency. My hands-on experience in designing and deploying dynamic solutions, combined with a passion for learning the latest technologies, positions me uniquely within the tech industry. I thrive in diverse teams, contributing to collaborative success while continuing to grow personally and professionally.
        </p>
        <p>
          Outside the professional realm, I am an avid hiker and badminton player. My curiosity and zest for life fuel my passion for exploring new challenges, whether on a trail or in technology.
        </p>
        <Link className="status" href="/resume.pdf" target="_blank">
          <div className="status__light">
            <div className="status__light__ring"></div>
            <div className="status__light__led"></div>
          </div>
          <div className="status__message">
            Actively seeking new opportunities!
          </div>
        </Link>
      </div>
    </section>
  );
}
