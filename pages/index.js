import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Collage from "../components/Collage";
import getFiles from '../lib/getFiles'


export default function Home({photos}) {
  return (
    <>
      <Hero />
      {
        Object.keys(photos).map((section, index) => <Collage key={index} title={section} photos={photos[section]}/>)
      }
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
  console.log("PHOTOS", photos)
  return {
    props: {
      photos
    }, // will be passed to the page component as props
  }
}