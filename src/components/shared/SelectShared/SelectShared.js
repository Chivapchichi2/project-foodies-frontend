import Select from "react-select";
import customStyles from "./customStyles";

const SelectShared = ({ field, options, placeholder }) => {
  return <Select {...field} options={options} placeholder={placeholder} styles={customStyles} />;
};

export default SelectShared;
