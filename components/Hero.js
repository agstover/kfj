import ReactCountryFlag from 'react-country-flag'

export default function Hero() {
    return (
        <div className={'mb-8'}>
            <div className={'flex flex-row pt-10 px-8'}>
                <h1 className={'flex-grow text-black font-logo font-bold text-4xl'}>Architectural Solutions</h1>
                <div>
                    <a href='#contact' className={' bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'}>Contact Me</a>
                </div>
            </div>
            <div className={'flex bg-hero-bg bg-contain bg-right bg-no-repeat w-full h-screen items-center relative'}>
                <div className={'p-10 bg-white text-black absolute opacity-75 md:opacity-100 xl:ml-64'}>
                    <h1 className='text-6xl font-bold'>Metal Fabrication and Design</h1>
                    <div className={'flex'}>
                        <h2 className='text-2xl inline-block'>Made in Durango, CO</h2>
                        <ReactCountryFlag style={{ width: '1.5rem', height: '1.5rem'}} className={'inline-block ml-2 self-center'} countryCode="US" svg />
                    </div>
                </div>
            </div>
        </div>
    )
}