import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import './SelfBoost.css';
import SelfBoost from './SelfBoost';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MoneyIcon from '@mui/icons-material/Money';

export default function SelfBoostIndex() {
   
    return (
        <div className='self_boost_container'>
                  <Tabs defaultValue={0}>
        <TabsList>
          <Tab value={0}>
            <CreditCardIcon/>
            Credit Card</Tab>
          <Tab value={1}>
          <MoneyIcon/>
            PayPal</Tab>
        </TabsList>
        <TabPanel value={0}>
           <SelfBoost/>
           </TabPanel>
        <TabPanel value={1}>   
        <SelfBoost/>
        </TabPanel>
      </Tabs>
        </div>
  
    );
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
  color: black;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;

  border: none;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center; 
    gap:10px;
//   &:hover {
//     background-color: ${blue[400]};
//   }

  &:focus {
    color: #767676 !important;
    outline: none;
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: #767676 !important;
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
  min-width: 400px;
  background-color: #DCDCDC;
  border-radius: 20px;
  margin-bottom: 16px;
  border:1px solid #DCDCDC;
  display: flex;
//   align-items: center;
//   justify-content: center;
  align-content: space-between;

  `,
);
