import { useEffect, useRef, useState } from "react";
import IconButton from "../shared/IconButton/IconButton";
import styles from "./UserInfo.module.css";
import { nanoid } from "@reduxjs/toolkit";
import { UserInfoItem } from "./UserInfoItem";
import withoutAvatar from "../../images/user_without_avatar.jpg";

export const UserInfo = ({ isOwnProfile = true }) => {
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

  const [avatar, setAvatar] = useState(data.avatar || withoutAvatar);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result);
        // Додати функціонал для завантаження файлу на сервер
      };
      reader.readAsDataURL(file);
    }
  };
  const fileInputRef = useRef(null);
  const [iconSize, setIconSize] = useState({ width: 16, height: 16 });
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

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
        <img
          className={styles.profile_photo}
          src={avatar ? avatar : withoutAvatar}
          alt={`${data.name} avatar`}
        />

        {isOwnProfile && (
          <>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <IconButton
              iconId="icon-plus"
              style={styles.profile_big_card_button}
              styleSVG={styles.profile_big_card_icon}
              stroke={"#FFF"}
              width={iconSize.width}
              height={iconSize.height}
              onClick={handleButtonClick}
            />
          </>
        )}

        <h3 className={styles.profile_name}>{data.name}</h3>

        <ul className={styles.profile_info}>
          {dataKeys.map((dataKey) => {
            if (dataKey === "_id" || dataKey === "name" || dataKey === "avatar") {
              return;
            }
            return <UserInfoItem key={nanoid()} name={dataKey} value={data[dataKey]} />;
          })}
        </ul>
      </div>
    </div>
  );
};
