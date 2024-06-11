import { useEffect, useState } from "react";
import { useGetTestimonialsQuery } from "../../store/services/testimonialService.js";
// import { loadSvgSprite } from "../../utilities/loadSvgSprite.js";
import { TestimonialsSwiper } from "src/components";
import Hero from "../../components/Hero";
import { Loader } from "../../components/shared/Loader/Loader.jsx";

const Home = () => {
  const [getTestimanials, setGetTestimanials] = useState([]);
  const { data: testimonials, isLoading } = useGetTestimonialsQuery();

  useEffect(() => {
    if (testimonials && testimonials.length > 0) {
      setGetTestimanials(testimonials);
    }
  }, [testimonials]);

  // useEffect(() => {
  //   loadSvgSprite("/project-foodies-frontend/symbol-defs.svg");
  // }, []);

  return (
    <>
      <Hero />
      {/*<div*/}
      {/*  style={{*/}
      {/*    width: 1440,*/}
      {/*    padding: 80,*/}
      {/*    margin: "0 auto",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <RecipeNavigation />*/}
      {/*</div>*/}
      {isLoading ? <Loader /> : <TestimonialsSwiper getTestimanials={getTestimanials} />}
    </>
  );
};

export default Home;
