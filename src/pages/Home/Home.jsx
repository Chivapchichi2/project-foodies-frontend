import styles from "./styles.module.css";
import cx from "classnames";
import { useState, useEffect } from "react";
import IconButton from "../../components/shared/IconButton/IconButton.jsx";
import Button from "../../components/shared/Button/Button.jsx";
import { RecipeNavigation } from "src/components/Recipe";
import TestimonialsSwiper from "../../components/TestimonialsSwiper/TestimonialsSwiper.jsx";
import { useGetTestimonialsQuery } from "../../store/services/testimonialService.js";
import {loadSvgSprite} from "../../utilities/loadSvgSprite.js";

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
    </>
  );
};

export default Home;
