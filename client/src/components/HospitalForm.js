import { Button, Col, Form, Input, Row, TimePicker, Checkbox } from "antd";
import moment from "moment";
import React from "react";
import './cs.css';
function HospitalForm({ onFinish, initivalValues }) {
  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        ...initivalValues,
        ...(initivalValues && {
          timings: [
            moment(initivalValues?.timings[0], "HH:mm"),
            moment(initivalValues?.timings[1], "HH:mm"),
          ],
        }),
      }}
    >
      <h1 className="card-title mt-3">General Information</h1>
      <Row gutter={20}>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Name"
            name="hName"
            rules={[{ required: true }]}
          >
            <Input placeholder="Name" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Phone Number"
            name="phoneNumber"
            rules={[{ required: true }]}
          >
            <Input placeholder="Phone Number" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Website"
            name="website"
            rules={[{ required: true }]}
          >
            <Input placeholder="Website" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Address"
            name="address"
            rules={[{ required: true }]}
          >
            <Input placeholder="Address" />
          </Form.Item>
        </Col>
      </Row>
      <hr />
      <h1 className="card-title mt-3">Working Details</h1>
      <Row gutter={20}>
      <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Working Hours"
            name="timings"
            rules={[{ required: true }]}
          >
            <TimePicker.RangePicker format="HH:mm" />
          </Form.Item>
        </Col>
        
        
        {/* <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Cost Per Vaccine"
            name="vacCost"
            rules={[{ required: true }]}
          >
            <Input placeholder="Cost Per Vaccine" type="number" />
          </Form.Item>
        </Col> */}
        
        <Col span={8} xs={24} sm={24} lg={8}>
        <Form.Item name="vaccinesArray" label="Choose the available vaccines">
        <Checkbox.Group>
          <Row>
            <Col span={18}>
              <Checkbox value="OPV_1" style={{ lineHeight: '32px' }}>
              Oral Polio Vaccine-1
              </Checkbox>
            </Col>
            <Col span={18}>
              <Checkbox value="PV_1" style={{ lineHeight: '32px' }} >
              Pentavalent-1
              </Checkbox>
            </Col>
            <Col span={18}>
              <Checkbox value="RVV_1" style={{ lineHeight: '32px' }}>
              Rotavirus Vaccine-1
              </Checkbox>
            </Col>
            <Col span={28}>
              <Checkbox value="PCV_1" style={{ lineHeight: '32px' }}>
              Pneumococcal Conjugate Vaccine-1
              </Checkbox>
            </Col>
            <Col span={18}>
              <Checkbox value="flPV_1" style={{ lineHeight: '32px' }}>
              Inactivated Polio Vaccine-1
              </Checkbox>
            </Col>
            <Col span={18}>
              <Checkbox value="OPV_2" style={{ lineHeight: '32px' }}>
              Oral Polio Vaccine-2
              </Checkbox>
            </Col>
            <Col span={18}>
              <Checkbox value="PV_2" style={{ lineHeight: '32px' }}>
              Pentavalent-2
              </Checkbox>
            </Col>
            <Col span={18}>
              <Checkbox value="RVV_2" style={{ lineHeight: '32px' }} >
              Rotavirus Vaccine-2
              </Checkbox>
            </Col>
            <Col span={18}>
              <Checkbox value="OPV_3" style={{ lineHeight: '32px' }}>
              Oral Polio Vaccine-3
              </Checkbox>
            </Col>
            <Col span={18}>
              <Checkbox value="PV_3" style={{ lineHeight: '32px' }}>
              Pentavalent-3
              </Checkbox>
            </Col>
            <Col span={18}>
              <Checkbox value="RVV_3" style={{ lineHeight: '32px' }}>
              Rotavirus Vaccine-3
              </Checkbox>
            </Col>
            <Col span={28}>
              <Checkbox value="PCV_3" style={{ lineHeight: '32px' }}>
              Pneumococcal Conjugate Vaccine-3
              </Checkbox>
            </Col>
            <Col span={18}>
              <Checkbox value="flPV_3" style={{ lineHeight: '32px' }}>
              Inactivated Polio Vaccine-3
              </Checkbox>
            </Col>
            <Col span={18}>
              <Checkbox value="MR_1" style={{ lineHeight: '32px' }}>
              Measles and Rubella-1
              </Checkbox>
            </Col>
            <Col span={18}>
              <Checkbox value="JE_1" style={{ lineHeight: '32px' }}>
              Japanese Encephalitis-1
              </Checkbox>
            </Col>
            <Col span={18}>
              <Checkbox value="MR_2" style={{ lineHeight: '32px' }}>
              Measles and Rubella-2
              </Checkbox>
            </Col>
            <Col span={18}>
              <Checkbox value="JE_2" style={{ lineHeight: '32px' }}>
              Japanese Encephalitis-2
              </Checkbox>
            </Col>
            <Col span={18}>
              <Checkbox value="DPT_1" style={{ lineHeight: '32px' }}>
              Diphtheria Pertussis and Tetanus Booster-1
              </Checkbox>
            </Col>
            <Col span={30}>
              <Checkbox value="DPT_2" style={{ lineHeight: '32px' }}>
              Diphtheria Pertussis and Tetanus Booster-2
              </Checkbox>
            </Col>
            <Col span={18}>
              <Checkbox value="Td" style={{ lineHeight: '32px' }}>
              Tetanus and Adult Diphtheria
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>
        </Col>
      </Row>

      <div className="d-flex justify-content-end">
        <Button htmlType="submit" id="submit_butn">
          SUBMIT
        </Button>
      </div>
    </Form>
  );
}

export default HospitalForm;
