interface GlossaryWordProps {
    word: string;
    definition: string;
}

export function GlossaryWord({ word, definition }: GlossaryWordProps) {
    return (
        <div className="flex flex-col gap-2 bg-white shadow-md rounded mx-5 p-4 mb-4">
            <h3 className="font-light">{word}</h3>
            <p className="">{definition}</p>
        </div>
    );
}