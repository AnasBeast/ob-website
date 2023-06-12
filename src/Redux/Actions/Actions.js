import { ADDDESTINATION, SEARCHHOTELS } from "../Constants/Action_type";

export const searchHotels = (payload) => {
    return {
        type :SEARCHHOTELS ,
        payload
    }
}

export const addDestination = (payload) => {
    return {
        type : ADDDESTINATION,
        payload
    }
}