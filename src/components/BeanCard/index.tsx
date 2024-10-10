import { FC, useState } from "react";
import { Bean } from "../../types";
import styles from "./styles.module.css";
import ModalBeans from "../ModalBeans";

type Props = {
  data: Bean;
};
export const BeanCard: FC<Props> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        onClick={openModal}
        className={styles.wrapper}
        style={{
          background: data.backgroundColor,
        }}
      >
        <img src={data.imageUrl} alt="" />
        <h3>{data.flavorName}</h3>
        <p>{data.description}</p>
      </div>
      {isModalOpen && (
        <ModalBeans
          data={data}
          closeModal={closeModal}
          isModalOpen={isModalOpen}
        />
      )}
    </>
  );
};
