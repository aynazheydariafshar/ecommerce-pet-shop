import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import  PropTypes  from "prop-types";
const ModalField = ({
    isOpen ,
    handleClose,
    title,
    subtitle,
    text
}) => {
    return <>
        <Dialog
            maxWidth='md'
            sx={{textAlign : 'right' , padding : '30px'}}
            open = {isOpen}
            onClose={handleClose}
            aria-labelledby = 'max-width-dialog-title'
            color = 'txt.error'
        >
            <DialogTitle color='red' id='max-width-dialog-title' sx={{fontWeight : 'bold'}}>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{subtitle}</DialogContentText>
                <DialogContentText>{text}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button sx={{color : "red"}} onClick={handleClose}>
                    خروج
                </Button>
            </DialogActions>
        </Dialog>
    </>
}
export default ModalField;

ModalField.propTypes = {
    isOpen : PropTypes.bool.isRequired,
    handleClose : PropTypes.func.isRequired,
    title : PropTypes.string.isRequired,
    subtitle : PropTypes.string,
    childeren : PropTypes.element.isRequired,
}
