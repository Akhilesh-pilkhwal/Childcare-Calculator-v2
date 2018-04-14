import React from "react";
import PropTypes from "prop-types";

const ChildCareComponent = ({
  handleLocationChange,
  selectedlocation,
  handleTypeOfCareChange,
  selectedtypeofcare,
  handleSchoolChange,
  selectedSchool,
  handleChildcareChange
}) => {
  return (
    <div className="fr_opvang" data-uren-maand="0" data-opvangobjid="99336082">
      <div className="fr_opvang_inner">
        <p>Childcare</p>
        <div
          className="stapSelect stapSelect_locatie"
          style={{ display: "block" }}
        >
          <div className="stapLabel hidden">locatie:</div>

          <select
            name="locatie"
            className="stap stap_locatie count_2"
            onChange={handleLocationChange}
          >
            <option value="0">- Select Location -</option>
            <option value="Zaandam">Zaandam</option>
            <option value="Amsterdam">Amsterdam</option>
          </select>
        </div>
        {selectedlocation != 0 ? (
          <div
            className="stapSelect stapSelect_soortopvang"
            style={{ display: "block" }}
          >
            <div className="stapLabel hidden">soortopvang:</div>

            <select
              name="soortopvang"
              className="stap stap_soortopvang count_3"
              onChange={handleTypeOfCareChange}
            >
              <option value="0">- Select Type of care -</option>
              <option value="Daycare">Daycare</option>
              <option value="Toddler package">Toddler package</option>
              <option value="Flexible childcare">Flexible childcare</option>
            </select>
          </div>
        ) : (
          ""
        )}

        {selectedlocation != 0 && selectedtypeofcare != 0 ? (
          <div
            className="stapSelect stapSelect_school"
            style={{ display: "block" }}
            onChange={handleSchoolChange}
          >
            <div className="stapLabel hidden">school:</div>

            <select name="school" className="stap stap_school count_4">
              <option value="0">- Select School -</option>
              <option value="OBS De Regenboog">OBS De Regenboog</option>
              <option value="CBS De Morgenster">CBS De Morgenster</option>
            </select>
          </div>
        ) : (
          ""
        )}
        {selectedlocation != 0 &&
        selectedtypeofcare != 0 &&
        selectedSchool != 0 ? (
          <div
            className="stapSelect stapSelect_opvang"
            style={{ display: "block" }}
            onChange={handleChildcareChange}
          >
            <div className="stapLabel hidden">opvang:</div>

            <select name="opvang" className="stap stap_opvang count_5">
              <option value="0">- Select childcare -</option>
              <option value="40 weken BSO">40 weken BSO</option>
              <option value="52 weken BSO">52 weken BSO</option>
            </select>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
ChildCareComponent.propTypes = {
  handleLocationChange: PropTypes.func,
  selectedlocation: PropTypes.string,
  handleTypeOfCareChange: PropTypes.func,
  selectedtypeofcare: PropTypes.string,
  handleSchoolChange: PropTypes.func,
  selectedSchool: PropTypes.string,
  handleChildcareChange: PropTypes.func
};
export default ChildCareComponent;
