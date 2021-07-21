import Image from 'next/image'
import {IMAGE_PATH} from '../libs/constants'

const ProductionCompany = ({name, country, img}) => {
    return (
        <div className="flex flex-col px-2">
            <Image className="h-5 w-5 items-center"
                src={
                    `${IMAGE_PATH}${img}`
                }
                width={100}
                height={50}/>
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
