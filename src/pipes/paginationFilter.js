import {store} from "../index.js";
import {countItem} from "../actions";

export const paginationPipe = (state,args) => {
    if (!args || !args.perPage || !args.currentPage ) {
       // console.log("state" + JSON.stringify(state));
        return state;
    }
    const location = (args.perPage * (args.currentPage - 1)) || 0 ;
    return state.slice(location, location + args.perPage);
};
