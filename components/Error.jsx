import Image from 'next/image'

const Error = ({title, message}) => {
    return (
        <div className="text-gray-100 mx-3 mt-10 md:mt-2  md:max-w-md md:mx-auto">
            <Image className="z-1" src='/error.png' width="600" height="400"/>
            <div className="max-w-md p-3 text-center">
                <h1 className="truncate text-md sm:text-xl md:text-2xl font-bold mb-3 -mt-2">
                    {title} </h1>
                <p className="text-xs sm:text-xl">
                    {message}</p>
            </div>
        </div>
    )
}

export default Error
