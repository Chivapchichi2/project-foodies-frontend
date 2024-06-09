import Icon from "../../shared/Icon/Icon";
import { Input } from "../../shared/Input/Input";
import styles from "./ImageUploader.module.css";
import cx from "classnames";

const ImageUploader = ({ register, setValue, imagePreview, setImagePreview, errors }) => {
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const file = files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setValue("image", files);
    }
  };

  return (
    <div className={cx(styles.wrapper)}>
      <div className={styles.uploadBox}>
        <label className={styles.customUploadBtn}>
          <Input
            type="file"
            name="image"
            register={register}
            setValue={setValue}
            errors={errors}
            onChange={handleImageChange}
          />
          {errors.image && <p>{errors.image.message}</p>}
          {imagePreview && (
            <img src={imagePreview} alt="Recipe Preview" className={styles.imagePreview} />
          )}
          {!imagePreview && (
            <div className={cx(styles.btnWrapper)}>
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
