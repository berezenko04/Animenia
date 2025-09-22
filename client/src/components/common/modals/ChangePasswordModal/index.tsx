// components
import CustomModal from "@/components/common/CustomModal";
import ChangePasswordForm from "@/components/common/Forms/profile/ChangePasswordForm";

// types
import type { ModalProps } from "@/types/base.types";

const ChangePasswordModal: React.FC<ModalProps> = ({ isOpened, handleClose }) => {
  return (
    <CustomModal open={isOpened} onClose={handleClose} title="Change Password" maxWidth={600}>
      <ChangePasswordForm onSuccess={handleClose} />
    </CustomModal>
  );
};

export default ChangePasswordModal;
