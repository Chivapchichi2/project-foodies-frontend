import { useEffect } from "react";
import Icon from "../../shared/Icon/Icon";
import { Input } from "../../shared/Input/Input";
import styles from "./ImageUploader.module.css";

const ImageUploader = ({ register, setValue, imagePreview, setImagePreview, errors, watch }) => {
  useEffect(() => {
    const subscription = watch(
      (value) =>
        setImagePreview(URL.createObjectURL(value.image[0])) && setValue("image", value.image[0])
    );
    return () => subscription.unsubscribe();
  }, [watch, setImagePreview, setValue]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.uploadBox}>
        <label className={styles.customUploadBtn}>
          <Input type="file" name="image" register={register} setValue={setValue} errors={errors} />
          {errors.image && <p>{errors.image.message}</p>}
          {imagePreview && (
            <img src={imagePreview} alt="Recipe Preview" className={styles.imagePreview} />
          )}
          {!imagePreview && (
            <div className={styles.btnWrapper}>
              <Icon iconId="icon-capture-photo-camera" width="50px" height="50" />
              <span>Upload a photo</span>
            </div>
          )}
        </label>
      </div>
    </div>
  );
};

export default ImageUploader;
