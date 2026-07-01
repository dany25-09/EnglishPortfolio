interface ParagraphSectionProps {
    title: string;
    content: string | React.ReactNode;
}

export function ParagraphSection({ title, content }: ParagraphSectionProps){
    return(
        <div className="bg-gray-200 flex w-full px-5 py-15 my-4">
            <div className="w-[50%]">
                <h2 className="text-5xl font-secondary">{title}</h2>
                <div className="mt-5 h-1 w-24 bg-primary"></div>
            </div>
            <div className="w-[50%] font-light">{content}</div>
        </div>
    )
}