import React, {useState, useEffect} from "react";

import { DataGrid, GridColDef, } from '@mui/x-data-grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


import { a11yProps, Footer, Nav, TabPanel,  } from "../components";
import "../assets/css/dashboard.scss";


const columns: GridColDef[] = [
    // { field: 'subject', headerName: 'SUBJECT', width: 200 },
    // { field: 'state_code', headerName: 'STATE CODE', width: 150 },
    // { field: 'date', headerName: 'DATE', width: 120 },
    // { field: 'full_name', headerName: 'REPORTER', width: 210 },
    // { field: 'email', headerName: 'EMAIL ADDRESS', width: 210 },
    // { field: 'report', headerName: 'LINK TO REPORT', width: 200 },
    // { field: 'actions', headerName: 'ACTIONS', width: 112 },

    { field: 'subject', headerName: 'SUBJECT', width: 200 },
    { field: 'state_code', headerName: 'STATE CODE', width: 150 },
    { field: 'date', headerName: 'DATE', width: 120 },
    { field: 'full_name', headerName: 'REPORTER', width: 210 },
    { field: 'email', headerName: 'EMAIL ADDRESS', width: 210 },
    { field: 'report', headerName: 'LINK TO REPORT', width: 200 },
    { field: 'actions', headerName: 'ACTIONS', width: 112 },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];


export const Dashboard = () => {    
    useEffect(() => {
        try{
            fetch('https://e-report.herokuapp.com/api/e-reports')
            .then((res: any) => res.json())
            .then(data => setReports(data))
            .catch(err => console.log(err))
        }catch(err){
            console.error(err)
        }
    }, [])


    const [reports, setReports] = useState([]);
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
      };

    return(
        <>
            <header>
                <Nav navlinks={false} />
            </header>
            <main>
                <section className="jumbotron">
                    <h1>Admin Dashboard</h1>
                </section>
                <section>
                    <div className="filter-bar">
                        <h2>Reports</h2>
                    </div>
                    <div style={{ height: 400, width: '90%', margin: '0 auto' }}>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '95%', margin: '0 auto' }}>
                                <Tabs value={tabValue} onChange={handleTabChange} aria-label="basic tabs example">
                                <Tab label="All" {...a11yProps(0)} />
                                <Tab label="Published" {...a11yProps(1)} />
                                <Tab label="Resolved" {...a11yProps(2)} />          
                                <Tab label="Deleted" {...a11yProps(3)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={tabValue} index={0}>
                                <div style={{ height: 400, width: '100%'}}>
                                    <DataGrid
                                        rows={reports}
                                        columns={columns}
                                        pageSize={5}
                                        rowsPerPageOptions={[5]}
                                        checkboxSelection
                                        getRowId={(row: any) =>  row.state_code + row.date + row.link_to_report}
                                    />
                                </div>
                            </TabPanel>
                            <TabPanel value={tabValue} index={1}>
                                {"published"}
                            </TabPanel>
                            <TabPanel value={tabValue} index={2}>
                                {"resolved"}
                            </TabPanel>
                            <TabPanel value={tabValue} index={3}>
                                {"deleted"}
                            </TabPanel>
                        </Box>
                    </div>
                    {/* <div style={{ height: 400, width: '90%', margin: '0 auto' }}>
                        <DataGrid
                            rows={reports}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            getRowId={(row: any) =>  row.state_code + row.date + row.link_to_report}
                        />
                    </div> */}
                    {/* <ul>
                    {reports && reports.map((report:any, key:number) => (
                        <li key={report.id}>                            
                            <div>{report.subject}</div>
                            <div>{report.full_name}</div>                            
                            <div>{report.state_code}</div>
                            <div>{report.email}</div>
                            <div>{report.phone_number}</div>
                            <div>{report.report}</div>
                        </li>
                    ))}
                    </ul> */}
                </section>
            </main>
            <Footer />
        </>
    )
}









