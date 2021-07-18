import Head from 'next/head'
import Header from '../components/Header'
import MoviesList from '../components/MoviesList'
import Footer from '../components/Footer'

const  Home = ({sec}) => {
  return (
    <>
      <Head>
        <title>Zulu Movies | Rastaarc </title>
        <link rel="icon" href="favicon.png" />
        <meta name="description" contents="A WebApp for trending movies from TMDb API by Rastaarc(08141161177)" />
      </Head>
      {/* Header */}

      <Header sec={sec}/>
      {/* Main */}
      <MoviesList />

      {/* Footer */}
      <Footer/>
    </>
  )
}

// export const getStaticProps = async (context) => {

//   console.log(context)
//   return {
//     props: {
//       sec: 'home'
//     }
//   }
// }
export const getServerSideProps = async (context) => {

  return {
    props: {
      sec: context.query.sec? req.query.sec : ''
    }
  }
}

export default Home;