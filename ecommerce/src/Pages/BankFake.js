import { Button } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import Bank from 'components/Bank';
import { useNavigate } from 'react-router';
import React from 'react';
import Cart from 'components/Cart';
import { useDispatch } from 'react-redux';
import { clearAllProduct } from 'redux/cartSlice';
import { DataContext } from 'Context/DataContext';
import { toast } from 'react-toastify';


const BankFake = () => {
    const navigate = useNavigate();

    //context dat
    const productContext = React.useContext(DataContext)

    //get token
    const token = localStorage.getItem("token");

    //get state from redux
    const dispatch = useDispatch();

    //check for api
    const [loadingtwo, setLoadingtwo] = React.useState(true);
    const [errortwo, setErrortwo] = React.useState(null);

    //when action is sucessful
    const handleSucessAction =() => {
        const orders = JSON.parse(localStorage.getItem('order'));
        setErrortwo(null);
        setLoadingtwo(false);
        axios.post(`http://localhost:3002/orders?token=${token}`, orders)
            .then((response) => {
                setLoadingtwo(true);
                productContext.getOrders();
            })
            .catch((error) => {
                setLoadingtwo(true);
                setErrortwo("دوباره تلاش کنید");
            });
            setTimeout(() => {
                navigate('/successful')
            }, 500);
            dispatch(clearAllProduct())
            toast.success('خرید شما با موفقیت ثبت شد')
    }

    //when action is unsucessful
    const handleUnSucessAction =() => {
        localStorage.removeItem('order');
        setTimeout(() => {
            navigate('/unsuccessful')
        }, 500);
    }
    
    return (
        <div className='bank'>
            <Bank />
            <Box sx={{display : 'flex' , justifyContent : 'center'}}>
                <Button
                    color="success"
                    variant="contained"
                    sx={{marginX : '50px' , paddingX : '40px' , fontSize:'15px'}}
                    onClick={handleSucessAction}
                >
                    پرداخت
                </Button>
                <Button
                    color="error"
                    variant="contained"
                    sx={{marginX : '50px' , paddingX : '40px' , fontSize:'15px'}}
                    onClick={handleUnSucessAction}
                >
                    انصراف  
                </Button>
            </Box>
		</div>
    )
}

export default BankFake;