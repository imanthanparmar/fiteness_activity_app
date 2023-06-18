import React, { PropsWithChildren } from "react";
import { Modal } from "react-bootstrap";
import { CrossIcon } from "shared/components/icons/icons";
import Button from "shared/form/button";

export interface IModalProps extends PropsWithChildren {
  show: boolean;
  handleClose: () => void | undefined;
  className?: string;
  modalTitle?: string;
  modalTitle2?: string | JSX.Element;
  modalTitle3?: string | JSX.Element;
  dataTestId?: string;
  footer?: JSX.Element | boolean;
  loading?: boolean;
}

const CustomModal: React.FC<IModalProps> = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      className={`${props.className || ""} fadeIn`}
    >
      {props.modalTitle && (
        <Modal.Header closeButton>
          <Modal.Title>
            &nbsp;&nbsp;{props.modalTitle2}
            {props.modalTitle3}
          </Modal.Title>
        </Modal.Header>
      )}
      <div className="modal-cross--icon cursor--pointer" onClick={props.handleClose}>
        <CrossIcon />
      </div>

      <Modal.Body>{props.children}</Modal.Body>
      {!!props.footer && <Modal.Footer>{props.footer}</Modal.Footer>}
    </Modal>
  );
};

export default CustomModal;
