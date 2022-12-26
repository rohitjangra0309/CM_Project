import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Col, Row } from "antd";
import Hospital from "../components/Hospital";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import Filter from "../components/filter";
function Home() {
  const [hospitals, setHospitals] = useState([]);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get(
        `/api/user/get-all-approved-hospitals?q=${query}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        setHospitals(response.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getData();
  }, [query]);

  //hospitals = search(hospitals)

  //console.log(temp)
  return (
    <>
      <Layout>
        <Col><h3>Select the Vaccine</h3></Col>
        <Col>
        
          <select name="Vaccines" onChange={(e) => { window.localStorage.setItem("vac",e.target.value ); setQuery(e.target.value) }} >
            <optgroup label="6 Weeks">
              <option value="OPV_1">Oral Polio Vaccine-1</option>
              <option value="PV_1">Pentavalent-1</option>
              <option value="RVV_1">Rotavirus Vaccine-1</option>
              <option value="PCV_1">Pneumococcal Conjugate Vaccine-1</option>
              <option value="flPV_1">Inactivated Polio Vaccine-1</option>
            </optgroup>
            <optgroup label="10 Weeks">
              <option value="OPV_2">Oral Polio Vaccine-2</option>
              <option value="PV_2">Pentavalent-2</option>
              <option value="RVV_2">Rotavirus Vaccine-2</option>
            </optgroup>
            <optgroup label="14 Weeks">
              <option value="OPV_3">Oral Polio Vaccine-3</option>
              <option value="PV_3">Pentavalent-3</option>
              <option value="RVV_3">Rotavirus Vaccine-3</option>
              <option value="PCV_3">Pneumococcal Conjugate Vaccine-3</option>
              <option value="flPV_3">Inactivated Polio Vaccine-3</option>
            </optgroup>
            <optgroup label="9-12 Months">
              <option value="MR_1">Measles and Rubella-1</option>
              <option value="JE_1">Japanese Encephalitis-1</option>
            </optgroup>
            <optgroup label="16-24 Months">
              <option value="MR_2">Measles and Rubella-2</option>
              <option value="JE_2">Japanese Encephalitis-2</option>
              <option value="DPT_1">Diphtheria Pertussis and Tetanus Booster-1</option>
            </optgroup>
            <optgroup label="5-6 Years">
            <option value="DPT_2">Diphtheria Pertussis and Tetanus Booster-2</option>
              
            </optgroup>
            <optgroup label="10 Years">
              <option value="Td">Tetanus and Adult Diphtheria</option>
            </optgroup>
          </select>
        </Col>
        <Row gutter={20}>
          {hospitals.map((hospital) => (
            <Col span={8} xs={24} sm={24} lg={8}>
              <Hospital hospital={hospital} />
            </Col>
          ))}
        </Row>
      </Layout>
    </>
  );
}

export default Home;
