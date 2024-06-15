import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFetchUserProfileQuery } from "../../store/services/profileService";
import { getUserProfile } from "../../store/features/profileSlice";
import TabContent from "../../components/TabContent/TabContent";
import styles from "./User.module.css";
import { toast } from "react-toastify";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import { Button, CustomModal, SectionTitle } from "../../components/shared";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import { LogOut } from "../../components";
import { selectIsAuthorizedUser } from "../../store/selectors/profileSelectors";

const User = () => {
  const [modalLogOutOpen, setModalLogOutOpen] = useState(false);
  const isAuthorizedUser = useSelector(selectIsAuthorizedUser);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: profileData, error: profileError } = useFetchUserProfileQuery(id);

  useEffect(() => {
    if (profileData) {
      dispatch(getUserProfile(profileData));
    }
  }, [profileData, dispatch]);

  // if (profileLoading) {
  //   return <Loader />;
  // }

  if (profileError) {
    toast.error(profileError.data.message, {
      position: "top-right",
    });
    return;
  }

  return (
    <>
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
            {isAuthorizedUser ? (
              <Button
                type={"button"}
                variant={"logoutOrFollowBtn"}
                text={"Log Out"}
                onClick={() => setModalLogOutOpen(true)}
              />
            ) : (
              <Button type={"button"} variant={"logoutOrFollowBtn"} text={"Follow"} />
            )}
          </div>

          <TabContent />
        </div>
      </div>

      <CustomModal isOpen={modalLogOutOpen} onClose={() => setModalLogOutOpen(false)}>
        <LogOut setModalLogOutOpen={setModalLogOutOpen} />
      </CustomModal>
    </>
  );
};

export default User;
