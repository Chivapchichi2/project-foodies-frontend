import styles from "./styles.module.css";
import cx from "classnames";
import { CustomModal } from "../../components/shared/CustomModal/CustomModal.jsx";
import { useState, useEffect } from "react";
import { LogOut } from "../../components/LogOut/LogOut.jsx";
import TestimonialsSwiper from "../../components/TestimonialsSwiper/TestimonialsSwiper.jsx";
import { useGetTestimonialsQuery } from "../../store/services/testimonialService.js";
import {loadSvgSprite} from "../../utilities/loadSvgSprite.js";

const Home = () => {
  const [modalLogOutOpen, setModalLogOutOpen] = useState(false);
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
          <button className={styles.btn} type="button" onClick={() => setModalLogOutOpen(true)}>
              Log Out
          </button>
          <CustomModal isOpen={modalLogOutOpen} onClose={() => setModalLogOutOpen(false)}>
              <LogOut setModalLogOutOpen={setModalLogOutOpen}/>
          </CustomModal>
          {isLoading ? <div>Loading...</div> : <TestimonialsSwiper getTestimanials={getTestimanials}/>}

      </>
  );
};

export default Home;
