import React from "react";
import { Link } from 'react-router-dom';
import { Row, Col, Button,Avatar } from 'antd';

import CusDrawer from "./Drawer";
import { HomeFilled, UserOutlined } from "@ant-design/icons";

import '../styles/Header.css'

const CusHeader = () => {
    return(
        <>
            <div className={'header'}>
                <Row className={'header-items'}>
                    <Col span={2}>
                        <CusDrawer/>
                    </Col>
                    {/* <Col span={4}>
                        <Link to={'/'}>
                            <HomeFilled style={{ fontSize: '200%' }}/>
                        </Link>
                    </Col> */}
                    <Col span={4} >
                    <Link to={'/'}>
                        <h1 style={{color:'white'}} className={'title'}>Instant Stays</h1>
                    </Link>
                    </Col>
                    <Col span={17}>
                        <Link to={'/add-property'}>
                            <Button className={'post-ad-button'}>
                                Post Your Ad
                            </Button>
                        </Link>
                    </Col>
                    <Col span={1}>
                        
                    <Avatar size="large" icon={<UserOutlined />} />
                        
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default CusHeader;