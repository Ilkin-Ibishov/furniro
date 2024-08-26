import Header from "../components/layout/Header"
import Hero from "../components/Home/Hero"
import Footer from "../components/layout/Footer"
import GridPhotos from "../components/Home/GridPhotos"

const Home = () => {
  return (
    <>
        <Header />
        <Hero />

        <GridPhotos />
        <Footer />
    </>
  )
}

export default Home