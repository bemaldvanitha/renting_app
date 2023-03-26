import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Upload, message, Input, Button, Carousel, Image, Row } from 'antd';
import { LoadingOutlined, CameraOutlined } from '@ant-design/icons';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { addDoc, serverTimestamp, collection } from 'firebase/firestore';
import { db, storage } from '../firebase/index';
import swal from 'sweetalert';
import '../styles/AddPropertyScreen.css';
import {getAuth} from "firebase/auth";
import CusHeader from '../components/Header';

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
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [floorArea, setFloorArea] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [header, setHeader] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [imageUploadCount, setImageUploadCount] = useState(1);
    const [uploadedImageUrls, setUploadedImageUrls] = useState([]);

    useEffect(() => {
        const auth = getAuth();
        const currentUser = auth.currentUser;
        if(currentUser === null){
            navigate('/sign-in');
        }
    },[]);

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

    const onFloorAreaChange = (e) => {
        if(!isNaN(e.target.value)){
            setFloorArea(e.target.value);
        }
    }

    const onBedroomChange = (e) => {
        if(!isNaN(e.target.value)){
            setBedrooms(e.target.value);
        }
    }

    const onBathroomChange = (e) => {
        if(!isNaN(e.target.value)){
            setBathrooms(e.target.value);
        }
    }

    const postAd = async () => {
       addDoc(collection(db, "properties"), {
            title: header,
            description: description,
            price: parseInt(price),
            location: location,
            imageUrls: uploadedImageUrls,
            floorArea: parseFloat(floorArea),
            bedrooms: parseInt(bedrooms),
            bathrooms: parseInt(bathrooms),
            timestamp: serverTimestamp()
        }).then(() => {
            // console.log("Document added successfully!");
            // toast.success("Added Successfully!");
            swal(" Created Successfully!", "Your Post Added!", "success");
            navigate('/');
          }).catch((error) => {
            // console.error("Error adding document: ", error);
            // toast.error(error);

          });
    }

    return(
        <div>
        <CusHeader/>
        <div className={'property-box'}>

            <Row className={'title'}>
                <Col span={20}>
                    <h1>Welcome {} Let's Post An Ad</h1>
                </Col>
            </Row>

            <Row className={'image-uploader'}>
                <Col span={14}>
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
            </Row>


                <Col>
                    <Carousel autoplay={true}>
                        { uploadedImageUrls.map(img => {
                            return(
                                <div key={img}>
                                    <Image
                                        width={600}
                                        height={400}
                                        src={img}
                                    />
                                </div>
                            )
                        }) }
                    </Carousel>
                </Col>

            <Row className={'input'}>
                <Col span={14}>
                    <Input placeholder={'Name for Header'} value={ header } onChange={ (e) => setHeader(e.target.value) }/>
                </Col>
            </Row>

            <Row className={'input'}>
                <Col span={14}>
                    <Input placeholder={'Price'} value={ price } onChange={ (e) => onPriceChange(e) }/>
                </Col>
            </Row>

            <Row className={'input'}>
                <Col span={14}>
                    <Input placeholder={'Floor Area'} value={ floorArea } onChange={ (e) => onFloorAreaChange(e) }/>
                </Col>
            </Row>

            <Row className={'input'}>
                <Col span={14}>
                    <Input placeholder={'Bedrooms'} value={ bedrooms } onChange={ (e) => onBedroomChange(e) }/>
                </Col>
            </Row>

            <Row className={'input'}>
                <Col span={14}>
                    <Input placeholder={'Bathrooms'} value={ bathrooms } onChange={ (e) => onBathroomChange(e) }/>
                </Col>
            </Row>

            <Row className={'input'}>
                <Col span={14}>
                    <Input placeholder={'Description'} value={ description } onChange={ (e) => setDescription(e.target.value) }/>
                </Col>
            </Row>

            <Row className={'input'}>
                <Col span={14}>
                    <Input placeholder={'Location'} value={ location } onChange={ (e) => setLocation(e.target.value) }/>
                </Col>
            </Row>

            <Row className={'button'}>
                <Col span={14}>
                    <Button type="primary" onClick={ postAd } style={{ background: "#FAD02C"}}>
                        Post
                    </Button>
                </Col>
            </Row>

        </div>
        </div>
    )
}

export default AddPropertyScreen;