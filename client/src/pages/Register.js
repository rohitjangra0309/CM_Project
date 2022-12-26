import { Button, Form, Input } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { hideLoading, showLoading } from "../redux/alertsSlice";
import title from './TITLE-6.jpg';
import './tt.css';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/register", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="authentication" style={{backgroundImage: 'url('+title+')' }}>
      <div style={{ borderRadius:"10px", backgroundColor:"white",width:"30%",padding:"1%"}}>
        {/* <h1 className="card-title">Nice To Meet U</h1> */}
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Name" name="name">
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item label="Phone Number" name="phoneNumber">
            <Input placeholder="Phone Number" />
          </Form.Item>
          <Form.Item label="Address" name="address">
            <Input placeholder="Address" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>

          <Button
            id="reg_butn"
            htmlType="submit"
          >
            REGISTER
          </Button>

          <Link to="/login" id="reg_l">
            CLICK HERE TO LOGIN
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Register;
