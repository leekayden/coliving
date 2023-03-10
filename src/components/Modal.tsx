import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import PropertyModal from "./PropertyModal";
import PropertyInfo from "./PropertyInfo";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

interface ModalProps {
  id: number;
  isBookNow: boolean;
  modalTitle?: string;
  modalTxt?: string;
}

export default function Modal({ id, isBookNow, modalTitle, modalTxt }: ModalProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {isBookNow ? (
        <Button
          onClick={handleClickOpen}
          size="large"
          variant="contained"
          disableElevation
        >
          Enquire
        </Button>
      ) : (
        // <PropertyModal title={modalTitle!} />
        <Button variant="contained" onClick={handleClickOpen}>
          Open dialog
        </Button>
      )}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {isBookNow
            ? "Enquiry Info" + (modalTitle ? " (" + modalTitle + ")" : null)
            : null}
        </BootstrapDialogTitle>
        <DialogContent dividers sx={{ minWidth: 500 }}>
          <Typography gutterBottom>{modalTxt}</Typography>
          <PropertyInfo identifier={id} />
        </DialogContent>
        <DialogActions>
          <PropertyModal title={modalTitle!} />
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
