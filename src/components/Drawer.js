import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Drawer, Row, Col } from 'antd';
import { MenuOutlined, HomeFilled, HeartFilled, BellFilled, MessageFilled, IdcardFilled } from '@ant-design/icons';

import '../styles/Drawer.css'

const CusDrawer = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button onClick={showDrawer} icon={ <MenuOutlined /> } size={20} style={{ backgroundColor: 'white' }} />
            <Drawer title="Instant Stays" placement="left" onClose={onClose} open={open}>
                <Row className={'item'}>
                    <Col span={4}>
                        <Link to={'/'}>
                            <HomeFilled style={{ fontSize: '200%'}}/>
                        </Link>
                    </Col>
                    <Col span={16}>
                        <Link to={'/'}>
                            <h4>Home</h4>
                        </Link>
                    </Col>
                </Row>
                <Row className={'item'}>
                    <Col span={4}>
                        <HeartFilled style={{ fontSize: '200%'}}/>
                    </Col>
                    <Col span={16}>
                        <h4>Favorite</h4>
                    </Col>
                </Row>
                <Row className={'item'}>
                    <Col span={4}>
                        <BellFilled style={{ fontSize: '200%'}}/>
                    </Col>
                    <Col span={16}>
                        <h4>Notification</h4>
                    </Col>
                </Row>
                <Row className={'item'}>
                    <Col span={4}>
                        <MessageFilled style={{ fontSize: '200%'}}/>
                    </Col>
                    <Col span={16}>
                        <h4>Message</h4>
                    </Col>
                </Row>
                <Row className={'item'}>
                    <Col span={4}>
                        <IdcardFilled style={{ fontSize: '200%'}}/>
                    </Col>
                    <Col span={16}>
                        <h4>Profile</h4>
                    </Col>
                </Row>
            </Drawer>
        </>
    );
};
export default CusDrawer;
