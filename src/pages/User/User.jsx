import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFetchUserProfileQuery } from "../../store/services/profileService";
import { getUserProfile } from "../../store/features/profileSlice";
import TabContent from "../../components/TabContent/TabContent";
import { Loader } from "../../components/shared/Loader/Loader";

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

  if (profileLoading) {
    return <Loader />;
  }

  if (profileError) {
    return <div>Error: {profileError.message}</div>;
  }

  return (
    <div>
      <TabContent />
    </div>
  );
};

export default User;
