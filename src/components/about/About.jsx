import "./about.css";
import { motion } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  let width;
  if (windowSize.current[0] < 800) {
    width = "90%";
  } else if (windowSize.current[0] < 1300) {
    width = "65vw";
  } else if (windowSize.current[0] < 2000) {
    width = "calc(50vw - 3.33333334vw)";
  }

  return (
    <motion.div
      className="about"
      initial={{ width: 0 }}
      animate={{ width: width }}
      exit={{ x: "-100vw", transition: { duration: 1 } }}
    >
      <h1 aria-label="Hi Stranger!">
        <span aria-hidden="true" className="titleHover">
          H
        </span>
        <span aria-hidden="true" className="titleHover">
          i
        </span>{" "}
        <span aria-hidden="true" className="titleHover">
          S
        </span>
        <span aria-hidden="true" className="titleHover">
          t
        </span>
        <span aria-hidden="true" className="titleHover">
          r
        </span>
        <span aria-hidden="true" className="titleHover">
          a
        </span>
        <span aria-hidden="true" className="titleHover">
          n
        </span>
        <span aria-hidden="true" className="titleHover">
          g
        </span>
        <span aria-hidden="true" className="titleHover">
          e
        </span>
        <span aria-hidden="true" className="titleHover">
          r
        </span>
        <span aria-hidden="true" className="titleHover">
          !
        </span>
      </h1>
      <p>Born in 2001 in Buenos Aires, Argentina.</p>
      <p>
        I believe that websites are the core of the internet and are essential
        for information sharing.
      </p>
      <p>
        With the mission of making the web more accessible to everyone,
        protecting user privacy and creating pixel perfect websites, I have been
        working for the development team of the{" "}
        <span>Government of the Province of Buenos Aires</span> for more than a
        year and a half.
      </p>
      <p>
        I completed the first year of a computer science degree and now I am
        pursuing a degree in mathematics both at the <span> </span>
        <a
          target="_blank"
          title="Go to Universidad Nacional de La Plata's website"
          aria-label="Go to Universidad Nacional de La Plata's website"
          className="link"
          href="https://unlp.edu.ar/"
        >
          UNLP
        </a>
        .
      </p>
      <p>
        Check out my certifications on my{" "}
        <a
          target="_blank"
          title="Go to my LinkedIn profile"
          className="link"
          aria-label="Go to my LinkedIn profile"
          href="https://linkedin.com/in/jordi-bustos"
        >
          Linkedin Profile.
        </a>
      </p>

      <h3 aria-label="Stack">
        <span aria-hidden="true" className="titleHover">
          S
        </span>
        <span aria-hidden="true" className="titleHover">
          t
        </span>
        <span aria-hidden="true" className="titleHover">
          a
        </span>
        <span aria-hidden="true" className="titleHover">
          c
        </span>
        <span aria-hidden="true" className="titleHover">
          k
        </span>
      </h3>
      <div className="stackContainer">
        <span>HTML5</span>
        <span>SASS</span>
        <span>JavaScript</span>
        <span>TypeScript</span>
        <span>React.js</span>
        <span>Next.js</span>
        <span>Python</span>
        <span>Drupal</span>
        <span>WCAG</span>
        <span>Docker & DDEV</span>
        <span>Git</span>
        <span>Linux</span>
        <span>SQL</span>
        <span>MongoDB</span>
        <span>Machine Learning</span>
        <span>Numerical Computation</span>
      </div>
    </motion.div>
  );
};

export default About;
