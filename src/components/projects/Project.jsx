const Project = ({ title, accesibility, date, language, link }) => {
  return (
    <li>
      {link ? (
        <p>
          <a target="_blank" title={accesibility} href={link}>
            <span className="projectInfo">
              {language} / {date}
            </span>{" "}
            <span className="projectTitle">{title}</span>
          </a>
        </p>
      ) : (
        <p>
          <span className="projectInfo">
            {language} / {date}
          </span>{" "}
          <span className="projectTitle">{title}</span>
        </p>
      )}
    </li>
  );
};

export default Project;
