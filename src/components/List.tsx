import React from "react";
import { useObserver } from "mobx-react-lite";
import { useStore } from "../helpers/useStore";
import { Item } from "./Item";
import { Search } from "./Search";

export const List = () => {
  const store = useStore();

  return useObserver(() => (
    <div className="List">
      <table className="listTbl">
        <colgroup>
          <col width="5%" />
          <col width="23%" />
          <col width="23%" />
          <col width="23%" />
          <col width="" />
        </colgroup>
        <thead>
          <Search />
        </thead>
        <tbody>
          {store.list.map(item => (
            <Item key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  ));
};
