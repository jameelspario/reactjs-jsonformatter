import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const DynamicTabs = ({onTabChange, remove }) => {
    const [tabs, setTabs] = useState([{ label: 'Tab 1', content: 'Content for Tab 1' }]);
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (onTabChange) {
          onTabChange(value);
        }
      }, [onTabChange, value]);
    

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const addTab = () => {
        const newTabIndex = tabs.length + 1;
        const newTab = { label: `Tab ${newTabIndex}`, content: `Content for Tab ${newTabIndex}` };
        setTabs([...tabs, newTab]);
        setValue(tabs.length);
    };

    const removeTab = (index) => {
        const updatedTabs = tabs.filter((_, i) => i !== index);
        setTabs(updatedTabs);
        setValue(Math.min(value, updatedTabs.length - 1));
        remove(index);
    };

    return (
        <div>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                TabIndicatorProps={{ style: { display: 'none' } }}
            >
                {tabs.map((tab, index) => (
                    <Tab key={index} label={
                        <div className='flex items-center'>
                            <span className='mr-2'>{tab.label}</span>
                            {value === index && (
                                <IconButton size="small" onClick={() => removeTab(index)} className='text-white'>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            )}
                        </div>
                    }
                        className={`${value === index ? 'bg-blue-800 text-white' : 'bg-blue-500 hover:bg-blue-700 text-white'
                            } mr-2 px-4 py-2 rounded-full`}

                    />
                ))}
                <IconButton onClick={addTab}>
                    <AddIcon />
                </IconButton>
            </Tabs>
            {/* <Box>
                {tabs.map((tab, index) => (
                    <Typography key={index} hidden={value !== index}>
                        {tab.content}
                    </Typography>
                ))}
            </Box> */}
        </div>
    );
};

export default DynamicTabs;
