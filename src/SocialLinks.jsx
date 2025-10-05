import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { SiGoodreads } from "react-icons/si";

export default function SocialLinks() {
  const socials = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/felise",
      color: "hover:text-[#0A66C2]",
    },
    {
      name: "Goodreads",
      icon: <SiGoodreads />,
      url: "https://www.goodreads.com/feliseuy",
      color: "hover:text-[#553B08]",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      url: "https://www.facebook.com/feliseuy",
      color: "hover:text-[#1877F2]",
    },
    {
      name: "Instagram (Art)",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/felisasketches",
      color: "hover:text-pink-400",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/feliseuy",
      color: "hover:text-purple-400",
    }
  ];

  return (
    <div className="flex gap-6 justify-center mt-6">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-3xl text-pink-300 transition-transform duration-300 ${social.color} hover:scale-125 hover:animate-wiggle`}
        >
          {social.icon}
          <span className="text-sm mt-1 text-gray-500">
            {social.name} 
          </span>
        
        </a>
      ))}
    </div>
  );
}
