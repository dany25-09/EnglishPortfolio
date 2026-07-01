interface ImageTemplateProps {
    img: string;
    alt: string;
}

export function ImageTemplate({img, alt}: ImageTemplateProps) {
    return(
        <div className="img__list-activities">
            <img src={img} alt={alt} />   
        </div>
    )
}