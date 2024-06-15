import { useEffect } from "react";
import Icon from "../../shared/Icon/Icon";
import { Input } from "../../shared/Input/Input";
import styles from "./ImageUploader.module.css";

const ImageUploader = ({ register, setValue, imagePreview, setImagePreview, errors, watch }) => {
  useEffect(() => {
    const subscription = watch((value) => {
      if (value.thumb[0]) {
        setImagePreview(URL.createObjectURL(value.thumb[0])) && setValue("image", value.thumb[0]);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, setImagePreview, setValue]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.uploadBox}>
        <label className={styles.customUploadBtn}>
          <Input type="file" name="thumb" register={register} setValue={setValue} errors={errors} />
          {errors.thumb && <p>{errors.thumb.message}</p>}
          {imagePreview && (
            <img src={imagePreview} alt="Recipe Preview" className={styles.imagePreview} />
          )}
          <div className={styles.btnWrapper}>
            {!imagePreview && (
              <>
                <Icon
                  iconId="icon-capture-photo-camera"
                  width="50px"
                  height="50"
                  customStyle={styles.photoIcon}
                />
                <span>Upload a photo</span>
              </>
            )}
          </div>
        </label>
      </div>
      {imagePreview && (
        <label className={styles.uploadAnotherSpan}>
          <Input type="file" name="thumb" register={register} setValue={setValue} errors={errors} />
          Upload another photo
        </label>
      )}
    </div>
  );
};

export default ImageUploader;
