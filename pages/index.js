import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Collage from "../components/Collage";
import getFiles from '../lib/getFiles'

const Arrow = () => (
  <section className={'scrolldown'} id='scrolldown'>
      <a href="#work"><span></span>View our work</a>
  </section>
)

export default function Home({photos}) {
  return (
    <>
      <Hero />
      <Arrow />
      <div className={'bg-gradient-to-b from-white to-gray-300 mb-20'}>
        <img className={'w-full'} src='mtn-border.png'/>
      </div>
      <div id='work'>
      {
        Object.keys(photos).map((section, index) => <Collage key={index} title={section.split('_').join(' ')} photos={photos[section]}/>)
      }
      </div>
      <Footer />
    </>
  )
}

export async function getStaticProps(context) {
  
  const photosDir = process.cwd() + '/public/site_photos/'
  let photos = await getFiles(photosDir)
  photos = photos.map(photo => photo.split(`${process.cwd()}/public/`)[1])
  .reduce((acc, photo) => {
    let temp = photo.split('/')[1]
    acc[temp] = Array.isArray(acc[temp]) ? [...acc[temp], photo] : [] 
    return acc
  },{})
  return {
    props: {
      photos
    }, // will be passed to the page component as props
  }
}