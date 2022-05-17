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
            fullWidth
            maxWidth='md'
            sx={{textAlign : 'right'}}
            open = {isOpen}
            onClose={handleClose}
            aria-labelledby = 'max-width-dialog-title'
        >
            <DialogTitle id='max-width-dialog-title'>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{subtitle}</DialogContentText>
                <DialogContentText>{text}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color='primary'>
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
