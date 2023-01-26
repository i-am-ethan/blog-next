import Head from "next/head";
// サイトに関する情報
import { siteMeta } from 'lib/constants'
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta

export default function Meta({pageTitle, pageDesc}){
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
  const desc = pageDesc ?? siteDesc
  return(
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />
    </Head>
  )
}