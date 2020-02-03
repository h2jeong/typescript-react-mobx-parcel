import React, { useState } from "react";
import { useStore } from "../helpers/useStore";
import { onEnterPress } from "../helpers/useEnter";

export const Search = () => {
  const store = useStore();
  const [term, setTerm] = useState("");
  const [name, setName] = useState("");
  const handleChange = e => {
    setTerm(e.target.value);
    setName(e.target.name);
    console.log(term, name);
  };
  // 검색 함수 만들기

  const checkAll = () => {
    store.checkAll();
  };
  return (
    <tr>
      <th>
        <input type="checkbox" onClick={checkAll} />
      </th>
      <th>
        <label>등록일</label>
        <br />
        <input
          type="text"
          name="createAt"
          onChange={handleChange}
          placeholder="Search"
        />
      </th>
      <th>
        <label>최근변경</label>
        <br />
        <input
          type="text"
          name="updatedAt"
          onChange={handleChange}
          placeholder="Search"
        />
      </th>
      <th>
        <label>발송타겟</label>
        <br />
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Search"
        />
      </th>
      <th>
        <label>내용</label>
        <br />
        <input
          type="text"
          name="content"
          onChange={handleChange}
          placeholder="Search"
        />
      </th>
    </tr>
  );
};
