import Head from 'next/head'
import ThreeTierPricing from '@/components/pricing'

export function Pricing({ test }) {
  return (
    <>
      <Head>
        <title>Pricing | Next MF app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ThreeTierPricing test={test}/>
      </main>
    </>
  )
}

export async function getServerSideProps({ query }) {
  const test = 'process.env.TEST_ENV_SHARING'
  return {
    props: {
      test,
    },
  };
}

export default Pricing
