import React, { useState } from 'react'
import { Col, Upload, message, Input, Button, Carousel, Image, Row } from 'antd';
import { LoadingOutlined, CameraOutlined } from '@ant-design/icons';
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { db, storage } from '../firebase/index';

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
    const [imageUploadCount, setImageUploadCount] = useState(1);
    const [uploadedImageUrls, setUploadedImageUrls] = useState([]);

    const handleChange = (info) => {
        setLoading(true);
        const propertyImageRef = ref(storage, `images/${header}/${imageUploadCount.toString()}`);
        const uploadTask = uploadBytesResumable(propertyImageRef, info.file.originFileObj);

        uploadTask.on(
            "state_changed",
            (snapshot) => {},
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    let uploadedUrls = [...uploadedImageUrls, url];
                    setUploadedImageUrls(uploadedUrls);
                });
            }
        );

        setLoading(false);
        setImageUploadCount(imageUploadCount + 1);
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
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                    >
                        { uploadButton }
                    </Upload>
            </Col>

            <Col>
                <Carousel autoplay={true}>
                    { uploadedImageUrls.map(img => {
                        return(
                            <div key={img}>
                                <Image
                                    width={600}
                                    src={img}
                                />
                            </div>
                        )
                    }) }
                </Carousel>
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