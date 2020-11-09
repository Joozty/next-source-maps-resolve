import styles from './styles.module.css'

// export async function getServerSideProps(context) {
//   console.log(context.query)
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }

const Page = () => <h1 className={styles.title}>Test</h1>

export default Page