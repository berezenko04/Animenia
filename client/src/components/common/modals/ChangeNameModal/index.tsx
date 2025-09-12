// components
import CustomModal from "@/components/common/CustomModal";
import ChangeNameForm from "@/components/common/forms/ChangeNameForm";

// types
import type { ModalProps } from "@/types/base.types";

const ChangeNameModal: React.FC<ModalProps> = ({ isOpened, handleClose }) => {
  return (
    <CustomModal open={isOpened} onClose={handleClose} title="Update Name" maxWidth={600}>
      <ChangeNameForm onSuccess={handleClose} />
    </CustomModal>
  );
};

export default ChangeNameModal;
