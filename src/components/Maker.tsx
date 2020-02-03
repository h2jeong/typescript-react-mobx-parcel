import React, { useState } from "react";
import { useStore } from "../helpers/useStore";
import { Register } from "./Register";

export const Maker = () => {
  const store = useStore();
  const [modal, setModal] = useState(false);

  // 이벤트 구현하기
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  // 체크 아이템 삭제하기
  // const removeItems = () => {
  //   store.removeItems();
  // };

  return (
    <div className="Maker">
      <button>삭제하기</button>
      <button onClick={openModal}>등록하기</button>
      <Register isOpen={modal} close={closeModal} />
    </div>
  );
};
