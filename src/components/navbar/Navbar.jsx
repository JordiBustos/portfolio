import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div id="navWrapper">
        <Link title="Go to Home page" to="/" className="text-stroke-fill-ttb" data-fill="HOME">
          HOME
        </Link>
        <Link title="Go to About page" to="/about" className="text-stroke-fill-ttb" data-fill="ABOUT">
          ABOUT
        </Link>
        <Link
          to="/projects"
          title="Go to Projects page"
          className="text-stroke-fill-ttb"
          data-fill="PROJECTS"
        >
          PROJECTS
        </Link>
        <a
          target="_blank"
          aria-label="Go to Google Form Contact page"
          title="Go to Google Form Contact page"
          href="https://forms.gle/W37fUKUbAE4nCW2M7"
          className="text-stroke-fill-ttb"
          data-fill="CONTACT"
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
