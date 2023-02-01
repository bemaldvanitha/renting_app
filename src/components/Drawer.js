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
            <Button type="primary" onClick={showDrawer} icon={ <MenuOutlined /> } size={20} style={{ backgroundColor: '#FAD02C' }} />
            <Drawer title="Instant Stays" placement="left" onClose={onClose} open={open}>
                <Row className={'item'}>
                    <Col span={4}>
                        <Link to={'/'}>
                            <HomeFilled style={{ fontSize: '200%'}}/>
                        </Link>
                    </Col>
                    <Col span={16}>
                        <Link to={'/'}>
                            <h2>Home</h2>
                        </Link>
                    </Col>
                </Row>
                <Row className={'item'}>
                    <Col span={4}>
                        <HeartFilled style={{ fontSize: '200%'}}/>
                    </Col>
                    <Col span={16}>
                        <h2>Favorite</h2>
                    </Col>
                </Row>
                <Row className={'item'}>
                    <Col span={4}>
                        <BellFilled style={{ fontSize: '200%'}}/>
                    </Col>
                    <Col span={16}>
                        <h2>Notification</h2>
                    </Col>
                </Row>
                <Row className={'item'}>
                    <Col span={4}>
                        <MessageFilled style={{ fontSize: '200%'}}/>
                    </Col>
                    <Col span={16}>
                        <h2>Message</h2>
                    </Col>
                </Row>
                <Row className={'item'}>
                    <Col span={4}>
                        <IdcardFilled style={{ fontSize: '200%'}}/>
                    </Col>
                    <Col span={16}>
                        <h2>Profile</h2>
                    </Col>
                </Row>
            </Drawer>
        </>
    );
};
export default CusDrawer;
