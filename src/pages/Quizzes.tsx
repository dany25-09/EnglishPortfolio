import { Header } from "../share-components/Header";
import { Footer } from "../share-components/Footer";
import { ParagraphSection } from "../share-components/ParagraphSection";
import { ImageTemplate } from "../features/components/ImageTemplate"
import img1 from "../assets/Quiz_Culture_shock_Japan_USA.jpeg";
import img2 from "../assets/Quiz_Movies_Dagmara_April 28th_1.jpeg";
import img3 from "../assets/Quiz_Movies_Dagmara_April 28th_2.jpeg";
import img4 from "../assets/Quiz_Movies_My_favorite_film.jpeg"
import img5 from "../assets/false_information_spreads.jpeg"

export function Quizzes(){
    return(
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="flex-1">
                <ParagraphSection
                    title={"Quiz Culture Shock Japan vs USA"}
                    content={
                        <ImageTemplate img={img1} alt="Quiz Culture Shock Japan vs USA" />
                    }
                />
                <ParagraphSection
                    title={"Quiz movies Dagmara April 28"}
                    content={
                        <ImageTemplate img={img2} alt="Quiz movies Dagmara April 28" />
                    }
                />
                <ParagraphSection
                    title={"Quiz movies Dagmara April 28"}
                    content={
                        <ImageTemplate img={img3} alt="Quiz movies Dagmara April 28" />
                    }
                />
                <ParagraphSection
                    title={"Quiz movies my favorite film"}
                    content={
                        <ImageTemplate img={img4} alt="Quiz movies y favorite film" />
                    }
                />
                <ParagraphSection
                    title={"Quiz how false information spreads"}
                    content={
                        <ImageTemplate img={img5} alt="Quiz how false information spreads" />
                    }
                />
            </main>
            <Footer/>
        </div>
    )
}