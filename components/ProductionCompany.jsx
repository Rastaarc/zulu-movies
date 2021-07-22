import Image from 'next/image'
import {IMAGE_PATH} from '../libs/constants'

const ProductionCompany = ({name, country, img}) => {
    return (
        <div className="flex flex-col px-2 mb-10 pt-5">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#eee]">
                {
                img ? <img className="object-cover h-10 w-10 rounded-full items-center"
                    src={
                        `${IMAGE_PATH}${img}`
                    }/> : <span className="font-bold text-primary text-xl">
                    {
                    name.charAt(0)
                }</span>
            } </div>

            <div>
                <p className="font-bold text-sm">
                    {
                    name ? name : 'Uknown'
                }</p>
                <p className="font-light text-xs">
                    {
                    country ? country : 'Uknown'
                }</p>
            </div>

        </div>
    )
}

export default ProductionCompany
