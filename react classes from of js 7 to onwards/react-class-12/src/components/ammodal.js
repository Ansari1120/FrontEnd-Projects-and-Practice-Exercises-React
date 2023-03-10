import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 3,
  p: 4,
};

export default function SMModal(props) {
  const { open, close, modalTitle, innerContent, modalFooter } = props;
  const handleClose = () => {
    close(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalTitle}
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Typography>
          <Box>{innerContent}</Box>
          <Box>{modalFooter}</Box>
        </Box>
      </Modal>
    </div>
  );
}
