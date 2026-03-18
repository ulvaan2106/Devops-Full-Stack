import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav style={styles.nav}>
      <NavLink
        to="/"
        style={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/courses"
        style={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Courses
      </NavLink>

      <NavLink
        to="/profile"
        style={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Profile
      </NavLink>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "15px",
    backgroundColor: "#1f2937",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
  activeLink: {
    color: "#38bdf8",
    textDecoration: "underline",
    fontWeight: "bold",
  },
};

export default NavBar;
