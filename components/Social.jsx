import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { SiFreelancer } from "react-icons/si";
import Link from "next/link";
const Socials = [
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/saeed-saged-427a78227/",
  },
  {
    icon: <FaSquareUpwork />,
    path: "https://www.upwork.com/freelancers/~019bef42d4ecad4b0c",
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {Socials.map((social, index) => {
        return (
          <Link href={social.path} key={index} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
