import React from "react";
import { Card, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';

function Department(props) {

    const renderDepartment = props.departments.map((department) => {
        return (
            <div key={department.id} className="col-12 col-md-6 col-xl-4">
                <FadeTransform in
                    transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>               
                    <Card>
                        <div style={{
                            backgroundColor: "#e6dff5",
                            border: "1px solid rgb(112, 112, 112)"
                        }}>
                            <h2>{department.name}</h2>
                            <br />
                            <div className="container text-center">Số lượng nhân viên: {department.numberOfStaff}</div>
                            <br />
                        </div>
                    </Card>
                </FadeTransform> 
            </div>
        )
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/">Nhân Viên</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Phòng Ban</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="col-12">
                <h1 className="text-center">Phòng Ban</h1>
                <br />
                <div className="row">{renderDepartment}</div>
            </div>
        </div>
    );
}

export default Department;