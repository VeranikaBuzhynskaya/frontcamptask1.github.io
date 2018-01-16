import {ACTION_TYPES} from './actionTypes'
import service from '../serviceCommand/CommandFactory'
import ActionService from "./actionsService";


export const checkedSource = name => ({
    type: ACTION_TYPES.SELECT_SOURCE,
    sourceName: name,
});
