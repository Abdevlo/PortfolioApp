import React, { useState } from 'react';
import { Grid, Typography, Button } from '@mui/material';

const PortfolioItem = ({ icon, title, content }) => {
    const [expanded, setExpanded] = useState(false);

    const handleToggleExpand = () => {
        setExpanded(!expanded);
    };

    const handleToggleCollapse = () => {
        setExpanded(false);
    };

    return (
        <Grid xs={12} md={6} sx={{ p: 3 }}>
            {icon}
            <Typography sx={{ fontSize: '20px', fontFamily: 'Unbounded, cursive !important' }}>{title}</Typography>
            <Typography sx={{ fontSize: '13px', color: 'grey', maxHeight: expanded ? 'none' : '60px', overflow: 'hidden', textOverflow: 'ellipsis', textAlign:'justify' }}>
                {content}
            </Typography>
            {expanded ? (
                <Button variant="text" color="primary" className='customCursor' sx={{color:'purple'}} onClick={handleToggleCollapse}>
                    Hide
                </Button>
            ) : (
                <Button variant="text" color="primary" className='customCursor' sx={{color:'purple'}} onClick={handleToggleExpand}>
                    Read More
                </Button>
            )}
        </Grid>
    );
};

export default PortfolioItem