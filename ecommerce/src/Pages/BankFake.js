import { Button } from '@mui/material';
import { Box } from '@mui/system';
import Bank from 'components/Bank';


const BankFake = () => {
    return (
        <div className='bank'>
            <Bank />
            <Box sx={{display : 'flex' , justifyContent : 'center'}}>
                <Button
                    color="success"
                    variant="contained"
                    sx={{marginX : '50px' , paddingX : '40px' , fontSize:'15px'}}
                    // onClick={handleSucessAction}
                >
                    پرداخت
                </Button>
                <Button
                    color="error"
                    variant="contained"
                    sx={{marginX : '50px' , paddingX : '40px' , fontSize:'15px'}}
                    // onClick={handleUnSucessAction}
                >
                    انصراف  
                </Button>
            </Box>
		</div>
    )
}

export default BankFake;