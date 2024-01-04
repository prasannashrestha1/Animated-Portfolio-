import { Link } from "react-router-dom";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar></Sidebar>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Prasanna Shrestha
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png"></img>
          </a>
          <a href="https://www.instagram.com/prasanna__shrestha1/">
            <img src="/instagram.png"></img>
          </a>
          <a href="https://github.com/prasannashrestha1">
            <img src="/github.png"></img>
          </a>
          <a href="https://www.linkedin.com/in/prasanna-shrestha-7673261a0/">
            <img src="/linkedin.png"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
