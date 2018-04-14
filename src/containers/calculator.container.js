import React from "react";
import SelectInput from "../components/common/SelectInput";
import ChildcareDetails from "../components/childcaredetails.component";
import { INITIAL_DATA , INITIAL_INCOME ,INITIAL_WORKING_HOURS ,INITIAL_CHILD_AGE } from '../constants/initialState';
export class ManageCalculatorPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      childCareOptions: INITIAL_DATA,
      selectedIncome: "18176",
      selectedWorkingHours: "9",
      selectedKidsAge: "",
      childs: [],
      incomes: INITIAL_INCOME,
      kidsages:INITIAL_CHILD_AGE,
      workinghours: INITIAL_WORKING_HOURS
    };
    this.handleIncomeChange = this.handleIncomeChange.bind(this);
    this.handleworkinghoursChange = this.handleworkinghoursChange.bind(this);
    this.handlekidsageChange = this.handlekidsageChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleTypeOfCareChange = this.handleTypeOfCareChange.bind(this);
    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleChildcareChange = this.handleChildcareChange.bind(this);
    this.addMoreChild = this.addMoreChild.bind(this);
    this.removeOneChild = this.removeOneChild.bind(this);
  }

  handleIncomeChange(e) {
    this.setState({
      selectedIncome: e.target.value
    });
  }
  handleworkinghoursChange(e) {
    this.setState({
      selectedWorkingHours: e.target.value
    });
  }
  handlekidsageChange(e) {
    this.setState({
      selectedKidsAge: e.target.value
    });
  }
  handleLocationChange(e,index) {
    debugger
    let currentData=this.state.childCareOptions.slice();
    currentData[index].selectedlocation=e.target.value;
    this.setState({
      childCareOptions: currentData
    });
    if (e.target.value === "0") {
      currentData[index].selectedtypeofcare=0;
      currentData[index].selectedSchool=0;
      currentData[index].selectedChildcare=0;
      this.setState({
        childCareOptions:currentData
      });
    }
  }
  handleSchoolChange(e,index) {
    let currentData=this.state.childCareOptions.slice();
    currentData[index].selectedSchool=e.target.value;
    this.setState({
      childCareOptions: currentData
    });
    if (e.target.value === "0") {
      currentData[index].selectedChildcare=0;
      this.setState({
        childCareOptions:currentData
      });
    }
  }
  handleTypeOfCareChange(e,index) {
    let currentData=this.state.childCareOptions.slice();
    currentData[index].selectedtypeofcare=e.target.value;
    this.setState({
      childCareOptions:currentData
    });
    if (e.target.value === "0") {
      currentData[index].selectedSchool=0;
      currentData[index].selectedChildcare=0;
      this.setState({
        childCareOptions:currentData
      });
    }
  }
  handleChildcareChange(e,index) {
    let currentData=this.state.childCareOptions.slice();
    currentData[index].selectedChildcare=e.target.value;
    this.setState({
      childCareOptions:currentData
    });
  }
  addMoreChild() {
    let childCareOptions = this.state.childCareOptions.slice();
    let data = {
      selectedlocation: "",
      selectedSchool: "",
      selectedChildcare: "",
      selectedtypeofcare: ""
    }
    childCareOptions.push(data)
    this.setState({ childCareOptions: childCareOptions });
  }
  removeOneChild(Element, index){
    let currentData=this.state.childCareOptions.slice()
    currentData.splice(index,1);
    this.setState({childCareOptions:currentData});
  }
  render() {
    const morechilds = this.state.childs.map((Element, index) => {
      return (<Element key={index} value={index} />)
    });
    return (
      <div id="container">
        <div id="wrapper">
          <div className="centered">
            <h2>Net childcare costs calculator</h2>
            <div className="clearfix" />
            <form>
              <div className="fr_intro_text">
                <p>
                  Fill in your situation and we will calculate the net costs* of
                  the chosen child care.<br />*you may be entitled to child care
                  benefit. This is a contribution towards the costs of child
                  care. Check the{" "}
                  <a
                    href="http://www.belastingdienst.nl/wps/wcm/connect/bldcontenten/belastingdienst/individuals/benefits/moving_to_the_netherlands/my_child_goes_to_a_child_care_centre/"
                    target="_blank"
                  >
                    conditions
                  </a>.
                </p>
              </div>
              <div className="fr_berekening_wrap">
                <h3>Your situation</h3>
                <div className="fr_personal_data vlak">
                  <dl className="dl-horizontal">
                    <dt>Assessment income per year</dt>
                    <SelectInput
                      name="inkomen"
                      id="inkomen"
                      className="inputbox"
                      value={this.state.selectedIncome}
                      options={this.state.incomes}
                      onChange={this.handleIncomeChange}
                    />
                  </dl>
                  <dl className="dl-horizontal">
                    <dt>Least working hours </dt>
                    <SelectInput
                      name="uren_minst_werkende"
                      id="uren_minst_werkende"
                      className="inputbox"
                      value={this.state.selectedWorkingHours}
                      options={this.state.workinghours}
                      onChange={this.handleworkinghoursChange}
                    />
                  </dl>
                </div>
                <div className="fr_kinderen_opvangen">
                  <h3>Kids and childcare</h3>
                  <div className="fr_wrap">
                    <div className="fr_kinderen">
                      <div className="fr_kind">
                        <div className="fr_kind_details">
                          <div className="fr_kind_img">
                            <img src="https://www.rekentoolkinderopvang.nl//media/com_rekentool/images/small/782071_kind.jpg" />
                          </div>
                          <input
                            type="text"
                            name="naam_kind[]"
                            className="naam_kind"
                            placeholder="Name of child"
                          />
                          <SelectInput
                            name="leeftijd[]"
                            id="leeftijd"
                            className="inputbox required"
                            value={this.state.selectedKidsAge}
                            defaultOption="- Age -"
                            options={this.state.kidsages}
                            onChange={this.handlekidsageChange}
                          />
                        </div>
                        <div className="fr_kind_opvangtypes_wrap">
                          {this.state.childCareOptions.map((child, index) =>
                            <div className="fr_kind_opvangtypes">
                              <ChildcareDetails
                                handleChildcareChange={this.handleChildcareChange}
                                handleSchoolChange={this.handleSchoolChange}
                                handleLocationChange={this.handleLocationChange}
                                handleTypeOfCareChange={this.handleTypeOfCareChange}
                                selectedChildcare={this.state.childCareOptions[index].selectedChildcare}
                                selectedlocation={this.state.childCareOptions[index].selectedlocation}
                                selectedSchool={this.state.childCareOptions[index].selectedSchool}
                                selectedtypeofcare={this.state.childCareOptions[index].selectedtypeofcare}
                                dataIndex={index}
                                removeOneChild={this.removeOneChild}
                              />
                            </div>
                          )}
                          {/* {morechilds} */}
                          <span
                          className="link voegOpvangToe"
                          onClick={this.addMoreChild}
                        >
                          <span className="iconRound large animated">
                            <span className="icon">+</span>
                          </span>{" "}
                          Add another childcare
                        </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageCalculatorPage;
