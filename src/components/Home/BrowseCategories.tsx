import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useCategories from "../../hooks/useGetCategories";
import '../../assets/styles/components/home/BrowseCategories.scss';
interface Category {
    id: number;
    categoryName: string;
  }
const BrowseCategories = () => {
    const { categories, loading } = useCategories() as { categories: Category[]; loading: boolean };
    console.log(categories);
    
    if (loading) return <div>Loading...</div>
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
      }
      
  return (
    <div>
        <div className="browse-categories">
            <h3>Browse The Range</h3>
            <p>There are lots of category options which you can choose from</p>
        </div>
        <div>
            <Slider {...settings} className="sliderDiv">
                {categories.map((category)=>{
                    return <div key={category.id} className="categoryNameSlide">
                        <span className="categoryNameSlideText">{category.categoryName}</span>
                        </div>
                })}
            </Slider>
        </div>
    </div>
  )
}

export default BrowseCategories