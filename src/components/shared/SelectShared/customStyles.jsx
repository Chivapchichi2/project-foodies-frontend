const customStyles = {
  control: (styles) => ({
    ...styles,
    padding: "14px",
    borderRadius: "30px",
    border: "1px solid rgba(5, 5, 5, 0.12)",
    "@media (min-width: 375px)": {
      width: "343px",
    },
    "@media (min-width: 765px)": {
      width: "315px",
    },
  }),
  menu: (styles) => ({
    ...styles,
    padding: "16px 18px",
    borderRadius: "15px",
    border: "1px solid rgba(5, 5, 5, 0.20)",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "calc(24 / 16)",
    letterSpacing: "-0.32px",
    "@media (min-width: 375px)": {
      width: "343px",
    },
    "@media (min-width: 765px)": {
      width: "315px",
    },
  }),
};
//ed
export default customStyles;
