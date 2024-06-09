import styles from "./styles.module.css";
import cx from "classnames";
import { CustomModal } from "../../components/shared/CustomModal/CustomModal.jsx";
import { SignUpForm } from "../../components/SignUp/SignUpForm.jsx";
import { useState, useEffect } from "react";
import { LogOut } from "../../components/LogOut/LogOut.jsx";
import TestimonialsSwiper from "../../components/TestimonialsSwiper/TestimonialsSwiper.jsx";
import { useGetTestimonialsQuery } from "../../store/services/testimonialService.js";
import TabContent from "../../components/TabContent/TabContent.jsx";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalLogOutOpen, setModalLogOutOpen] = useState(false);
  const [getTestimanials, setGetTestimanials] = useState([]);
  const { data: testimonials, isLoading } = useGetTestimonialsQuery();

  useEffect(() => {
    if (testimonials && testimonials.length > 0) {
      setGetTestimanials(testimonials);
    }
  }, [testimonials]);

  return (
    <>
      {/* <div className={cx(styles.test)}>Home</div>
      <button className={styles.btn} type="button" onClick={() => setModalOpen(true)}>
        SignUp / SignIn
      </button>
      <button className={styles.btn} type="button" onClick={() => setModalLogOutOpen(true)}>
        Log Out
      </button>
      <CustomModal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <SignUpForm />
      </CustomModal>
      <CustomModal isOpen={modalLogOutOpen} onClose={() => setModalLogOutOpen(false)}>
        <LogOut setModalLogOutOpen={setModalLogOutOpen} />
      </CustomModal>
      {isLoading ? <div>Loading...</div> : <TestimonialsSwiper getTestimanials={getTestimanials} />} */}

      <TabContent />
    </>
  );
};

export default Home;
