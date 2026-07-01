import { Link } from "react-router-dom";


export function Header(){
    return(
        <header className="h-25 flex items-center justify-between px-5 shadow-md">
            <h1 className="font-secondary text-3xl text-primary">
                <Link to="/">Daniel García Portfolio</Link>
            </h1>
            <ul className="flex col gap-5 font-light italic mb-4">
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
        </header>
    )
}