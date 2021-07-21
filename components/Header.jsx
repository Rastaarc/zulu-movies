import Image from 'next/image'
import Link from 'next/link'
import {HomeIcon, LightningBoltIcon, UserIcon} from '@heroicons/react/outline'
import MenuItem from './MenuItem'
import {sections} from '../libs/constants'


const Header = ({sec}) => {

    return (
        <>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between md:px-4 md:py-5 space-y-10 md:space-y-0">
                <div className="flex justify-center space-x-7 md:space-x-4">
                    <MenuItem title="Home"
                        Icon={HomeIcon}
                        active={
                            sec === 'home'
                        }/>
                    <MenuItem title="Trending"
                        Icon={LightningBoltIcon}
                        active={
                            sec === 'trending'
                        }/>
                    <MenuItem title="Actors"
                        Icon={UserIcon}
                        active={
                            sec === 'actors'
                        }/>
                </div>
                <Link className="" href="/"><Image className="cursor-pointer" src="/zulu_logo.png" width="80" height="40"/></Link>
            </div>
        </>
    )
}


export default Header
