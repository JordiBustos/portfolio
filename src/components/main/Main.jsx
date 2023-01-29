import "./main.css";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "-100vw", transition: { duration: 1 } }}
      id="leftText"
    >
      <div className="mainText">
        <h1 className="name" aria-label="Jordi Bustos">
          <span aria-hidden="true" className="titleHover">
            J
          </span>
          <span aria-hidden="true" className="titleHover">
            o
          </span>
          <span aria-hidden="true" className="titleHover">
            r
          </span>
          <span aria-hidden="true" className="titleHover">
            d
          </span>
          <span aria-hidden="true" className="titleHover">
            i
          </span>{" "}
          <span aria-hidden="true" className="titleHover">
            B
          </span>
          <span aria-hidden="true" className="titleHover">
            u
          </span>
          <span aria-hidden="true" className="titleHover">
            s
          </span>
          <span aria-hidden="true" className="titleHover">
            t
          </span>
          <span aria-hidden="true" className="titleHover">
            o
          </span>
          <span aria-hidden="true" className="titleHover">
            s
          </span>
        </h1>
        <h2 aria-label="Full stack developer" className="role">
          <span aria-hidden="true" className="titleHover">
            F
          </span>
          <span aria-hidden="true" className="titleHover">
            r
          </span>
          <span aria-hidden="true" className="titleHover">
            o
          </span>
          <span aria-hidden="true" className="titleHover">
            n
          </span>
          <span aria-hidden="true" className="titleHover">
            t
          </span>
          <span aria-hidden="true" className="titleHover">
            -
          </span>
          <span aria-hidden="true" className="titleHover">
            e
          </span>
          <span aria-hidden="true" className="titleHover">
            n
          </span>
          <span aria-hidden="true" className="titleHover">
            d
          </span>{" "}
          <span aria-hidden="true" className="titleHover">
            D
          </span>
          <span aria-hidden="true" className="titleHover">
            e
          </span>
          <span aria-hidden="true" className="titleHover">
            v
          </span>
          <span aria-hidden="true" className="titleHover">
            e
          </span>
          <span aria-hidden="true" className="titleHover">
            l
          </span>
          <span aria-hidden="true" className="titleHover">
            o
          </span>
          <span aria-hidden="true" className="titleHover">
            p
          </span>
          <span aria-hidden="true" className="titleHover">
            e
          </span>
          <span aria-hidden="true" className="titleHover">
            r
          </span>
        </h2>
        <h3 aria-label="React and Drupal" className="thirdLine">
          <span aria-hidden="true" className="titleHover noUppercase">
            R
          </span>
          <span aria-hidden="true" className="titleHover noUppercase">
            e
          </span>
          <span aria-hidden="true" className="titleHover noUppercase">
            a
          </span>
          <span aria-hidden="true" className="titleHover noUppercase">
            c
          </span>
          <span aria-hidden="true" className="titleHover noUppercase">
            t
          </span>{" "}
          <span aria-hidden="true" className="titleHover">
            &
          </span>{" "}
          <span aria-hidden="true" className="titleHover noUppercase">
            D
          </span>
          <span aria-hidden="true" className="titleHover noUppercase">
            r
          </span>
          <span aria-hidden="true" className="titleHover noUppercase">
            u
          </span>
          <span aria-hidden="true" className="titleHover noUppercase">
            p
          </span>
          <span aria-hidden="true" className="titleHover noUppercase">
            a
          </span>
          <span aria-hidden="true" className="titleHover noUppercase">
            l
          </span>
        </h3>
      </div>
      <a
        title="Go to my LinkedIn profile"
        aria-label="Go to my LinkedIn profile"
        id="verticalText"
        href="https://linkedin.com/in/jordi-bustos"
        target="_blank"
      >
        @jordi-bustos
      </a>
    </motion.div>
  );
};

export default Main;
