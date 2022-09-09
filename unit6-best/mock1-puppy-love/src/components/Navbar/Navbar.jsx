import React from "react";
import { Link , useNavigate} from "react-router-dom";
import Home from "../../Pages/Home/Home";
import styles from "./Navbar.module.css";

const Navbar = () => {
    // const navigate = useNavigate();


  return (
  
  <div className={styles.navbar}>


 <Link to="/" > Home </Link>
 <Link to="/Puppy" > Puppy </Link>
 <Link to="/Search" > Search </Link>

    </div>)
};

export default Navbar;
