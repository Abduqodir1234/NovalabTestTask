import { Button, Form, Input } from "antd"
import Title from "antd/lib/typography/Title";
import { SignInFormWrapper } from "../signin/styles";
import { Typography } from 'antd';
import {Link, useNavigate} from 'react-router-dom'
import openNotification from "../notification";
import { useMutation } from "react-query";
import SignUpRequest from "../../Queryhooks/signup";
const { Text } = Typography;


interface SignUpFormDatas{
    email:string;
    password:string
}


let SignUpForm = () => {
    const navigate = useNavigate()

    // if sign up is successfull
    const onSuccess = (res:any) =>{
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('userId',res.data.id)
        openNotification("success","You registered and signin successfully")
        navigate("/")
    }
    // if sign up is unsuccessfull
    const onError = (e:any) => {
        openNotification("error",e.response.data.error)
    }

    //Mutation
    let {mutate,isLoading} = useMutation(SignUpRequest,{onError,onSuccess})


    //Form Submit successfull
    const onFinish = (values:SignUpFormDatas) => {
        mutate(values)
    };
    //Form Submit unsuccessfull
      const onFinishFailed = (errorInfo:any) => {
        console.log('Failed:', errorInfo);
      };

      
    return(
        <SignInFormWrapper>
            <Title level={5}>Sign Up</Title>
            <Form 
                name="basic"
                onFinish={onFinish}
                layout='vertical'
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                <Button loading={isLoading}  type="primary" htmlType="submit">
                    Send
                </Button>
                <br/>
                <Text >Already have an account?</Text> <Link  to="/signin" >
                    SignIn
                </Link>
                </Form.Item>
            </Form>
        </SignInFormWrapper>
    )
}

export default SignUpForm;