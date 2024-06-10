import {useEffect, useState} from "react";
import {useGetTestimonialsQuery} from "../../store/services/testimonialService.js";
import {loadSvgSprite} from "../../utilities/loadSvgSprite.js";
import {RecipeNavigation, TestimonialsSwiper} from "src/components";
import {Card} from "../../components/shared/delete/card.jsx";


const Home = () => {
  const [getTestimanials, setGetTestimanials] = useState([]);
  const { data: testimonials, isLoading } = useGetTestimonialsQuery();

  useEffect(() => {
    if (testimonials && testimonials.length > 0) {
      setGetTestimanials(testimonials);
    }
  }, [testimonials]);

  useEffect(() => {
    loadSvgSprite("/project-foodies-frontend/symbol-defs.svg");
  }, []);

  return (
    <>
      <div
        style={{
          width: 1440,
          padding: 80,
          margin: "0 auto",
        }}
      >
        <RecipeNavigation />
      </div>
        {isLoading ? <div>Loading...</div> : <TestimonialsSwiper getTestimanials={getTestimanials} />}
        <Card/>
    </>
  );
};

export default Home;
