import data from "./Skills_data";

export default async function Skills() {
  return (
    <section className="section skills">
      <div className="section__title">Skills</div>
      <div className="section__content">
        <div className="skillz">
          <div className="skillz__category">
            <div className="skillz__category__label">Languages</div>
            <ul>
              {data.languages.map((language) => (
                <li className="skillz__category__item" key={language}>{language}</li>
              ))}
            </ul>
          </div>
          <div className="skillz__category">
            <div className="skillz__category__label">Frameworks</div>
            <ul>
              {data.frameworks.map((framework) => (
                <li className="skillz__category__item" key={framework}>{framework}</li>
              ))}
            </ul>
          </div>
          <div className="skillz__category">
            <div className="skillz__category__label">Tools</div>
            <ul>
              {data.tools.map((tool) => (
                <li className="skillz__category__item" key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
          <div className="skillz__category">
            <div className="skillz__category__label">Databases</div>
            <ul>
              {data.databases.map((database) => (
                <li className="skillz__category__item" key={database}>{database}</li>
              ))}
            </ul>
          </div>
          <div className="skillz__category">
            <div className="skillz__category__label">Miscellaneous</div>
            <ul>
              {data.misc.map((misc) => (
                <li className="skillz__category__item" key={misc}>{misc}</li>
              ))}
            </ul>
          </div>
          <div className="skillz__category">
            <div className="skillz__category__label">Soft Skills</div>
            <ul>
              {data.softSkills.map((skill) => (
                <li className="skillz__category__item" key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
