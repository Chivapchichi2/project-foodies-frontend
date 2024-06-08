import Icon from "../../shared/Icon/Icon";
import { Input } from "../../shared/Input/Input";
import css from "./ImageUploader.module.css";

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
    <div className={css.uploadBox}>
      <label className={css.customUploadBtn}>
        <Input
          type="file"
          name="image"
          register={register}
          setValue={setValue}
          hasText={!!imagePreview}
          setImagePreview={setImagePreview}
          errors={errors}
          onChange={handleImageChange}
        />
        {errors.image && <p>{errors.image.message}</p>}
        {imagePreview && (
          <img src={imagePreview} alt="Recipe Preview" className={css.imagePreview} />
        )}
        <div>
          <Icon iconId="icon-photo-camera" width="50px" height="50" />
          <span>Upload a photo</span>
        </div>
      </label>
    </div>
  );
};

export default ImageUploader;
