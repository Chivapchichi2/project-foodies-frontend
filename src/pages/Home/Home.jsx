import styles from "./styles.module.css";
import cx from "classnames";
import { useState, useEffect } from "react";
import IconButton from "../../components/shared/IconButton/IconButton.jsx";
import Button from "../../components/shared/Button/Button.jsx";
import { RecipeNavigation } from "src/components/Recipe";
import TestimonialsSwiper from "../../components/TestimonialsSwiper/TestimonialsSwiper.jsx";
import { useGetTestimonialsQuery } from "../../store/services/testimonialService.js";
import { loadSvgSprite } from "../../utilities/loadSvgSprite.js";

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
      <div className={cx(styles.test)}>Home</div>
      {/* DELETE BELOW DEMO CODE*/}
      <div style={{ backgroundColor: "#f4f2f2", padding: "10px", width: "450px" }}>
        <Button text="sign in" variant="auth" type="submit" />
      </div>

      <div style={{ backgroundColor: "#000000", padding: "10px" }}>
        <Button text="add recipe" variant="recipe" />
        <Button text="Beef" variant="categoryName" />
      </div>
      <Button text="publish" variant="publish" />
      <div style={{ padding: "10px", width: "450px" }}>
        <Button text="log out" variant="log_follow" />
      </div>
      <Button text="follow" variant="follow_user" />
      <IconButton iconId="icon-capture-photo-camera" />
      <IconButton iconId="icon-checkbox-active" />
      <IconButton iconId="icon-checkbox-default" />
      <IconButton iconId="icon-eye" />
      {/* DELETE ABOVE DEMO CODE*/}

      {isLoading ? <div>Loading...</div> : <TestimonialsSwiper getTestimanials={getTestimanials} />}

      <div
        style={{
          width: 1440,
          padding: 80,
          margin: "0 auto",
        }}
      >
        <RecipeNavigation />
      </div>
    </>
  );
};

export default Home;
