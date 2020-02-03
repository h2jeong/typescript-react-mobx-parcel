import { observable, action, computed } from "mobx";
import ItemStore from "./item";
import axios from "axios";

export default class ListStore {
  @observable list: ItemStore[] = [];
  // @observable term: string = "";
  // @observable itemProps: string = "";

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

  // NOT YET

  @action checkAll = () => {
    // 전체 체크 처리하기
  };

  @action removeItems = () => {
    // 체크된 아이템 삭제하기
    // return this.list.filter(item => item.isChecked === false);
  };

  /* Search 만들기 */
  @action searchTerm = (term: string, name: string) => {
    return this.list.filter(item => {
      console.log(term);
      let props = (item as any)[name];
      return props.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };
}
