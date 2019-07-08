
export class Utility {

    constructor() { }

    public static totalSteps(x: any[]): number {
        return x.map(item => item.steps).reduce((prev, next) => prev + next);
    }

}