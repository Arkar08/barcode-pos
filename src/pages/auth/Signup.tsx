import { Button, Form, Input, Typography } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FieldType1 } from "../../utils/Type";




const { Title } = Typography;

const Signup = () => {

    const context = useContext(AuthContext)
  
    if(!context){
      throw Error("auth context does not provide in auth provider.")
    }
  
    const {onFinish1,onFinishFailed1,handleActive,activeButton} = context;


  return (
    <div className="loginContainer">
      <Form
        name="basic"
        layout="vertical"
        onFinish={onFinish1}
        onFinishFailed={onFinishFailed1}
        autoComplete="off"
        className="form1"
      >
        <Title level={4} className="loginText">
          Signup
        </Title>
        <div className="btnContainer">
          <Button variant="solid" className="customer" style={{background: activeButton? '':'#7070db',color:activeButton ? '':'white'}} onClick={handleActive}>
            Admin
          </Button>
          <Button variant="solid" className="customer" style={{background: activeButton? '#7070db':'',color:activeButton ? 'white':''}} onClick={handleActive}>
            SUPPLIER
          </Button>
        </div>
        <div className="inputContainer">
          <Form.Item<FieldType1>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Enter Username or Email" className="inputEmail"/>
          </Form.Item>
          <Form.Item<FieldType1>
            label="Email"
            name="email"
            rules={[{ required: true, message: "email is not a valid email!" }]}
          >
            <Input placeholder="Enter Username or Email" className="inputEmail"/>
          </Form.Item>
          <Form.Item<FieldType1>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Enter Password" />
          </Form.Item>
        </div>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" className="loginButton">
            Signup
          </Button>
        </Form.Item>
        <Title level={5}>
          Already have an Account ?{" "}
          <Link className="register" to="/auth/login">
            Login
          </Link>
        </Title>
      </Form>
    </div>
  );
};

export default Signup;
