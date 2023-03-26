import HeroComponent from '@/components/hero';

export function Hero({ test }) {
  return (
    <HeroComponent test={test} />
  )
}

export async function getServerSideProps({ query }) {
  const test = Date.now() % 60
  return {
    props: {
      test,
    },
  };
}

export default Hero