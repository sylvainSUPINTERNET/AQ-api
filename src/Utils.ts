'use strict' 

export default class Utils {

    constructor(){}


    public delayResolver(resolve:any, data:any, time_ms:number){
        setTimeout(() => {
            resolve(data);
          }, time_ms);
    }

    public delayRejected(reject:any,data:any,time_ms:number){
        setTimeout(() => {
            reject(data);
          }, time_ms);
    }
}