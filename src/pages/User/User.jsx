import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFetchUserProfileQuery } from "../../store/services/profileService";
import { getUserProfile } from "../../store/features/profileSlice";
import TabContent from "../../components/TabContent/TabContent";
import { Loader } from "../../components/shared/Loader/Loader";
import styles from "./User.module.css";
import { toast } from "react-toastify";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import { Button, SectionTitle } from "../../components/shared";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";

const User = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    data: profileData,
    error: profileError,
    isLoading: profileLoading,
  } = useFetchUserProfileQuery(id);

  useEffect(() => {
    if (profileData) {
      dispatch(getUserProfile(profileData));
    }
  }, [profileData, dispatch]);

  if (profileError) {
    toast.error(profileError.data.message, {
      position: "top-right",
    });
    return;
  }

  return (
    <div className={styles.container}>
      <div className={styles.breadscrumbs}>
        <BreadCrumbs currentPage={"Profile"} />
      </div>
      <div className={styles.title}>
        <SectionTitle text={"Profile"} />
      </div>
      <p className={styles.subtitle}>
        Reveal your culinary art, share your favorite recipe and create <br />
        gastronomic masterpieces with us.
      </p>
      <div className={styles.userInfoAndTabContentWerapper}>
        <div className={styles.userInfoAndBtnWrapper}>
          <UserInfo />
          <Button type={"button"} variant={"logOutBtn"} text={"Log Out"} />
        </div>

        <TabContent />
      </div>
    </div>
  );
};

export default User;
