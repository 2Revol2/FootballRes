import { makeAutoObservable } from "mobx";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { getTodayMatches } from "../../../shared/api/match/api";

class MatchStore {
  constructor() {
    makeAutoObservable(this);
  }
  todayMatchData?: IPromiseBasedObservable<any>;

  getTodayMatchAction = async () => {
    try {
      this.todayMatchData = fromPromise(getTodayMatches());
    } catch (error) {
      console.log(error);
    }
  };
}

export const matchStore = new MatchStore();
