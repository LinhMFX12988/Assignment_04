import React from "react";
import { CardImg, CardTitle, CardText, CardBody, Breadcrumb, BreadcrumbItem } from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import { Loading } from "../Loading";

function StaffDetail(props) {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null)
        return (
            <div className="container">
                <hr />
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/nhanvien">Nhân Viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.staffs.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.staffs.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3">
                        <CardImg width="100%" src={props.staffs.image} />
                    </div>
                    <CardBody className="col-12 col-md-8 col-lg-9">
                        <CardTitle>Họ và tên : {props.staffs.name}</CardTitle>
                        <CardText>Ngày sinh : {dateFormat(props.staffs.doB, "dd/mm/yyyy")}</CardText>
                        <CardText>Ngày vào công ty : {dateFormat(props.staffs.startDate, "dd/mm/yyyy")}</CardText>
                        <CardText>Phòng ban : {props.staffs.department.name}</CardText>
                        <CardText>Số ngày nghỉ còn lại : {props.staffs.annualLeave}</CardText>
                        <CardText>Số ngày đã làm thêm : {props.staffs.overTime}</CardText>
                    </CardBody>
                </div>
                <hr />
            </div>
        );
}

export default StaffDetail;