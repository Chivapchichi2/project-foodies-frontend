import { nanoid } from "@reduxjs/toolkit";
import { TagListItem } from "./TagItem.jsx";
import styles from "./Tag.module.css";

export const TagList = () => {
  const tags = { category: "Dessert", time: "60", area: "British" };
  const tagsKeys = Object.keys(tags);

  return (
    <ul className={styles.tags_list}>
      {tagsKeys.map((tagsKey) => (
        <TagListItem key={nanoid()} tagInfo={tags[tagsKey]} />
      ))}
    </ul>
  );
};
