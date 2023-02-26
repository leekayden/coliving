import { AppName, year } from "../global/definitions";
import "./Footer.css"

const Footer = () => {
  return <footer>{`© Copyright ${year} ${AppName}`}</footer>;
};

export default Footer;
