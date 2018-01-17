import { tassign } from 'tassign';
import { ITaskingState, TASKING_INITIAL_STATE, taskingReducer } from 'app/tasking/store';
import { IMessagingState, MESSAGING_INITIAL_STATE, messagingReducer } from 'app/messaging/store';
import { combineReducers } from 'redux';

export interface IAppState {
    tasking: ITaskingState;
    messaging: IMessagingState;
}

export const INITIAL_STATE: IAppState = {
    tasking: TASKING_INITIAL_STATE,
    messaging: MESSAGING_INITIAL_STATE,
}

export const rootReducer = combineReducers<IAppState>({
    tasking: taskingReducer,
    messaging: messagingReducer
});
