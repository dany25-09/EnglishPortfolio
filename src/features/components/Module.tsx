import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";


interface ModuleProps {
    children: React.ReactNode;
    title: string;
    open: boolean;
    onClick: () => void;
}

export function Module({children, title, open, onClick}: ModuleProps){
    return(
        <div className="flex flex-col w-full">
            <div
                className="h-20 flex justify-start items-center bg-white shadow-lg rounded cursor-pointer"
                onClick={onClick}
            >
                <h3 className="font-secondary font-bold text-2xl text-gray-800 ml-4">{title}</h3>
                {open
                    ? <span className="ml-auto mr-4 text-gray-500"><MdOutlineKeyboardArrowUp /></span>
                    : <span className="ml-auto mr-4 text-gray-500"><MdOutlineKeyboardArrowDown /></span>
                }
            </div>
            
            <div className={`mt-2 transition-all duration-500 ${open ? "max-h-96 overflow-y-auto scrollbar-hide" : "max-h-0 overflow-hidden"}`}>
                {open && (
                    <div>
                        {children}
                    </div>
                )}
            </div>
        </div>
    )
}