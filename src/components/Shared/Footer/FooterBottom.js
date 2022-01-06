import { Typography } from '@material-ui/core';
import React from 'react';

const FooterBottom = () => {
    return (
        <div style={{ background: '#181818', textAlign: 'center', padding: '20px 0' }}>
            <Typography variant="caption">Copyright &copy; {new Date().getFullYear()} CherityTrust. All Rights Reserved. Developed by <a style={{ color: '#fff', textDecoration: 'none' }} href="https://zamanresume.netlify.app/" target="_blank" rel="noopener noreferrer">Zaman</a></Typography>
        </div>
    );
};

export default FooterBottom;