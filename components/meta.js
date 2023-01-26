import Head from "next/head";

export default function Meta({pageTitle}){
  return(
    <Head>
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} />
    </Head>
  )
}