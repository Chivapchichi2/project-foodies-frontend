import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetTestimonialsQuery } from "../../store/services/testimonialService.js";
// import { loadSvgSprite } from "../../utilities/loadSvgSprite.js";
import { TestimonialsSwiper } from "src/components";
import Hero from "../../components/Hero";
import { Loader } from "../../components/shared/Loader/Loader.jsx";
import { Categories } from "src/components/Categories/Categories.jsx";

const Home = () => {
  const location = useLocation();
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
      {location.pathname === "/" ? <Categories /> : <Outlet />}
      {isLoading ? <Loader /> : <TestimonialsSwiper getTestimanials={getTestimanials} />}
    </>
  );
};

export default Home;
