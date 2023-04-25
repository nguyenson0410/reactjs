
import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  
} from "reactstrap";
import { newStaff } from "./Addform";
const luongCB = 3000000;
const luongGio = 200000;

export default function Salary(props) {
  var RenderData;

  if (newStaff.id>20) {
    RenderData = [...props.slaryProps, newStaff];
    console.log("true:", newStaff);
  } else {
    RenderData = [...props.slaryProps];
  }

  console.log("salary data:", RenderData);

  const salary = RenderData.map((item) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2">
        <Card>
          <CardTitle className="p-3 bg-white rounded m-2">
            {item.name}
          </CardTitle>
          <CardBody>
            <CardText>Mã nhân viên: {item.id}</CardText>
            <CardText>Hệ số lương: {item.salaryScale}</CardText>
            <CardText>Số giờ làm thêm: {item.overTime}</CardText>
            <CardText className="bg-light p-2 shadow">
              Lương:{" "}
              {(item.salaryScale * luongCB + item.overTime * luongGio).toFixed(
                0
              )}
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row  m-3"> {salary} </div>
    </div>
  );
}
