import { Box, Fade, IconButton, Modal, Stack, Typography, type ModalProps } from "@mui/material";

// icons
import { Close } from "@mui/icons-material";

type TCustomModalProps = ModalProps & {
  children: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth: number;
  title: string;
};

const CustomModal: React.FC<TCustomModalProps> = ({ title, maxWidth, footer, children, ...props }) => {
  return (
    <Modal {...props}>
      <Fade in={props.open}>
        <Box
          sx={{
            maxWidth,
            width: "100%",
            maxHeight: { xs: "100vh", sm: "90vh" },
            height: { xs: "100%", sm: "auto" },
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: { xs: 0, sm: 2 },
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            overflow: "hidden",
            padding: 1.5,
          }}
        >
          <Stack
            sx={{
              alignItems: "center",
              flexDirection: "row",
              flexShrink: 0,
              justifyContent: "space-between",
              overflow: "visible",
              px: 1,
              pt: 1,
            }}
          >
            <Typography variant="h2">{title}</Typography>
            <IconButton size="small" onClick={() => props.onClose?.({}, "backdropClick")}>
              <Close />
            </IconButton>
          </Stack>
          <Box
            sx={{
              overflow: "visible",
              flexGrow: 1,
              overflowY: "auto",
              minHeight: 0,
              p: 1,
            }}
          >
            {children}
          </Box>
          {footer && <Box>{footer}</Box>}
        </Box>
      </Fade>
    </Modal>
  );
};

export default CustomModal;
