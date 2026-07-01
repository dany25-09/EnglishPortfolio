import type { ReactNode } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

interface CardHomeProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
}

export function CardHome({ icon, title, description, link }: CardHomeProps) {
  return (
    <div className="flex flex-col justify-center items-start bg-white p-4 shadow-lg rounded-lg gap-5">
        <span className="text-3xl text-primary">{icon}</span> 
        <h3 className="font-secondary text-2xl">{title}</h3>
        <p className="font-light">{description}</p>
        <div className=" flex items-center  text-primary hover:text-secondary transition-colors cursor-pointer">
            <Link to={link}> View</Link>
            <span className="mt-1 text-3xl"><IoIosArrowRoundForward /></span>
        </div>
        
    </div>
  );
}