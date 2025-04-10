import type { FormProps } from "antd";
import { Button, Form, Input, Typography } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

type FieldType = {
  username?: string;
  password?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const {Title} = Typography

const Login = () => {

  const context = useContext(AuthContext)

  if(!context){
    throw Error("auth context does not provide in auth provider.")
  }

  const {loginUser} = context;
  console.log(loginUser)


  return (
    <div className="loginContainer">
      <Form
        name="basic"
        layout='vertical'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="form"
      >
        <Title level={4} className="loginText">Login</Title>
       <div className="inputContainer">
        <Form.Item<FieldType>
            label="Username Or Email"
            name="username"
            rules={[{ required: true, message: "Please input your username or email!" }]}
          >
            <Input placeholder="Enter Username or Email"/>
          </Form.Item>
          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Enter Password"/>
          </Form.Item>
       </div>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" className="loginButton">
            Login
          </Button>
        </Form.Item>
        <Title level={5}>
            Don't have an Account ? <Link className="register" to='/auth/signup'>Register</Link>
        </Title>
      </Form>
    </div>
  );
};

export default Login;
