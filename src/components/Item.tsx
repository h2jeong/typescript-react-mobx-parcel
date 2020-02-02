import React from "react";
import { useStore } from "../helpers/useStore";
import itemClass from "../stores/item";
import { onEnterPress } from "../helpers/useEnter";

interface Props {
  item: itemClass;
}

export const Item = ({ item }: Props) => {
  const store = useStore();

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          onChange={item.toggleCheck}
          defaultChecked={item.isChecked}
        />
      </td>
      <td>{item.createdAt}</td>
      <td>{item.updatedAt}</td>
      <td>{item.title}</td>
      <td>{item.content}</td>
    </tr>
  );
};
