import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
        <Link to="/useEffect">useEffect en détail</Link>
        <Link to="/service">Service</Link>
    </nav>
  )
}