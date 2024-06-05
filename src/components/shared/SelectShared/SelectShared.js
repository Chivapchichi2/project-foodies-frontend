import Select from "react-select";
import customStyles from "./customStyles"; // Імпорт стилів

const SelectShared = ({ field, options, placeholder, className }) => {
  return (
    <Select
      {...field}
      options={options}
      placeholder={placeholder}
      className={className}
      styles={customStyles}
    />
  );
};

export default SelectShared;
