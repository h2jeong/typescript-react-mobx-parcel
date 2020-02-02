import { observable, action, computed } from "mobx";
import ItemStore from "./item";
import axios from "axios";

export default class ListStore {
  @observable list: ItemStore[] = [];

  constructor() {
    this.fetchList();
  }

  @action setList = (list: []) => {
    this.list = [...list];
  };

  @action async fetchList() {
    return await axios
      .get("https://koreanjson.com/posts")
      .then(response => {
        // console.log("axios::", response.data);
        this.setList(response.data);
      })
      .catch(error => console.log(error));
  }

  @action addItem = (title: string, content: string) => {
    this.list.unshift(new ItemStore(title, content));
  };

  @action checkAll = () => {};

  @action removeItems = () => {
    this.list.filter(item => item.isChecked === false);
  };

  /* Search store 만들기 */
  @action searchTerm = (term: string, name: string) => {
    return this.list.filter(
      item => item[name].toLowerCase().indexOf(term.toLowerCase()) > -1
    );
  };
}
