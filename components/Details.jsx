const Details = ({
    title,
    text = "Uknown",
    link = false
}) => {
    return (
        <p className="font-bold text-sm md:text-lg lg:text-xl lg:mb-2">
            {title}: {" "}
            {
            link ? <a href={text}
                className="font-light text-green-300"
                target="_blank">
                {text}</a> : <span className="font-light">
                {text}</span>
        } </p>
    )
}

export default Details
