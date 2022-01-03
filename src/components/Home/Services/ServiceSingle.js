import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import { GetContext } from '../../../context';
// import { FaHandsHelping } from 'react-icons/fa';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const useStyle = makeStyles({
    root: {
        transition: 'all .3s linear',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 0 15px rgba(0,0,0,.4)'
        }
    }
})
const ServiceSingle = ({ service }) => {
    const { root } = useStyle();
    const history = useHistory()
    const { title, fee, image, description } = service;
    const { setSelectedService } = GetContext()
    const selectServiceHandler = () => {
        setSelectedService(service)
        history.push('/order')
    }

    return (
        <Paper className={root}>
            <img src={image} alt="" width="100%" />
            <Progress percent={88} status="success"/>
            {/* <FaHandsHelping style={{ borderRadius:"50%", backgroundColor:"#34495E",marginBottom: "10px", fontSize: "30px",padding:"20px", border:"1px solid #ff00" }}></FaHandsHelping> */}
            <div style={{ padding: 25 }}>
        
                <Typography variant="h6">{title}</Typography>
                <div style={{ height: 3, width: 50, background: '#F2184F' }}></div>
                <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                        }}>

                <Typography variant="h4" color="secondary" style={{ fontWeight: 700, marginTop: 10 }}>${fee}</Typography>
                <Typography variant="h4" color="secondary" style={{ fontWeight: 500, marginTop: 10 }}><small style={{ background: '#202C45', color: '#fff' }}>Goal:</small> ${fee}</Typography>

                </Box>
                
                <Typography variant="body1" style={{ margin: '10px 0' }}>{description}</Typography>
                <Button onClick={selectServiceHandler} variant="contained" style={{ background: '#202C45', color: '#fff' }}>Get Service </Button>
            </div>
        </Paper >
    );
};

export default ServiceSingle;