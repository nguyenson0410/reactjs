import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Col,
  Row,
  Label,
  ModalFooter,
} from "reactstrap";
import { useState } from "react";
import { LocalForm } from "react-redux-form";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchAddNewStaff } from "../redux/StaffList/StaffListSlice";
import { departmentSelector } from "../redux/selector";
import { useSelector } from "react-redux";
// bien luu gia tri tu input form
export var newStaff = {};

export const Addform = () => {
  const department = useSelector(departmentSelector);

  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: "",
    doB: "",
    salaryScale: "",
    startDate: "",
    departmentId: "Sale",
    annualLeave: "",
    overTime: "",
    image: "/assets/images/alberto.png",
  });

  const [nameErr, setNameErr] = useState({});
  const [slaryScaleErr, setSalaryScaleErr] = useState({});
  const [birthErr, setBirthErr] = useState("");
  const [startDateErr, setStartDateErr] = useState("");

  const [annualLeaveErr, setAnnualLeaveErr] = useState({});
  const [overTimeErr, setOverTimeErr] = useState({});

  const [newStaffData, setNewStaffData] = useState({});

  // ham xu ly dong mo modal
  const toggle = () => setModal(!modal);

  // kiem tra thong tin hop le cua form bang ham validate
  const validate = () => {
    const nameErr = {};
    const slaryScaleErr = {};
    let birthErr = "";
    let starDayErr = "";

    const annualLeaveErr = {};
    const overTimeErr = {};
    let isValid = true;
    // kiem tra viec nhap ten
    if (inputValues.name.trim() === "") {
      nameErr.noneInput = "chua nhap ten";
      isValid = false;
    } else if (inputValues.name.trim().length <= 3) {
      nameErr.shortName = "Ten toi thieu phai lon hon 3 ky tu";
      isValid = false;
    } else if (inputValues.name.trim().length > 30) {
      nameErr.longName = "Ten phai nho hon 30 ky tu";
      isValid = false;
    }

    //kiem tra viec nhap he so luong
    if (inputValues.salaryScale.trim() === "") {
      slaryScaleErr.noneInput = "chua nhap he so luong";
      isValid = false;
    } else if (isNaN(inputValues.salaryScale)) {
      slaryScaleErr.stringInput = "hay nhap chu so ";
      isValid = false;
    }
    //kiem tra viec nhap ngay thang nam sinh
    if (inputValues.doB.trim() === "") {
      birthErr = "chua nhap ngay thang nam sinh";
      isValid = false;
    }
    //kiem tra viec nhap ngay thang voa cong ty
    if (inputValues.startDate.trim() === "") {
      starDayErr = "chua nhap ngay vao cong ty";
      isValid = false;
    }

    //kiem tra viec nhap so ngay nghi con lai
    if (inputValues.annualLeave.trim() === "") {
      annualLeaveErr.noneInput = "hay nhap so ngay nghi con lai";
      isValid = false;
    } else if (isNaN(inputValues.annualLeave)) {
      annualLeaveErr.stringInput = "hay nhap chu so ";
      isValid = false;
    }
    // kiem tra viec nhap so ngay lam them
    if (inputValues.overTime.trim() === "") {
      overTimeErr.noneInput = "hay nhap so ngay da lam them";
      isValid = false;
    } else if (isNaN(inputValues.overTime)) {
      overTimeErr.stringInput = "hay nhap chu so ";
      isValid = false;
    }

    setNameErr(nameErr);
    setSalaryScaleErr(slaryScaleErr);
    setBirthErr(birthErr);
    setStartDateErr(starDayErr);
    setAnnualLeaveErr(annualLeaveErr);
    setOverTimeErr(overTimeErr);

    return isValid;
  };
  // ham xu li su kien submit
  const submitForm = (e) => {
    e.preventDefault();

    const isValid = validate();
    if (isValid) {
      toggle();
      setNewStaffData(inputValues);

      newStaff = { ...inputValues };
      newStaff.departmentId = inputValues.departmentId;
      const currentDepartment = department.find(
        (item) => item.name === newStaff.departmentId
      );
      newStaff.departmentId = currentDepartment.id;

       dispatch(fetchAddNewStaff(newStaff));
    }
  };
  // ham render ra anh nha vien moi

  //lay gia tri input cap nhat vao state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <div>
      <Button
        style={{ position: "absolute", left: "40%", top: "11%" }}
        onClick={toggle}
      >
        <span className="fa fa-plus fa-lg"></span>
      </Button>
      <Modal size="md" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Them nhan vien</ModalHeader>
        <ModalBody>
          <LocalForm action="">
            <Row className="control-group">
              <Label htmlFor=".name" md={3}>
                Tên
              </Label>
              <Col md={8}>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={inputValues.name}
                  name="name"
                />
                {Object.keys(nameErr).map((item) => {
                  return <p style={{ color: "red" }}>{nameErr[item]}</p>;
                })}
              </Col>
            </Row>
            <br />
            <Row className="control-group">
              <Label htmlFor=".name" md={3}>
                Ngay sinh
              </Label>
              <Col md={8}>
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  name="doB"
                />
                <p style={{ color: "red" }}>{birthErr}</p>
              </Col>
            </Row>
            <br />
            <Row className="control-group">
              <Label htmlFor=".name" md={3}>
                Ngay vao cong ty
              </Label>
              <Col md={8}>
                <input
                  type="date"
                  className="form-control"
                  name="startDate"
                  onChange={(e) => handleChange(e)}
                />
                <p style={{ color: "red" }}>{startDateErr}</p>
              </Col>
            </Row>
            <br />
            <Row className="control-group">
              <Label htmlFor=".name" md={3}>
                Phong ban
              </Label>
              <Col md={8}>
                <select
                  className="form-control"
                  name="department"
                  onChange={(e) => handleChange(e)}
                >
                  <option value="Sale" key="">
                    Sale
                  </option>
                  <option value="HR" key="">
                    HR
                  </option>
                  <option value="Marketing" key="">
                    Marketing
                  </option>
                  <option value="IT" key="">
                    IT
                  </option>
                  <option value="Finance" key="">
                    Finance
                  </option>
                </select>
              </Col>
            </Row>
            <br />
            <Row className="control-group">
              <Label htmlFor=".name" md={3}>
                He so luong
              </Label>
              <Col md={8}>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={inputValues.salaryScale}
                  name="salaryScale"
                />
                {Object.keys(slaryScaleErr).map((item) => {
                  return <p style={{ color: "red" }}> {slaryScaleErr[item]}</p>;
                })}
              </Col>
            </Row>
            <br />
            <Row className="control-group">
              <Label htmlFor=".name" md={3}>
                So ngay nghi con lai
              </Label>
              <Col md={8}>
                <input
                  type="text"
                  className="form-control"
                  name="annualLeave"
                  onChange={(e) => handleChange(e)}
                />
                {Object.keys(annualLeaveErr).map((item) => {
                  return (
                    <p style={{ color: "red" }}> {annualLeaveErr[item]} </p>
                  );
                })}
              </Col>
            </Row>
            <br />
            <Row className="control-group">
              <Label htmlFor=".name" md={3}>
                So ngay da lam them
              </Label>
              <Col md={8}>
                <input
                  type="text"
                  className="form-control"
                  name="overTime"
                  onChange={(e) => handleChange(e)}
                />
                {Object.keys(overTimeErr).map((item) => {
                  return <p style={{ color: "red" }}> {overTimeErr[item]} </p>;
                })}
              </Col>
            </Row>
          </LocalForm>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="success" onClick={submitForm}>
            Them
          </Button>
        </ModalFooter>
      </Modal>

      {/*   <div className="col-6 col-md-4 col-lg-2 mt-3 mb-3" key={newStaffData.id}>
        <div>
          <Link to={`/staffs/${newStaffData.id}`}>
            <img src={newStaffData.image} alt={newStaffData.name} />
            <div>
              <p style={{ display: "inline-block" }}>{newStaffData.name}</p>{" "}
            </div>
          </Link>
        </div>
              </div>*/}
    </div>
  );
};
