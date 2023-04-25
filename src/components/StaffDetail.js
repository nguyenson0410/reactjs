import React from "react";
import {
  CardImg,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { departmentSelector } from "../redux/selector";

export default function StaffDetail(props) {
  const department = useSelector(departmentSelector);

  const currentDepartment = department.find(
    (item) => item.id === props.StaffDetailProps.departmentId
  );

  const RenderStaff = () => {
    return (
      <div className="col-12">
        <div className="row">
          <div className="col-3">
            <CardImg
              width="100%"
              src={props.StaffDetailProps.image}
              alt={props.StaffDetailProps.name}
            />
          </div>
          <div className="col-9">
            <CardTitle>Họ và tên: {props.StaffDetailProps.name}</CardTitle>
            <CardText>
              Ngày sinh: {dateFormat(props.StaffDetailProps.doB, "dd/mm/yyyy")}
            </CardText>
            <CardText>
              Ngày vào công ty:{" "}
              {dateFormat(props.StaffDetailProps.startDate, "dd/mm/yyyy")}
            </CardText>
            <CardText>Phòng ban: {currentDepartment.name}</CardText>
            <CardText>
              Số ngày nghỉ còn lại: {props.StaffDetailProps.annualLeave}
            </CardText>
            <CardText>
              Số ngày đã làm thêm: {props.StaffDetailProps.overTime}
            </CardText>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/staffs">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.StaffDetailProps.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.StaffDetailProps.name}</h3>
        </div>
        <div className="col-12">
          <hr />
        </div>
      </div>
      <div className="row mb-3">{RenderStaff()}</div>
    </div>
  );
}
