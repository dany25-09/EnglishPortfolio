import { Header } from "../share-components/Header";
import { Footer } from "../share-components/Footer";
import { ParagraphSection } from "../share-components/ParagraphSection";
import { ImageTemplate } from "../features/components/ImageTemplate"

import img1 from "../assets/Academic_paragraph_draft_1.jpeg"
import img2 from "../assets/Academic_paragraph_draft_2.jpeg"
import img3 from "../assets/Academic_paragraph_final_version.jpeg"
import img4 from "../assets/writing_exercise_analyze_infographics.jpeg"
import img5 from "../assets/listening_feb_10.jpeg"
import img6 from "../assets/Reporting_verbs_1.jpeg"
import img7 from "../assets/Reporting_verbs_2.jpeg"


export function ListActivities(){
    return(
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="flex-1">
                <ParagraphSection
                    title={"Listening Feb 10th Global Issues"}
                    content={
                        <ImageTemplate img={img5} alt="Listening Feb 10th Global Issues" />
                    }
                />
                <ParagraphSection 
                    title="Floods in Cordoba"
                    content = "Since the beginning of February of 2026, in the northern of Colombia -- specifically in Cordoba. There have been presented heavy rains with rivers overflood and giving as outcome a severe flooding crisis. The president Petro's government is currently impulsing stretegies to help 150.000 people affected. These aids consist in send teams emergency, such as the army, police and civil defense, to provide humanitarian aid and carry out evacuation efforts."
                />
                <ParagraphSection
                    title={"Colombia profile aspects"}
                    content={
                        <div>   
                            <h3 className="font-bold">Visible:</h3>
                            <p>
                                1) Clothes: Represent the culture evolution by our indigenous patterns, fresh fabrics and the social behavor, since lino until agodon, and  typical clothes like ponchos, ruanas, sombreros, etc. <br/>
                            </p>
                            <h3 className="font-bold"> Less Visible:</h3>
                            <p>
                                1) Typical food: Is well known for its variety and flavor, with dishes like arepas, bandeja paisa, empanadas, and sancocho. <br/>
                            </p>
                            <h3 className="font-bold"> Not Visible:</h3>
                            <p>
                                1) Heritage: We have festivals and traditions that are not as widely known but are an important part of our cultural identity, like "fiestas de San Pacho" has a 365 years of tradition clebrating african heritage with chirimía music. <br/>
                            </p>
                        </div>
                    }
                />
                <ParagraphSection 
                    title={"Cultural Challenge"}
                    content={
                        <div>
                            <p>Teacher feedback: "Your presentation was well organized overall, however, yo can
                            improve by using clearer transitions and developing your ideas
                            in more detail."</p>

                                <a className="text-primary underline" 
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://canva.link/9um7net65utw0cf">Presentation Link</a>
                        </div>
                    }
                />
                <ParagraphSection
                    title={"Academic paragraph draft"}
                    content={
                        <ImageTemplate img={img1} alt="Academic paragraph draft" />
                    }
                />
                <ParagraphSection
                    title={"Academic paragraph draft"}
                    content={
                        <ImageTemplate img={img2} alt="Academic paragraph draft" />
                    }
                />
                <ParagraphSection
                    title={"Academic paragraph final version"}
                    content={
                        <ImageTemplate img={img3} alt="Academic paragraph final version" />
                    }
                />
                <ParagraphSection
                    title={"Movie review sinners comprehension questions"}
                    content={
                        <div>
                            <a className="text-primary underline" 
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://docs.google.com/document/d/11-95hV528NAaCPzBafiY4dUqCfafM2s2aEIxgwTLcms/edit?usp=sharing">Comprehension Questions</a>
                        </div>
                    }
                />
                <ParagraphSection
                    title={" Infographic - educational system"}
                    content={
                        <div>
                            <a className="text-primary underline" 
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://canva.link/ay8mpdwi5uvodwk">Infographic Link</a>
                        </div>
                    }
                />
                <ParagraphSection
                    title={"Writing exercise in class- analyzing the infographics"}
                    content={
                        <ImageTemplate img={img4} alt="Writing exercise in class- Analyzing the infographics" />
                    }
                />
                <ParagraphSection
                    title={"Grammar Exercise in class Reporting verbs - 1"}
                    content={
                        <ImageTemplate img={img6} alt="Grammar Exercise in class Reporting verbs - 1" />
                    }
                />
                <ParagraphSection
                    title={"Grammar Exercise in class Reporting verbs - 2"}
                    content={
                        <ImageTemplate img={img7} alt="Grammar Exercise in class Reporting verbs - 2" />
                    }
                />
            </main>
            <Footer/>
        </div>
    )
}