import { useEffect, useState } from "react";
import { useGetTestimonialsQuery } from "../../store/services/testimonialService.js";
// import { loadSvgSprite } from "../../utilities/loadSvgSprite.js";
import { TestimonialsSwiper } from "src/components";
import Hero from "../../components/Hero";
import { Loader } from "../../components/shared/Loader/Loader.jsx";
import { RecipeNavigation } from "../../components/Recipe/RecipeNavigation/RecipeNavigation.jsx";
import { Categories } from "../../components/Categories/Categories.jsx";
import { Recipes } from "../../components/Recipes/Recipes.jsx";

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
      {/* <Categories /> */}
      <Recipes category={"beef"} />

      {isLoading ? <Loader /> : <TestimonialsSwiper getTestimanials={getTestimanials} />}
    </>
  );
};

export default Home;
