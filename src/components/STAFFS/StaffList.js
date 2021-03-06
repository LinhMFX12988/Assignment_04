import React, { useState } from "react";
import {
  Card,
  CardTitle,
  CardImg,
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";
import { FadeTransform } from 'react-animation-components';

///// Validators
const required = (val) =>{return val && val.length};
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);

function StaffList(props) {
  const [search, setSearch] = useState("");
  const [toggleStaffs, setToggleStaffs] = useState(false);

  //-----------------Search---------------------
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterStaff = props.staffs.staffs.filter((staffItem) => {
    return staffItem.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;    
  });
  //-----------------End Search---------------------
  //-----------------Add Staff----------------------  
  const handelAddFormSubmit = (values) => {
    props.addStaff( 
      values.name, 
      values.doB, 
      values.startDate, 
      values.department, 
      values.salaryScale, 
      values.annualLeave, 
      values.overTime
    )};
 
  const toggleAddFormModal = () => {
    setToggleStaffs(!toggleStaffs);
  };

  const closeBtn = (
    <button className="close" onClick={toggleAddFormModal}>
      &times;
    </button>
  );
  //-----------------End Add Staff------------------

  const renderStaff = filterStaff.map((staff) => {
    return (
      <div key={staff.id} className="col-6 col-md-4 col-xl-2">
      <FadeTransform in
        transformProps={{
          exitTransform: 'scale(0.5) translateY(-50%)'
        }}>
        <Card style={{ border: "1px solid rgb(112, 112, 112)" }}>
          <Link to={`/staffs/${staff.id}`}>
            <CardImg src={staff.image} />
            <CardTitle
              className="text-center"
              style={{ color: "black", fontSize: "90%" }}
            >
              {staff.name}
            </CardTitle>
          </Link>
        </Card>
      </FadeTransform>
      </div>
    );
  });

  return (
    <div className="container">
      <br />
      <div className="col-12">
        <h1 className="text-center">Nh??n Vi??n</h1>
        <div className="col">
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              {/*************************Button Add***************************/}
              <Button outline onClick={toggleAddFormModal}>
                <span className="fa fa-plus fa-lg"></span> Add
              </Button>

              {/*Add Form Modal*/}
              <Modal isOpen={toggleStaffs} toggle={toggleAddFormModal}>
                <ModalHeader toggle={toggleAddFormModal} close={closeBtn}>
                  Th??m Nh??n Vi??n
                </ModalHeader>
                <ModalBody>
                  <LocalForm onSubmit={(values) => handelAddFormSubmit(values)}>
                    <Row className="form-group">
                      <Label htmlFor="name" md={5}>
                        T??n *
                      </Label>
                      <Col md={7}>
                        <Control.text
                          model=".name"
                          id="name"
                          name="name"
                          className="form-control"
                          validators={{
                            required,
                            maxLength: maxLength(30),
                            minLength: minLength(2),
                          }}
                        />
                        <Errors
                          className="text-danger"
                          model=".name"
                          show="touched"
                          messages={{
                            required: "Y??u c???u nh???p !",
                            minLength: "Y??u c???u nhi???u h??n 2 k?? t??? !",
                            maxLength: "Y??u c???u ??t h??n 30 k?? t??? !",
                          }}
                        />
                      </Col>
                    </Row>

                    <Row className="form-group">
                      <Label htmlFor="name" md={5}>
                        Ng??y sinh *
                      </Label>
                      <Col md={7}>
                        <Control.text
                          model=".doB"
                          id="doB"
                          name="doB"
                          className="form-control"
                          type="date"
                          validators={{
                            required: (val) => val,
                          }}
                        />
                        <Errors
                          className="text-danger"
                          model=".doB"
                          show="touched"
                          messages={{
                            required: "Y??u c???u nh???p !",
                          }}
                        />
                      </Col>
                    </Row>

                    <Row className="form-group">
                      <Label htmlFor="name" md={5}>
                        Ng??y v??o c??ng ty *
                      </Label>
                      <Col md={7}>
                        <Control.text
                          model=".startDate"
                          id="startDate"
                          name="startDate"
                          className="form-control"
                          type="date"
                          validators={{
                            required: (val) => val,
                          }}
                        />
                        <Errors
                          className="text-danger"
                          model=".startDate"
                          show="touched"
                          messages={{
                            required: "Y??u c???u nh???p !",
                          }}
                        />
                      </Col>
                    </Row>

                    <Row className="form-group">
                      <Label htmlFor="name" md={5}>
                        Ph??ng ban *
                      </Label>
                      <Col md={7}>
                        <Control.select
                          model=".department"
                          className="form-control"
                          name="sale"
                          id="sale"
                          validators={{
                            required,
                          }}
                        >
                          <option></option>
                          <option value="Dept01">Sale</option>
                          <option value="Dept02">HR</option>
                          <option value="Dept03">Marketing</option>
                          <option value="Dept04">IT</option>
                          <option value="Dept05">Finance</option>
                        </Control.select>
                        <Errors
                          className="text-danger"
                          model=".department"
                          show="touched"
                          messages={{
                            required: "H??y ch???n ph??ng ban !",
                          }}
                        />
                      </Col>
                    </Row>

                    <Row className="form-group">
                      <Label htmlFor="name" md={5}>
                        H??? s??? l????ng
                      </Label>
                      <Col md={7}>
                        <Control.text
                          model=".salaryScale"
                          id="salaryScale"
                          name="salaryScale"
                          className="form-control"
                          type="number.toFixed()"
                          placeHolder="1-3"
                          defaultValue="1"
                          validators={{
                            required,
                          }}
                        />
                        <Errors
                          className="text-danger"
                          model=".salaryScale"
                          show="touched"
                          messages={{
                            require: "Required",
                          }}
                        />
                      </Col>
                    </Row>

                    <Row className="form-group">
                      <Label htmlFor="name" md={5}>
                        S??? ng??y ngh??? c??n l???i
                      </Label>
                      <Col md={7}>
                        <Control.text
                          model=".annualLeave"
                          id="annualLeave"
                          name="annualLeave"
                          className="form-control"
                          type="number.toFixed()"
                          placeholder="0"
                          defaultValue="0"
                          validators={{
                            required,
                          }}
                        />
                        <Errors
                          className="text-danger"
                          model=".annualLeave"
                          show="touched"
                          messages={{
                            require: "Required",
                          }}
                        />
                      </Col>
                    </Row>

                    <Row className="form-group">
                      <Label htmlFor="name" md={5}>
                        S??? ng??y ???? l??m th??m
                      </Label>
                      <Col md={7}>
                        <Control.text
                          model=".overTime"
                          id="overTime"
                          name="overTime"
                          className="form-control"
                          type="number.toFixed()"
                          placeholder="0"
                          defaultValue="0"
                          validators={{
                            required,
                          }}
                        />
                        <Errors
                          className="text-danger"
                          model=".overTime"
                          show="touched"
                          messages={{
                            require: "Required",
                          }}
                        />
                      </Col>
                    </Row>

                    {/*Add button*/}
                    <Row className="form-group">
                      <Col className="col-7 offset-5">
                        <Button type="submit" color="primary">
                          Th??m
                        </Button>
                      </Col>
                    </Row>
                  </LocalForm>
                </ModalBody>
              </Modal>
              {/*************************End Button Add***************************/}
              <form className="d-flex col-8 col-md-6 col-lg-4">
                <Input
                  placeholder="Search..."
                  label="Search"
                  icon="search"
                  onChange={handleSearch}
                />
              </form>
            </div>
          </nav>
        </div>
        <br />
        <div className="row">{renderStaff}</div>
        <br />
      </div>
    </div>
  );
}

export default StaffList;
