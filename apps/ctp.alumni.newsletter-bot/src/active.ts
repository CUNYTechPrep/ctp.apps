import * as NEWS_CONFIG from '@cunytechprep/ctp.alumni.newsletter';
import * as TOTD_CONFIG from '@cunytechprep/ctp.alumni.topic-of-the-day';

let activeBotWorker : any= process.env.APP;

switch(activeBotWorker){
    case "NEWS": {
        activeBotWorker = NEWS_CONFIG
        break
    }
    case "TOTD": {
        activeBotWorker = TOTD_CONFIG 
        break
    }
}

export default activeBotWorker

