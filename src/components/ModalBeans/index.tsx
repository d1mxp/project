import { FC } from "react";
import Modal from "../../features/Modal";
import { Bean } from "../../types";
import s from "./index.module.css";

type Props = {
  data: Bean;
  closeModal: () => void;
  isModalOpen: boolean;
};

const ModalBeans: FC<Props> = ({ data, closeModal, isModalOpen }) => {
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <img className={s.image} src={data.imageUrl} alt="" />
      <div className={s.container}>
        <h3>{data.flavorName}</h3>
        <p>{data.description}</p>
      </div>
    </Modal>
  );
};

export default ModalBeans;
