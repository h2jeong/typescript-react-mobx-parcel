import { observable, action } from "mobx";

export default class ItemStore {
  @observable title: string = "";
  @observable isChecked: boolean = false;
  id: number = 0;
  content: string = "";
  createdAt: string = "";
  updatedAt: string = "";

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.isChecked = true; // test - defaultValue : false
    this.createdAt = new Date() + "";
    this.updatedAt = new Date() + "";
  }

  @action toggleCheck = () => {
    this.isChecked = !this.isChecked;
  };
}
