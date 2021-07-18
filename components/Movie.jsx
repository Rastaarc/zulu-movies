import Image from 'next/image'
const Movie = () => {
    return (
        <div className="group cursor-pointer">
            <Image
                className="object-cover transform group-hover:scale-110 transition-all duration-500 ease-in-out"
                layout="responsive"
                src="/rasta.jpg"
                width="1920"
                height="1080"/>
            <div className="p-2 truncate max-w-sm">
                <p className="text-xl tracking-wide group-hover:font-bold">Title</p>
                <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi maxime sit magnam aliquid. Aliquam voluptatibus impedit nisi facere ut laudantium sint tempora eius, quidem facilis nemo ipsum nostrum quae repudiandae.</p>
                <div className="py-3 text-xs">
                    <p>Rating:</p>
                </div>
           </div>
        </div>
    )
}

export default Movie
