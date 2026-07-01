import { Header } from "../share-components/Header";
import { Footer } from "../share-components/Footer";
import { Module } from "../features/components/Module"
import { Module1 }  from "../features/word_glossary/Module1" 
import { Module2 }  from "../features/word_glossary/Module2" 
import { Module3 }  from "../features/word_glossary/Module3" 
import { Module4 }  from "../features/word_glossary/Module4"
import { Module5 }  from "../features/word_glossary/Module5"

import { useState } from "react";
import { REadingSection } from "../features/word_glossary/ReadingSection";

export function Glossary(){

    const [openModules, setOpenModules] = useState<number | null>(null);

    const toggleModule = (index: number) => {
        setOpenModules(openModules === index ? null : index);
    };


    return(
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5 px-5 py-10">
                <Module
                    title="1. Climate is Changing"
                    open={openModules === 0}
                    onClick={() => toggleModule(0)}
                >
                    <Module1/>
                </Module>
                <Module
                    title="2. Culture Shock"
                    open={openModules === 1}
                    onClick={() => toggleModule(1)}
                >
                    <Module2/>
                </Module>
                <Module
                    title="3. Lights Camera Action"
                    open={openModules === 2}
                    onClick={() => toggleModule(2)}
                >
                    <Module3/>
                </Module>
                <Module
                    title="4. Education Around the World"
                    open={openModules === 3}
                    onClick={() => toggleModule(3)}
                >
                    <Module4/>
                </Module>
                <Module
                    title="5. Social Media and Fake News"
                    open={openModules === 4}
                    onClick={() => toggleModule(4)}
                >
                    <Module5/>
                </Module>
                <Module
                    title="6. Reading Section"
                    open={openModules === 5}
                    onClick={() => toggleModule(5)}
                >   
                    <REadingSection/>
                </Module>
            </main>
            <Footer/>
        </div>
        
    )
}