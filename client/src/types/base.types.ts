export type Pagination = {
  page?: number;
  limit?: number;
};

export type ModalProps = {
  isOpened: boolean;
  handleClose: () => void;
};

export type BaseResponseData = {
  message: string;
};
