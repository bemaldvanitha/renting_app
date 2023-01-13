import React from "react";
import { Row, Col, Button } from 'antd';

import CusDrawer from "./Drawer";
import { HomeFilled } from "@ant-design/icons";

import '../styles/Header.css'

const CusHeader = () => {
    return(
        <>
            <div className={'header'}>
                <Row className={'header-items'}>
                    <Col span={4}>
                        <CusDrawer/>
                    </Col>
                    <Col span={4}>
                        <HomeFilled style={{ fontSize: '200%' }}/>
                    </Col>
                    <Col span={8}>
                        <h1 className={'title'}>Instant Stays</h1>
                    </Col>
                    <Col span={4}>
                        <Button className={'post-ad-button'}>
                            Post Your Ad
                        </Button>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default CusHeader;