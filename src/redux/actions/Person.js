import {ADD_PERSON} from "../constants";

export function createAddPersonAction(data) {
    return {type: ADD_PERSON, data: data};
}