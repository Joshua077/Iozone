import React, { useState } from 'react'
import './Edit.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import TranslateIcon from '@mui/icons-material/Translate';
import SchoolIcon from '@mui/icons-material/School';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import VapingRoomsIcon from '@mui/icons-material/VapingRooms';
import ChurchIcon from '@mui/icons-material/Church';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import PetsIcon from '@mui/icons-material/Pets';
import Person2Icon from '@mui/icons-material/Person2';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';

export default function Edit() {

    const [images, setImages] = useState<string[]>([]);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const newImage = URL.createObjectURL(file);
            setImages([...images, newImage]);
        }
    };


    const removeImage = (index: number) => {
        const updated = [...images];
        updated.splice(index, 1);
        setImages(updated);
    };

    return (
        <div
            className='edit_container'
        >  <div className="image-uploader-container">
                {images.length > 0 && (
                    <div className="main-image-wrapper">
                        <img src={images[0]} alt="Main" className="main-image" />
                        <button className="close-btn" onClick={() => removeImage(0)}>×</button>
                    </div>
                )}

                {images.slice(1).map((img, index) => (
                    <div key={index} className="thumb-wrapper">
                        <img src={img} alt={`Thumb ${index}`} className="thumbnail" />
                        <button className="close-btn-small" onClick={() => removeImage(index + 1)}>×</button>
                    </div>
                ))}

                {images.length < 6 &&
                    [...Array(6 - images.length)].map((_, index) => (
                        <label key={index} className="add-circle">
                            <span>+</span>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                            />
                        </label>
                    ))}
            </div>


            <div
                className='preview'
            >
                <p style={{}}>Preview profile</p>
            </div>
            <div
                className='bio'
            >
                <h2>Bio</h2>
                <p>Hey 😌I’m Mary 🥰🫶looking forward to meet new people it<br /> will be cool to hangout together</p>
            </div>
            <div
                className='interest'
            >
                <h2>Interest</h2>
                <div>
                    <span>Self Care</span>
                    <span>Gin Tonic</span>
                    <span>Sushi</span>
                    <span>Karoke</span>
                    <span>Netflix</span>
                </div>
            </div>
            <div className='info'>
                <h2>Basic info</h2>
                <div className='edit_flex'>
                    <div style={{ display: 'flex', columnGap: '5px', alignItems: 'center' }}>
                        <SquareFootIcon />
                        <p>155 cm</p>
                    </div>

                    <KeyboardArrowRightIcon />
                </div>
                <div style={{ display: 'flex', columnGap: '5px', alignItems: 'center', marginTop: '10px' }} >
                    < LocationOnIcon />
                    <p>Lives in Eti-Osa</p>
                </div>
            </div>
            <div style={{ margin: '0px auto', width: '93%', marginTop: "21px" }}>
                <div className='edit_flex'>
                    <div
                        className='flex11'
                    >
                        <p>Hide/Show Bio</p>
                    </div>
                    <IOSSwitch sx={{ m: 1 }} defaultChecked />
                </div>
                <div className='edit_flex'>
                    <div
                        className='flex11'
                    >
                        <p>Display Profile Photo</p>
                    </div>
                    <IOSSwitch sx={{ m: 1 }} defaultChecked />
                </div>
                <div className='edit_flex'>
                    <div
                        className='flex11'
                    >
                        <LocationSearchingIcon />
                        <p>Looking for</p>
                    </div>
                    <span>Relationship</span>
                </div>
                <div className='edit_flex'>
                    <div
                        className='flex11'
                    >
                        <TranslateIcon />
                        <p>Language</p>
                    </div>
                    <span>English</span>
                </div>
                <div className='edit_flex'>
                    <div
                        className='flex11'
                    >
                        <SchoolIcon />
                        <p>Education</p>
                    </div>
                    <span>Undergrad</span>
                </div>
                <div className='edit_flex'>
                    <div
                        className='flex11'
                    >
                        <LocalDrinkIcon />
                        <p>Drinking</p>
                    </div>
                    <span>Socially</span>
                </div>
                <div className='edit_flex'>
                    <div
                        className='flex11'
                    >
                        <VapingRoomsIcon />
                        <p>Smoking</p>
                    </div>
                    <span>Socially</span>
                </div>
                <div className='edit_flex'>
                    <div
                        className='flex11'
                    >
                        <ChurchIcon />
                        <p>Religion</p>
                    </div>
                    <span>Socially</span>
                </div>
                <div className='edit_flex'>
                    <div

                        className='flex11'
                    >
                        <FamilyRestroomIcon />
                        <p>Family</p>
                    </div>
                    <span>Socially</span>
                </div>
                <div className='edit_flex'>
                    <div
                        className='flex11'
                    >
                        < PetsIcon />
                        <p>Pets</p>
                    </div>
                    <span>Socially</span>
                </div>
                <div className='edit_flex'>
                    <div
                        className='flex11'
                    >
                        <Person2Icon />
                        <p>Personality type</p>
                    </div>
                    <span>Socially</span>
                </div>
                <div className='edit_flex'>
                    <div

                        className='flex11'
                    >
                        <NightsStayIcon />
                        <p>Zodiac Sign</p>
                    </div>
                    <span>Socially</span>
                </div>
            </div>
            <div className='instagram'>
                <h2>Instagram</h2>
                <p>Let your potential crush see your recent instagram posts on your profile</p>
                <button>
                    Link Instagram
                </button>

            </div>
        </div>
    )
}


const IOSSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'black',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0 : 0,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));