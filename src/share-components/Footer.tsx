import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";

export function Footer(){
    return(
        <footer className="flex items-center justify-between px-5 py-3 shadow-md bg-gray-200 mt-10">
            <div>
                <p className="font-secondary italic">Daniel García</p>
                <p className="text-sm text-primary">© Daniel García - Academic Portfolio</p>
                <p className="text-sm">Intensive English - 2026-1</p>
            </div>
            <ul className='flex gap-5 text-sm font-light'>
                <li className="li__header">
                   <Link to="/glossary">Glossary</Link>
                </li>
                <li className="li__header">
                    <Link to="/ielts-training">IELTS Training</Link>
                </li>
                <li className="li__header">
                    <Link to="/Quizzes">Quizzes</Link>
                </li>
                <li className="li__header">
                    <Link to="/activities">List of Activities</Link>
                </li>
            </ul>
            <span><TbWorld /></span>
        </footer>
    )
}