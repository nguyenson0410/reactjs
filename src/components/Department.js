import React from "react";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";
import { newStaff } from "./Addform";
//Presentational Component
function RenderDepartment(props) {
  const RenderData = props.renderDepartmentProps;

  const Departments = props.renderDepartmentProps.map((item) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2">
        <Card>
          <CardTitle className="m-2">{item.name}</CardTitle>
          <CardBody>
            <CardText>Số lượng nhân viên: {item.numberOfStaff}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  });
  return Departments;
}
//Container Component
export default function Department(props) {
  console.log(props.departmentProps);

  return (
    <div className="container">
      <div className="row  m-3">
        <RenderDepartment renderDepartmentProps={props.departmentProps} />
      </div>
    </div>
  );
}
