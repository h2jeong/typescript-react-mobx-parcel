import React, { useState } from "react";
import { useStore } from "../helpers/useStore";
import { onEnterPress } from "../helpers/useEnter";

// 모달 팝업으로 구현하기
export const Maker = () => {
  const [newTitle, setTitle] = useState("");
  const [newContent, setContent] = useState("");
  const store = useStore();

  const createItem = () => {
    store.addItem(newTitle, newContent);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <label>용도</label>
      <input
        type="text"
        value={newTitle}
        onKeyDown={onEnterPress(createItem)}
        onChange={e => setTitle(e.target.value)}
      />
      <label>내용</label>
      <input
        type="text"
        value={newContent}
        onKeyDown={onEnterPress(createItem)}
        onChange={e => setContent(e.target.value)}
      />
      <button onClick={createItem}>저장하기</button>
    </div>
  );
};
