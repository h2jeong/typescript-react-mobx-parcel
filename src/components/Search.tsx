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
  const searchTerm = () => {
    store.searchTerm(term, name);
    setTerm("");
    setName("");
  };

  return (
    <tr>
      <th></th>
      <th>
        <label>등록일</label>
        <br />
        <input
          type="text"
          name="createAt"
          onChange={handleChange}
          onKeyDown={onEnterPress(searchTerm)}
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
          onKeyDown={onEnterPress(searchTerm)}
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
          onKeyDown={onEnterPress(searchTerm)}
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
          onKeyDown={onEnterPress(searchTerm)}
          placeholder="Search"
        />
      </th>
    </tr>
  );
};
