import '../styles/index.css'
import '@fontsource/krona-one'
import {DEFAULT_SEO} from '../lib/constants'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <title key="title">{DEFAULT_SEO.title}</title>
        <meta
          key="description"
          name="description"
          content={DEFAULT_SEO.description}
        />
        <meta
          key="og:url"
          property="og:url"
          content={DEFAULT_SEO.openGraph.url}
        />
        <meta
          key="og:type"
          property="og:type"
          content={DEFAULT_SEO.openGraph.type}
        />
        <meta
          key="og:title"
          property="og:title"
          content={DEFAULT_SEO.openGraph.title}
        />
        <meta
          key="og:description"
          property="og:description"
          content={DEFAULT_SEO.openGraph.description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={DEFAULT_SEO.openGraph.image}
        />
        <meta
          key="og:image:width"
          property="og:image:width"
          content={DEFAULT_SEO.openGraph.imageWidth}
        />
        <meta
          key="og:image:height"
          property="og:image:height"
          content={DEFAULT_SEO.openGraph.imageHeight}
        />
        <meta
          key="og:locale"
          property="og:locale"
          content={DEFAULT_SEO.openGraph.locale}
        />
        
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
