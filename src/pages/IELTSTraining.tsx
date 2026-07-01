import { Header } from "../share-components/Header";
import { Footer } from "../share-components/Footer";
import { ParagraphSection } from "../share-components/ParagraphSection";
import {ImageTemplate} from "../features/components/ImageTemplate";

import img1 from "../assets/Passage 3_Telepathy.jpeg"
import img2 from "../assets/Listening Book 8_ Section_1_2.jpeg"
import img3 from "../assets/Listening_Test_1_Book 10_Section_1-4-1.jpeg"
import img4 from "../assets/Listening_Test_1_Book 10_Section_1-4-2.jpeg"
import img5 from "../assets/Listening_Test_2_Book_10_Section _1-4.jpeg"
import img6 from "../assets/Three_Bar_Charts _Comprehension Questions_1.jpeg"
import img7 from "../assets/Three_Bar_Charts _Comprehension Questions_2.jpeg"
import img8 from "../assets/Three_Bar_Charts _Comprehension Questions_3.jpeg"
import img9 from "../assets/Listening Book 9_Test 4.jpeg"
import img10 from "../assets/Listening Book 9_Test 4-2.jpeg"
import img11 from "../assets/Quiz_2_passages.jpeg"
import img12 from "../assets/IELTS_Writing_Task_1.jpeg"
import img13 from "../assets/IELTS_Writing_Task_1_2.jpeg"
import img14 from "../assets/three_paragraph_essay.jpeg"
import img15 from "../assets/Listening_Test 2_Book_8_Section_1_and_2.jpeg"
import img16 from "../assets/reading_passage_3.jpeg"
import img17 from "../assets/Test_2_Book_8_Section_3_and_4 .jpeg"
import img18 from "../assets/final_essay_draft_1.jpeg"
import img19 from "../assets/final_essay_draft_2.jpeg"
import img20 from "../assets/essay_final_version.jpeg"

export function IELTSTraining(){
    return(
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="flex-1">
                <ParagraphSection
                    title={"Passage 3: Telepathy"}
                    content={
                        <ImageTemplate img={img1} alt="Passage 3: Telepathy" />
                    }
                />
                <ParagraphSection
                    title={"Listening Book 8: Section 1 & 2"}
                    content={
                        <ImageTemplate img={img2} alt="Listening Book 8: Section 1 & 2" />
                    }
                />
                <ParagraphSection
                    title={"Listening Test 1: Book 10, Section 1-4"}
                    content={
                        <ImageTemplate img={img3} alt="Listening Test 1: Book 10, Section 1-4" />
                    }
                />
                <ParagraphSection
                    title={"Listening Test 1: Book 10, Section 1-4"}
                    content={
                        <ImageTemplate img={img4} alt="Listening Test 1: Book 10, Section 1-4" />
                    }
                />
                <ParagraphSection
                    title={"Listening Test 2: Book 10, Section 1-4"}
                    content={
                        <ImageTemplate img={img5} alt="Listening Test 2: Book 10, Section 1-4" />
                    }
                />
                <ParagraphSection
                    title={"Quiz 2 passages May 14th"}
                    content={
                        <ImageTemplate img={img11} alt="Quiz 2 passages May 14th" />
                    }
                />
                <ParagraphSection
                    title={"Three Bar Charts: Comprehension Questions"}
                    content={
                        <ImageTemplate img={img6} alt="Three Bar Charts: Comprehension Questions" />
                    }
                />
                <ParagraphSection
                    title={"Three Bar Charts: Comprehension Questions"}
                    content={
                        <ImageTemplate img={img7} alt="Three Bar Charts: Comprehension Questions" />
                    }
                />
                <ParagraphSection
                    title={"Three Bar Charts: Comprehension Questions"}
                    content={
                        <ImageTemplate img={img8} alt="Three Bar Charts: Comprehension Questions" />
                    }
                />
                <ParagraphSection
                    title={"IELTS Writing Task 1 – Bar Chart Analysis"}
                    content="The bar chart ilustrates the proportion of obesity in people of the male and female genders in Australia since 1980 until 2010.

                    Overall, it can be seen that the highest ratio of overweight of people was man. On the other hand, men and woman percentage had an increase in the most of the decades. 

                    The proportion of man who suffered obesity started in approximately 51% at the beginning of the 1980s, furthemore in the next decades the percentage increase, in 2000s it reaches its peak with around 81% and finally in 2010s suffered a dicrease to 71. In contrast, the percentage of women initially was a 40% of population with obesity in 1980s, approaching to 51% in 1990s. Lastly in 2000s and 2010s it remained stable."
                />
                <ParagraphSection
                    title={"Pie Charts - Description using the vocabulary studied in class"}
                    content={
                        <div>
                            <a className="text-primary underline" 
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://docs.google.com/document/d/1ft-KasOuXiTyU629SGJuaVwgRjmxjD6FxuvgLyuBx6Q/edit?usp=sharing">Pie Chart description Link</a>
                        </div>
                    } 
                />
                <ParagraphSection
                    title={"IELTS Writing Task 1 – Bar Chart IA Feedback"}
                    content={
                        <ImageTemplate img={img12} alt="IELTS Writing Task 1 – Bar Chart IA Feedback" />
                    } 
                />
                <ParagraphSection
                    title={"IELTS Writing Task 1 – Bar Chart IA Feedback"}
                    content={
                        <ImageTemplate img={img13} alt="IELTS Writing Task 1 – Bar Chart IA Feedback" />
                    } 
                />
                <ParagraphSection
                    title={"Listening Book 9: Test 4"}
                    content={
                        <ImageTemplate img={img9} alt="Listening Book 9: Test 4" />
                    }
                />
                <ParagraphSection
                    title={"Listening Book 9: Test 4"}
                    content={
                        <ImageTemplate img={img10} alt="Listening Book 9: Test 4" />
                    }
                />
                <ParagraphSection
                    title={"Listening Test 2 Book 8 Section 1 and 2"}
                    content={
                        <ImageTemplate img={img15} alt="Listening Test 2 Book 8 Section 1 and 2" />
                    }
                />
                <ParagraphSection
                    title={"Speaking Recording"}
                    content={
                        <div>
                            <a className="text-primary underline" 
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://drive.google.com/file/d/1lW8sEWrSUx0sy9uklSr4KVOEfuCokwmP/view?usp=drive_link">Speaking Recording Link</a>
                        </div>
                    } 
                />
                <ParagraphSection
                    title={"Reading passage 3 - Book 8"}
                    content={
                        <ImageTemplate img={img16} alt="Reading passage 3 - Book 8" />
                    }
                />
                <ParagraphSection
                    title={"Listening Test 2 Book 8 Section 3 and 4 "}
                    content={
                        <ImageTemplate img={img17} alt="Listening Test 2 Book 8 Section 3 and 4 " />
                    }
                />
                <ParagraphSection
                    title={"Three paragraph essay"}
                    content={
                        <ImageTemplate img={img14} alt="Three paragraph essay" />
                    }
                />
                <ParagraphSection
                    title={"Final Essay - Draft version"}
                    content={
                        <ImageTemplate img={img18} alt="Final Essay - Draft version" />
                    }
                />
                <ParagraphSection
                    title={"Final Essay - Draft version"}
                    content={
                        <ImageTemplate img={img19} alt="Final Essay - Draft version" />
                    }
                />
                <ParagraphSection
                    title={"Final Essay - Final version"}
                    content={
                        <ImageTemplate img={img20} alt="Final Essay - Final version" />
                    }
                />
            </main>
            <Footer/>
        </div>
    )
}