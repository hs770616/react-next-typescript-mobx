import { makeAutoObservable } from "mobx";

class SearchStore {
  search: string = "initVal";
  num: number = 0;

  // observable, action, computed 등을 알아서 추론해줌.
  constructor() {
    makeAutoObservable(this);
  }

  updateSearch(val: string): void {
    this.search = val;
    console.log("updated! : ", this.search);
  }

  increaseNum(): void {
    this.num++;
    console.log("updated! : ", this.num);
  }

  get computedSearch(): string {
    return "hello " + this.search;
  }

  get computedDoubleNum(): number {
    return 2 * this.num;
  }
}

export default new SearchStore();
