import portfolioImg from '../../assets/img-1.jpg';

export function Showcase(){
    return(
        <section className='h-130 flex items-center justify-around'>
            <div >
                <p className='text-xs text-primary'>STUDENT SHOWCASE</p>
                <h2 className='text-9xl font-secondary'>English</h2>
                <h2 className='text-9xl text-primary font-secondary italic'>Portfolio</h2>
                <p className='text-lg'> A collection of my work and progress during the <br />
                    course. Exploring language through culture, writing, <br />
                    listening, and autonomous work.
                </p>
                <button
                type="button"
                    className="bg-primary text-white px-6 py-3 mt-5 rounded-lg hover:bg-neutral hover:text-primary transition-colors hover:border-primary hover:border cursor-pointer"
                    onClick={() => {
                        const section = document.getElementById("portfolio-section");
                        if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                >
                    Explore Portfolio
                </button>
            </div>
           
            <img className='w-100 h-100 object-cover rounded-lg' src={portfolioImg} alt="Portfolio Image" />

        </section>
    )
}