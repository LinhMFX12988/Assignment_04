import React from "react";
import Header from "./components/Header";
import StaffList from "./components/STAFFS/StaffList";
import StaffDetail from "./components/STAFFS/StaffDetail";
import Department from "./components/DEPARTMENTS/Department";
import Salary from "./components/Salary";
import Footer from "./components/Footer";
import "./App.css";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addStaff, fetchStaffs } from './redux/ActionCreators';

const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departments: state.departments
  };
};

const mapDispatchToProps = (dispatch) => ({
  addStaff: (name, doB, startDate, department, salaryScale, annualLeave, overTime) => dispatch(addStaff(name, doB, startDate, department, salaryScale, annualLeave, overTime)),
  fetchStaffs: () => {dispatch(fetchStaffs())}
});

function App(props) {

  //--------------Render detail staff----------------
  const renderDetailStaff = ({ match }) =>
    <StaffDetail
        staffs={props.staffs.staffs.filter((staffs) => staffs.id === parseInt(match.params.id, 10))[0]}
        addStaff={props.addStaff}
        staffsLoading={props.staffs.isLoading}
        staffsErrMess={props.staffs.errMess}
    />

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/staffs" component={() => <StaffList staffs={props.staffs} addStaff={props.addStaff}/>} />
        <Route path="/staffs/:id" component={renderDetailStaff} />
        <Route path="/department" component={() => <Department departments={props.departments} />} />
        <Route path="/salary" component={() => <Salary salary={props.staffs} />} />
        <Redirect to="/staffs" />
      </Switch>
      <Footer />
    </>
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


