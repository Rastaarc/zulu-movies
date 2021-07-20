import {FaLinkedinIn, FaTwitter, FaGithub} from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <div className="mt-36"></div>
            <div className="w-full py-3  bg-[#041e29] fixed bottom-0 text-center">

                <p className="px-2 text-center flex flex-wrap justify-center items-center">
                    &copy; {
                    new Date().getFullYear()
                }
                    Zulu. All Right Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                            Developed by Rastaarc (08141161177)
                </p>
                <div className="pt-5 flex items-center justify-center p-2 space-x-4 text-gray-100">
                    <a href="http://www.linkedin.com/rastaxarm" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="h-6"/>
                    </a>
                    <a href="http://www.github.com/rastaarc" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="h-6"/>
                    </a>
                    <a href="http://www.twitter.com/rastaarcl" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="h-6"/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer
