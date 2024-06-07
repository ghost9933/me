import Link from "next/link";

export default function background() {
  return (
    <section className="section">
      <div className="section__title">Background</div>
      <div className="section__content">
      <p>
  I'm Nikhil Mhatre, a driven and detail-oriented Software Developer currently honing my expertise in Cloud Computing and Big Data as a Graduate Teaching Assistant at 
  <Link
    className="underline-link"
    href="https://www.uta.edu/"
    target="_blank"
  >
    University of Texas at Arlington
  </Link>
  , where I am pursuing a Master's degree with a perfect 4.0 GPA, set to graduate in May 2024. My professional journey includes significant roles such as a Data Engineer at LTI Mindtree, where I enhanced data processes and efficiencies, and earlier positions in software development at Infosys Limited. I am passionate about using my extensive skills in programming, cloud-native applications, and data engineering to develop impactful software solutions and eagerly looking for full-time opportunities to further my career in tech.
</p>
<p>
  My technical proficiency spans a broad spectrum of languages and frameworks, with a special focus on creating scalable cloud-based solutions and automating data pipelines. I am known for my collaborative approach, leading teams to drive innovation and improve software functionalities effectively. My ongoing commitment to professional growth is complemented by a zeal for learning emerging technologies and frameworks.
</p>
<p>
  Beyond my technical endeavors, I engage in hiking and badminton, embracing challenges that refine my problem-solving skills in both professional and personal landscapes.
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
