import ReactCountryFlag from 'react-country-flag'



export default function Hero() {
    return (
        <div className={'mb-8'}>
            <div className={'flex flex-row pt-10 px-8 justify-between'}>
                <h1 className={'text-black font-logo font-bold text-sm sm:text-xl md:text-3xl lg:text-4xl'}>Architectural Innovations</h1>
                <div>
                    <a href='#contact' className={'text-center inline-block bg-gray-900 hover:bg-gray-700 text-white text-xs sm:text-lg font-bold py-1 px-2 rounded'}>Contact Me</a>
                </div>
            </div>
            <div className={'hero h- flex bg-hero-bg bg-contain bg-right bg-no-repeat w-full items-center relative'}>
                <div className={'p-10 bg-white text-black absolute opacity-75 lg:opacity-100 xl:ml-64'}>
                    <h1 className='text-3xl md:text-6xl font-bold'>Metal Fabrication and Design</h1>
                    <div className={'flex'}>
                        <h2 className='text-2xl inline-block'>Made in Durango, CO</h2>
                        <ReactCountryFlag style={{ width: '1.5rem', height: '1.5rem'}} className={'inline-block ml-2 self-center'} countryCode="US" svg />
                    </div>
                </div>
            </div>
        </div>
    )
}