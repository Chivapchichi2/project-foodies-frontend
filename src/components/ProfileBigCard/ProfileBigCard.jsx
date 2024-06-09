import { useEffect, useState } from "react";
import Button from "../shared/Button/Button";
import IconButton from "../shared/IconButton/IconButton";
import styles from "./ProfileBigCard.module.css";
import { ProfileInfoItem } from "./ProfileInfoItem";

export const ProfileBigCard = () => {
  const data = {
    _id: {
      $oid: "64c8d958249fae54bae90bb9",
    },
    name: "GoIT",
    avatar: "https://images.genius.com/20c6c4552548a217189a1e56c6433945.1000x1000x1.png",
    email: "goit@gmail.com",
    createdRecipesCount: 10,
    favoriteRecipesCount: 8,
    followersCount: 5,
    followingCount: 9,
  };

  const dataKeys = Object.keys(data);

  const [iconSize, setIconSize] = useState({ width: 16, height: 16 });

  useEffect(() => {
    const updateIconSize = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setIconSize({ width: 16, height: 16 });
      } else {
        setIconSize({ width: 18, height: 18 });
      }
    };

    updateIconSize();
    window.addEventListener("resize", updateIconSize);

    return () => {
      window.removeEventListener("resize", updateIconSize);
    };
  }, []);

  return (
    <div className={styles.profile_card_wrapper}>
      <div className={styles.profile_card}>
        <img className={styles.profile_photo} src={data.avatar} alt={`${data.name} avatar`} />

        <IconButton
          iconId="icon-plus"
          style={styles.profile_big_card_button}
          styleSVG={styles.profile_big_card_icon}
          width={iconSize.width}
          height={iconSize.height}
        />

        <h3 className={styles.profile_name}>{data.name}</h3>

        <ul className={styles.profile_info}>
          {dataKeys.map((dataKey) => {
            if (dataKey === "_id" || dataKey === "name" || dataKey === "avatar") {
              return;
            }
            return (
              <ProfileInfoItem
                key={`${data._id}${data[dataKey]}`}
                name={dataKey}
                value={data[dataKey]}
              />
            );
          })}
        </ul>
      </div>
      <Button text="log out" variant="publish" />
    </div>
  );
};
