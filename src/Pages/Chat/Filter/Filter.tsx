import React, { useState } from 'react'
import './Filter.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { styled } from '@mui/system';
import { useNavigate } from "react-router-dom";
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
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
import Switch, { SwitchProps } from '@mui/material/Switch';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';
import SliderOne from './SliderOne';
import TuneIcon from '@mui/icons-material/Tune';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import SliderTwo from './SLiderTwo';
import CheckIcon from '@mui/icons-material/Check';
import PersonalTypeModal from './FilterModal/PersonalTypeModal';
import FamilyModal from './FilterModal/FamilyModal';
import PetsModal from './FilterModal/PetsModal';
import RegionModal from './FilterModal/RegionModal';
import SmokingModal from './FilterModal/SmokingModal';
import DrinkingModal from './FilterModal/DrinkingModal';
import LookingModal from './FilterModal/LookingModal';
import EducationModal from './FilterModal/EducationModal';
import Language from './FilterModal/Language';
import ZodiacModal from './FilterModal/ZodiacModal';

export default function Filter() {
    const [activeTab, setActiveTab] = useState('men');
    const [activeModal, setActiveModal] = useState('');

    const handleActiveModal = (modal: string) => {
        setActiveModal(modal)
    }

    const navigate = useNavigate();

    return (
        <div>
            {activeModal === 'Looking' && <LookingModal/>}
            {activeModal === 'Family' && <FamilyModal/>}
            {activeModal === 'Smoking' && <SmokingModal/>}
            {activeModal === 'Pets' && <PetsModal/>}
            {activeModal === 'Zodiac' && <ZodiacModal/>}
            {activeModal === 'Personality' && <PersonalTypeModal/>}
            {activeModal === 'Religion' && <RegionModal/>}
            {activeModal === 'Drinking' && <DrinkingModal/>}
            {activeModal === 'Language' && <Language />}
            {activeModal === 'Education' && <EducationModal/>}

            <div className='filter_header1'>
                <div className='filter_header_content1'>
                    <div className='logo'>
                        <div style={{ background: "#BC72FB", padding: '6px 8px', borderRadius: '50%', cursor: 'pointer' }}
                            onClick={() => navigate('/chat/filter')}
                        >
                            <TuneIcon style={{ color: "white", fontSize: '15px' }} />
                        </div>

                        <div style={{ background: "#4A4A4A", padding: '6px 8px', borderRadius: '50%', cursor: 'pointer' }}
                        onClick={() => navigate('/chat/short')}>
                            <YoutubeSearchedForIcon style={{ color: "white", fontSize: '15px' }} />

                        </div>

                        <div style={{ background: "#4A4A4A", padding: '6px 8px', borderRadius: '50%', cursor: 'pointer' }}
                            onClick={() => navigate('/chat')}
                        >
                            <AutoAwesomeIcon style={{ color: "white", fontSize: '15px' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='filter_header'>
                <div className='filter_header_content'>
                    <div >
                        <div style={{
                            background: '#D0BCFF',
                            width: '30px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '30px',
                            paddingLeft: '3px',
                            borderRadius: '49%'
                        }}>
                            < ArrowBackIosIcon
                                style={{ fontSize: '15px', color: '#6750A4' }}
                            />
                        </div >

                    </div>
                    <div>
                        <p>Filter</p>
                    </div>
                </div>
            </div>
       
            <div className='filter_content'>
                <div className='filter_range_container'>
                    <div className='filter_range_content'>
                        <span>I'm interested in</span>
                        <div className="tabs">
                            <div
                                className={`tab ${activeTab === 'men' ? 'active' : ''}`}
                                onClick={() => setActiveTab('men')}
                            >
                                {activeTab === 'men' && <CheckIcon style={{ fontSize: '16px' }} className='icon' />} Men
                            </div>
                            <div
                                className={`tab ${activeTab === 'women' ? 'active' : ''}`}
                                onClick={() => setActiveTab('women')}
                            >
                                {activeTab === 'women' && <CheckIcon className="icon" style={{ fontSize: '16px' }} />} Women
                            </div>
                            <div
                                className={`tab ${activeTab === 'other' ? 'active' : ''}`}
                                onClick={() => setActiveTab('other')}
                            >
                                {activeTab === 'other' && <CheckIcon className="icon" style={{ fontSize: '16px' }} />} Other
                            </div>
                        </div>
                        <div style={{ marginTop: '33px' }}>

                            {activeTab === 'men' && <div>
                                <SliderTwo />
                                <SliderOne />
                            </div>}

                            {activeTab === 'women' && <div>
                                <SliderTwo />
                                <SliderOne />
                            </div>}

                            {activeTab === 'other' && <div>
                                <SliderTwo />
                                <SliderOne />
                            </div>}
                        </div>
                    </div>
                </div>

                <div className='filter_search'>
                    <p>Interest</p>

                    <div className='filter_search_input'>
                        < SearchIcon />
                        <input style={{ width: '100%' }} placeholder='Search Interest' />
                    </div>
                </div>
                <div className='fiter_options'>
                    <div className='filter_flex'>
                        <div
                            className=''
                        >
                            <p>Has Bio</p>
                        </div>
                        <IOSSwitch sx={{ m: 1 }} defaultChecked />
                    </div>

                    <div className='filter_flex'>
                        <div
                        >
                            <p>Has Bio</p>
                        </div>
                        <IOSSwitch sx={{ m: 1 }} defaultChecked />
                    </div>

                    <div className='filter_flex3'  >
                        <div
                            className='filter_flex2'
                        >
                            <LocationSearchingIcon />
                            <p>Looking for</p>
                        </div>
                        <ArrowForwardIosIcon style={{ fontSize: '12px' }} onClick={() => handleActiveModal('Looking')}/>
                    </div>

                    <div className='filter_flex3'>
                        <div
                            className='filter_flex2'
                        >
                            <TranslateIcon />
                            <p>Language</p>
                        </div>
                        <ArrowForwardIosIcon style={{ fontSize: '12px' }} onClick={() => handleActiveModal('Language')}/>
                    </div>

                    <div className='filter_flex3'>
                        <div
                            className='filter_flex2'
                        >
                            <SchoolIcon />
                            <p>Education</p>
                        </div>
                        <ArrowForwardIosIcon style={{ fontSize: '12px' }} 
                        onClick={() => handleActiveModal('Education')} />
                    </div>

                    <div className='filter_flex3'>
                        <div
                            className='filter_flex2'
                        >
                            <LocalDrinkIcon />
                            <p>Drinking</p>
                        </div>
                        <ArrowForwardIosIcon style={{ fontSize: '12px' }} 
                        onClick={() => handleActiveModal('Drinking')}
                        
                        />
                    </div>

                    <div className='filter_flex3'>
                        <div
                            className='filter_flex2'
                        >
                            <VapingRoomsIcon />
                            <p>Smoking</p>
                        </div>
                        <ArrowForwardIosIcon style={{ fontSize: '12px' }} 
                         onClick={() => handleActiveModal('Smoking')}
                        />
                    </div>

                    <div className='filter_flex3'>
                        <div
                            className='filter_flex2'
                        >
                            <ChurchIcon />
                            <p>Religion</p>
                        </div>
                        <ArrowForwardIosIcon style={{ fontSize: '12px' }} 
                        onClick={() => handleActiveModal('Religion')}
                        />
                    </div>

                    <div className='filter_flex3'>
                        <div

                            className='filter_flex2'
                        >
                            <FamilyRestroomIcon />
                            <p>Family</p>
                        </div>
                        <ArrowForwardIosIcon style={{ fontSize: '12px' }} 
                        onClick={() => handleActiveModal('Family')}
                        />
                    </div>
                    <div className='filter_flex3'>
                        <div
                            className='filter_flex2'
                        >
                            < PetsIcon />
                            <p>Pets</p>
                        </div>
                        <ArrowForwardIosIcon style={{ fontSize: '12px' }} 
                        onClick={() => handleActiveModal('Pets')}
                        />
                    </div>
                    <div className='filter_flex3'>
                        <div
                            className='filter_flex2'
                        >
                            <Person2Icon />
                            <p>Personality type</p>
                        </div>
                        <ArrowForwardIosIcon style={{ fontSize: '12px' }} 
                                 onClick={() => handleActiveModal('Personality')}
                        />
                    </div>
                    <div className='filter_flex1' >
                        <div
                            className='filter_flex2'
                        >
                            <NightsStayIcon />
                            <p>Zodiac Sign</p>
                        </div>
                        <ArrowForwardIosIcon style={{ fontSize: '12px' }}
                         onClick={() => handleActiveModal('Zodiac')}
                        />
                    </div>
                </div>
                <div className='filter_button'>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}



const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const Tab = styled(BaseTab)`
    font-family: 'IBM Plex Sans', sans-serif;
    color: #fff;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
    background-color: transparent;
    width: 100%;
padding:10px 0px;
    border: none;
    border-radius: 7px;
    display: flex;
    justify-content: center;
  
    &:hover {
      background-color: ${blue[400]};
    }
  
    &:focus {
      color: #fff;
      outline: 3px solid ${blue[200]};
    }
  
    &.${tabClasses.selected} {
      background-color: #fff;
      color: ${blue[600]};
    }
  
    &.${buttonClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

const TabPanel = styled(BaseTabPanel)(
    ({ theme }) => `

    `,
);

const TabsList = styled(BaseTabsList)(
    ({ theme }) => `
    background-color: ${blue[500]};
    border-radius: 12px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
    `,
);

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
                    ? 'black'
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
        opacity: 1
    },
}));