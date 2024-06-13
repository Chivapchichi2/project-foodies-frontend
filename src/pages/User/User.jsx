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
      <UserInfo />
      <TabContent />
    </div>
  );
};

export default User;
