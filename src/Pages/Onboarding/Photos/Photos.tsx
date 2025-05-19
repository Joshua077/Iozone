import "./Photos.css"
import React, { useState } from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CreateIcon from '@mui/icons-material/Create';
import Registration from "../../../Components/Modal/Registration";
import { useNavigate } from "react-router-dom";

const Photos: React.FC = () => {
    const [image1, setImage1] = useState<File | null>(null);
    const [image2, setImage2] = useState<File | null>(null);
    const [image3, setImage3] = useState<File | null>(null);
    const [image4, setImage4] = useState<File | null>(null);
    const [image5, setImage5] = useState<File | null>(null);
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)

    const handleImageChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setImage1(file);
        }
    };
    const handleRemoveImage1 = () => {
        setImage1(null);
    };

    const handleImageChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setImage2(file);
        }
    };
    const handleRemoveImage2 = () => {
        setImage2(null);
    };  
    const handleImageChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setImage3(file);
        }
    };
    
    const handleRemoveImage3 = () => {
        setImage3(null);
    };  
    
    const handleImageChange4 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setImage4(file);
        }
    };
    const handleRemoveImage4 = () => {
        setImage4(null);
    };  
    
    const handleImageChange5 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setImage5(file);
        }
    };
    const handleRemoveImage5 = () => {
        setImage5(null);
    };

    const handleImageModal = () =>{
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(true)
        navigate('/chat')
    }
    return (
        <div className='photo_content'>
            {showModal && <Registration onClose={handleCloseModal}/>}
            <h2>Add Pictures</h2>
            <p>Select at least two pictures</p>
          <div className="r">
          <div className="photo_image_container">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange1}
                   
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
                />
                {image1 ? (
                    <div>
                        <div className="image_wrapper">
                            <img
                                src={URL.createObjectURL(image1)}
                                alt="Uploaded"
                                onClick={handleRemoveImage1}
                            />
                            <CreateIcon
                                onClick={handleRemoveImage1}
                                className="delete_button"
                            />
                               
                        </div>
                    </div>
                ) : (
                    <div
                        className="ui">
                        <CameraAltIcon className="uy" />
                    </div>
                )}
            </div>


            <div className="photo_image_container">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange2}
                   
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
                />
                {image2 ? (
                    <div>
                        <div className="image_wrapper">
                            <img
                                src={URL.createObjectURL(image2)}
                                alt="Uploaded"
                                onClick={handleRemoveImage2}
                            />
                            <CreateIcon
                                onClick={handleRemoveImage2}
                                className="delete_button"
                            />
                               
                        </div>
                    </div>
                ) : (
                    <div
                        className="ui">
                        <CameraAltIcon className="uy" />
                    </div>
                )}
            </div>

            <div className="photo_image_container">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange3}
                   
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
                />
                {image3 ? (
                    <div>
                        <div className="image_wrapper">
                            <img
                                src={URL.createObjectURL(image3)}
                                alt="Uploaded"
                                onClick={handleRemoveImage3}
                            />
                            <CreateIcon
                                onClick={handleRemoveImage3}
                                className="delete_button"
                            />
                               
                        </div>
                    </div>
                ) : (
                    <div
                        className="ui">
                        <CameraAltIcon className="uy" />
                    </div>
                )}
            </div>

            <div className="photo_image_container">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange4}
                   
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
                />
                {image4 ? (
                    <div>
                        <div className="image_wrapper">
                            <img
                                src={URL.createObjectURL(image4)}
                                alt="Uploaded"
                                onClick={handleRemoveImage4}
                            />
                            <CreateIcon
                                onClick={handleRemoveImage4}
                                className="delete_button"
                            />
                               
                        </div>
                    </div>
                ) : (
                    <div
                        className="ui">
                        <CameraAltIcon className="uy" />
                    </div>
                )}
            </div>

            <div className="photo_image_container">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange5}
                   
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
                />
                {image5 ? (
                    <div>
                        <div className="image_wrapper">
                            <img
                                src={URL.createObjectURL(image5)}
                                alt="Uploaded"
                                onClick={handleRemoveImage5}
                            />
                            <CreateIcon
                                onClick={handleRemoveImage5}
                                className="delete_button"
                            />
                               
                        </div>
                    </div>
                ) : (
                    <div
                        className="ui">
                        <CameraAltIcon className="uy" />
                    </div>
                )}
            </div>
          </div>
            <button onClick={handleImageModal}>Submit </button>
        </div>
    );
};

export default Photos;