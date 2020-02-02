import React, { useState } from "react";
import { useStore } from "../helpers/useStore";
import { onEnterPress } from "../helpers/useEnter";

export const Remover = () => {
  const store = useStore();

  // 이벤트 구현하기
  const checkAll = () => {
    store.checkAll();
  };
  const removeItem = () => {
    store.removeItems();
  };

  return (
    <div>
      <input type="checkbox" onClick={checkAll} />
      <button onKeyDown={onEnterPress(removeItem)}>삭제하기</button>
    </div>
  );
};
