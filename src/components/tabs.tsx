import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
export const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}


export const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

// export const BasicTabs = (props: JSX.IntrinsicElements) => {
//   const {all, published, resolved, deleted} = props;

//   const [value, setValue] = useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="All" {...a11yProps(0)} />
//           <Tab label="Published" {...a11yProps(1)} />
//           <Tab label="Resolved" {...a11yProps(2)} />          
//           <Tab label="Deleted" {...a11yProps(3)} />
//         </Tabs>
//       </Box>
//       <TabPanel value={value} index={0}>
//         {"all"}
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         {"published"}
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         {"resolved"}
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//         {"deleted"}
//       </TabPanel>
//     </Box>
//   );
// }
