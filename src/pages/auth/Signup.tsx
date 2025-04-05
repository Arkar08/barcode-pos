import type { FormProps } from "antd";
import { Button, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const {Title} = Typography;

const Signup = () => {
  return (
<div className="loginContainer">
      <Form
        name="basic"
        layout='vertical'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="form1"
      >
        <Title level={4} className="loginText">Signup</Title>
        <div className="btnContainer">
          <Button variant="solid" className="customer">
            CUSTOMER
          </Button>
          <Button variant="solid" className="customer">
            SUPPLIER
          </Button>
        </div>
       <div className="inputContainer">
        <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Enter Username or Email"/>
          </Form.Item>
          <Form.Item<FieldType>
            label="Email"
            name="username"
            rules={[{ required: true,message: "email is not a valid email!"}]}
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
            Signup
          </Button>
        </Form.Item>
        <Title level={5}>
            Already have an Account ? <Link className="register" to='/auth/login'>Login</Link>
        </Title>
      </Form>
    </div>
  )
}

export default Signup
