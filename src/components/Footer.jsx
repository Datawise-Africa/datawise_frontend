import Section from "./HomePage/Section";
import { SocialIcon } from "react-social-icons";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">Datawise Africa &copy; {new Date().getFullYear()}. All rights reserved.</p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a key={item.id} className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6">
              <SocialIcon url={item.url} bgColor="#0E0C15" />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default Footer