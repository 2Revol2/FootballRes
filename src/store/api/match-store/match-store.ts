import { makeAutoObservable } from "mobx";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { getResultMatches, getTodayMatches } from "../../../shared/api/match/api";

class MatchStore {
  constructor() {
    makeAutoObservable(this);
  }
  todayMatchData?: IPromiseBasedObservable<any>;
  resultMatchData?: IPromiseBasedObservable<any>;
  getTodayMatchAction = async () => {
    try {
      this.todayMatchData = fromPromise(getTodayMatches());
    } catch (error) {
      console.log(error);
    }
  };

  getResultMatchAction = async (dateTo: string, dateFrom: string) => {
    try {
      this.resultMatchData = fromPromise(getResultMatches(dateFrom, dateTo))
    } catch (error) {
      console.log(error);
    }
  };
}

export const matchStore = new MatchStore();
