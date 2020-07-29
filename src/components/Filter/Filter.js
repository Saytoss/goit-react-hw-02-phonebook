import React from "react";
import PropTypes from "prop-types";
import styles from "./filter.module.css";

const style = {
  display: "block",
};

const Filter = ({ onChange }) => {
  return (
    <label htmlFor="filterInput" className={styles.title}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        onChange={onChange}
        name="filter"
        style={style}
        id="filterInput"
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default Filter;
