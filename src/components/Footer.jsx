import React from "react";

const d = new Date();
const currentYear = d.getFullYear();

function Footer() {
  return <footer><p>Copyright &copy; {currentYear}</p></footer>
}

export default Footer;