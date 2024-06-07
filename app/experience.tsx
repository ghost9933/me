import Data from "./experience_data";
import Link from "next/link";

export default function Experience() {
  return (
    <section className="section experience">
      <div className="section__title">Experience</div>
      <div className="section__content">
        <div className="jobs">
          {Data.map((job: any) => (
            <div className="job" key={job.company}>
              <div className="time-place">
                <div className="job__company">
                  <Link href="{job.url}">{job.company}</Link>
                </div>
                <div className="job__time">{job.time}</div>
              </div>
              <div className="job__position">{job.position}</div>
            </div>
          ))}
        </div>
        {/* <Link href="/resume.pdf" target="_blank" className="arrow-link">
          View My Resume
        </Link> */}
      </div>
    </section>
  );
}
