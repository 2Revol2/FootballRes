import { baseInstance } from "../base";

export const getTodayMatches = async ()=>( await baseInstance.get('matches')).data