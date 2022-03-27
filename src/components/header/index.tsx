import { Layout, Menu, notification } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {matchPath, Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import useProfileData from '../../Queryhooks/useProfiledata';
import get_auth_user from '../../redux/actions/get_auth_user';
import openNotification from '../notification';
const { Header} = Layout;


const headerLinks = [
    {
        url:'/',
        name:'Home'
    },

]




interface MainHeaderProps{
   
}

let MainHeader:FC<MainHeaderProps> = ({}) => {
    let location = useLocation()
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let token = localStorage.getItem('token')
    const [loggedIn,setloggedin] = useState(token && true)

    //if error happens
    const onError = () =>{
        handleLogout()
    }

    const onSuccess = (e:any) => {
        dispatch(get_auth_user(e.data.data))
    }

    let res = useProfileData(onError,onSuccess)
    
    //Logout
    const handleLogout = () => { 
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
        if(matchPath("/profile",location.pathname)){
            navigate("/")
        }
        setloggedin(false)
    }
    //header links
    const AuthorizationLinks =  loggedIn ? [
        {
            url:'/profile',
            name:'Profile'
        },
        {
            url:'#logout',
            name:'Logout',
            logout:true
        },
    
    ] 
    :
    [
        {
            url:'/signin',
            name:'Sign In'
        },
        {
            url:'/register',
            name:'Sign Up'
        },
    ]


    return(
        <Header >
            <div className="logo" />
            <Menu  theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                {headerLinks.map(one=>(
                    <Menu.Item><NavLink style={(props)=>props.isActive ? {color:'white'} : {}} to={one.url}>{one.name}</NavLink></Menu.Item>
                ))}
                <SubMenu title={res?.data?.data?.data?.name ? res?.data?.data?.data?.name : "Profile" } icon={<img className='profile_image' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />} className='ml-auto'>
                    {AuthorizationLinks.map(one=>(
                        <Menu.Item onClick={()=>one.logout ? handleLogout() : ""} > <NavLink style={(props)=>props.isActive  && !one.logout  ? {color:'red'} : {}} className='ml-2' to={one.url}>{one.name}</NavLink></Menu.Item>
                    ))}
                </SubMenu>
             
            </Menu>
        </Header>
    )
}

export default MainHeader;