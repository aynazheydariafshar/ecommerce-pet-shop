import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import styled from '@emotion/styled';

const FooterContainer = styled('div')({
    color: 'white',
    backgroundColor: 'black',
    paddingTop: 10,
    height: 30,
    position: 'absolute',
    bottom: 0,
    width: '100%',
});

const Footer = () => {
    return <Box sx={{ flexGrow: 1 }}>
        <FooterContainer>
            <Typography
                    noWrap
                    component="div"
                    sx={{textAlign : 'center'}}
                >
                فروشگاه ما را در شبکه‌های اجتماعی دنبال کنید     
            </Typography>
            <Box>
                <IconButton>

                </IconButton>
            </Box>
        </FooterContainer>    
  </Box>;
}

export default Footer;