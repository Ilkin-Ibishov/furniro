import Header from "../components/layout/Header"
import Hero from "../components/home/Hero"
import Footer from "../components/layout/Footer"
import GridPhotos from "../components/home/GridPhotos"
import BrowseCategories from "../components/home/BrowseCategories"
import OurProducts from "../components/home/OurProducts"

const Home = () => {
  return (
    <>
        <Header />
        <Hero />
        <BrowseCategories />
        <OurProducts />
        <GridPhotos />
        <Footer />
    </>
  )
}

export default Home