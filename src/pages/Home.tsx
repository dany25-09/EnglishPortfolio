import { Header } from '../share-components/Header'
import { Footer } from '../share-components/Footer'
import { Showcase } from '../features/components/Showcase'
import { CardHome } from '../features/components/CardHome'
import { MdOutlineTranslate } from "react-icons/md";
import { FaAssistiveListeningSystems, FaNetworkWired } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";



export function Home(){
    return(
        <>
            <Header/>
            <main>
                <Showcase />
                <section id="portfolio-section" className='grid grid-cols-1 md:grid-cols-2 gap-10 p-5'>
                    <CardHome 
                        icon={<MdOutlineTranslate />}
                        title='Glossary'
                        description='This glossary contains unfamiliar words which I encountered during the course.
                        It includes the word and their definitions.'
                        link={"/glossary"}
                    />
                    <CardHome 
                        icon={<FaAssistiveListeningSystems />}
                        title='Listening'
                        description='Here is a collection of my listening exercises, including practice ielts, class listening and homework listening.'
                        link='view'
                    />
                    <CardHome 
                        icon={<TfiWrite />}
                        title='Paragraph'
                        description='Here is a collection of my paragraph writing exercises, class assignments and homework.'
                        link={"/paragraph"}
                    />
                    <CardHome 
                        icon={<FaNetworkWired />}
                        title='List of Activities'
                        description='Here is a collection of my activities, including class activities and homework activities.'
                        link={"/activities"}
                    />
                </section>
            </main>
            
            <Footer />
        </>
    )
}
