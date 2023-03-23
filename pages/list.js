import GridListWithHeading from '@/components/list'

export function List({ test }) {
  return (
    <GridListWithHeading test={test} />
  )
}

export async function getServerSideProps({ query }) {
  const test = Date.now() % 1000
  return {
    props: {
      test,
    },
  };
}

export default List
