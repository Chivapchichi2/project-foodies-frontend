import Select from "react-select";
import { useState } from "react";
// import styles from "./SelectDropDown.module.css";
// import cx from "classnames";

const categoriesOpt = [
  { value: "beef", label: "Beef" },
  { value: "breakfast", label: "Breakfast" },
  { value: "desserts", label: "Desserts" },
  { value: "lamb", label: "Lamb" },
  { value: "miscellaneous", label: "Miscellaneous" },
  { value: "pasta", label: "Pasta" },
  { value: "pork", label: "Pork" },
  { value: "seafood", label: "Seafood" },
  { value: "side", label: "Side" },
  { value: "starter", label: "Starter" },
];
const ingridientsOpt = [
  { value: "cabbage", label: "Cabbage" },
  { value: "cucamber", label: "Cucamber" },
  { value: "tomato", label: "Tomato" },
  { value: "corn", label: "Corn" },
  { value: "radish", label: "Radish" },
  { value: "parsley", label: "Parsley" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    background: "transparent",
    border: "none",
    display: "flex",
    flexWrap: "nowrap",
    borderRadius: "30px",
    boxShadow: "inset 0 0 0 1px rgba(5, 5, 5, 0.12)",
  }),
  menu: (provided) => ({
    ...provided,
    background: "#000000",
    backgroundColor: "#000000",
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: "14px",
    lineHeight: " 1.4",
    fontWeight: "500",
    color: "rgba(05,05,05,0.6)",
  }),
};

const SelectDropDown = ({ placeholder, variant = "categories" }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={variant === "categories" ? categoriesOpt : ingridientsOpt}
        placeholder={placeholder}
        styles={customStyles}
      />
    </div>
  );
};

export default SelectDropDown;
