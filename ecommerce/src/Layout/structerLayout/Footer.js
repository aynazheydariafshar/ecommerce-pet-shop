import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

const FooterContainer = styled('div')({
    color: 'white',
    backgroundColor: 'black',
    paddingTop: 10,
    height: 100,
    position: 'absolute',
    bottom: 0,
    width: '100%',
});

const Footer = () => {
    return <FooterContainer>
            <Typography
                    noWrap
                    component="div"
                    sx={{textAlign : 'center' , fontSize : '15px'}}
                >
                فروشگاه ما را در شبکه‌های اجتماعی دنبال کنید  
                <Box sx={{mt : '10px'}}>
                    <InstagramIcon />
                    <FacebookRoundedIcon />
                </Box>
            </Typography>
        </FooterContainer>    

}

export default Footer;