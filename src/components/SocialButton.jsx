import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
const SocialButton = ({ FacebookIcon, GithubIcon, LinkedinIcon }) => {
  return (
      <div className="iconos">
          <FaFacebook className="icofacebook">{FacebookIcon}</FaFacebook>
          <FaGithub className="icogit">{GithubIcon}</FaGithub>
          <FaLinkedinIn className="icolinkedin">{LinkedinIcon}</FaLinkedinIn>
      </div>
  );
}

export default SocialButton;