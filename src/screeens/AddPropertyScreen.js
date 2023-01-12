import React, { useState } from 'react'
import { Col, Upload, message, Input, Button } from 'antd';
import { LoadingOutlined, CameraOutlined } from '@ant-design/icons';

import { db, storage } from '../firebase/index';

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

const AddPropertyScreen = () => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [header, setHeader] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <CameraOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );

    const onPriceChange = (e) => {
        if(!isNaN(e.target.value)){
            setPrice(e.target.value);
        }
    }

    return(
        <div>

            <Col>
                <h1>Welcome {} Let's Post An Ad</h1>
            </Col>

            <Col>
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                >
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt="avatar"
                            style={{
                                width: '100%',
                            }}
                        />
                    ) : (
                        uploadButton
                    )}
                </Upload>
            </Col>

            <Col>
                <Input placeholder={'Name for Header'} value={ header } onChange={ (e) => setHeader(e.target.value) }/>
            </Col>

            <Col>
                <Input placeholder={'Price'} value={ price } onChange={ (e) => onPriceChange(e) }/>
            </Col>

            <Col>
                <Input placeholder={'Description'} value={ description } onChange={ (e) => setDescription(e.target.value) }/>
            </Col>

            <Col>
                <Input placeholder={'Location'} value={ location } onChange={ (e) => setLocation(e.target.value) }/>
            </Col>

            <Col>
                <Button type="primary">Post</Button>
            </Col>

        </div>
    )
}

export default AddPropertyScreen;