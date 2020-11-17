

import { OPEN_ALERT} from '../actions/alert_actions'


export default (state, action) => {
    switch (action.type) {
        case OPEN_ALERT:
            return action.message
            break;
    
        default:
            return null
            break;
    }
}