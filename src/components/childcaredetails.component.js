import React from "react";
import PropTypes from "prop-types";

const ChildCareComponent = ({
  selectedKidsAge,
  handleLocationChange,
  selectedlocation,
  handleTypeOfCareChange,
  selectedtypeofcare,
  handleSchoolChange,
  selectedSchool,
  handleChildcareChange,
  removeOneChild,
  dataIndex,
  selectedChildcare,
  weekOptions,
  onWeekDayChange
}) => {
  return (
    <div className="fr_opvang" data-uren-maand="0" data-opvangobjid="99336082">
      <div className="fr_opvang_inner">
        {dataIndex >0 ?<span onClick={(e) => removeOneChild(e,dataIndex)} className="pull-right verwijderOpvang iconRound" title="Delete childcare"><i className="fa fa-remove"></i></span>:''}
        <p>Childcare</p>
        {selectedKidsAge === "1" || selectedKidsAge === "2" || selectedKidsAge === "3"? 
        <div>
        <div
          className="stapSelect stapSelect_locatie"
          style={{ display: "block" }}
        >
          <div className="stapLabel hidden">locatie:</div>

          <select
            name="locatie"
            className="stap stap_locatie count_2"
            onChange={(e) => handleLocationChange(e,dataIndex)}
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
              onChange={(e) => handleTypeOfCareChange(e,dataIndex)}
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
            onChange={(e) => handleSchoolChange(e,dataIndex)}
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
            onChange={(e) => handleChildcareChange(e,dataIndex)}
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
        {selectedlocation != 0 &&
        selectedtypeofcare != 0 &&
        selectedSchool != 0 &&
        selectedChildcare != 0 ?
        <div>
          {weekOptions.map((val,index) => 
            <div className="checkbox" key={index}>
              <label><input type="checkbox" value="" checked={val.checked} onChange={(e) => onWeekDayChange(e,index,dataIndex)}/>{val.day}</label>
              <label style={{float:'right'}}>{val.label}</label>
            </div>
          )}
        </div>
        :null}
         </div> :
      <div className="alert selecteer_leeftijd"><span style={{verticalAlign: 'inherit'}}><span style={{verticalAlign: 'inherit'}}>First select the age of the child</span></span></div>
      }
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
  handleChildcareChange: PropTypes.func,
  removeOneChild: PropTypes.func,
  selectedKidsAge:PropTypes.string
};
export default ChildCareComponent;
