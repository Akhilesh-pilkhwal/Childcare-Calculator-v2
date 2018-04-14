import React from "react";
import PropTypes from "prop-types";

const SelectInput = ({
  name,
  id,
  className,
  value,
  options,
  defaultOption,
  onChange
}) => {
  return (
    <dd>
      {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
      <select
        name={name}
        value={value}
        onChange={onChange}
        id={id}
        className={className}
      >
        {defaultOption ? <option value="">{defaultOption}</option> : ""}
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
    </dd>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  defaultOption: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
