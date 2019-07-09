
export class Utility {

    constructor() { }

    public static totalSteps(x: any[]): number {
        return x.map(item => item.steps).reduce((prev, next) => prev + next);
    }

    public static dayOfWeekAsString(dayIndex) : string {
        return ["Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday","Sunday"][dayIndex];
      }

      public static findDayInTimestamp (timestamp) : number {
         let d = new Date(timestamp);
         return d.getDate();
      }
}