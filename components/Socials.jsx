import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/alexangria1992' },
  {
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/alexandre-angrignon-781b95176/',
  },
  { icon: <FaFacebook />, path: 'https://www.facebook.com/alexbenjaminangri/' },
  { icon: <FaTwitter />, path: 'https://x.com/alex040892' },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target='_blank'
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
