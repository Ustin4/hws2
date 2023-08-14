const initState = {
    isLoading: false,
}

type initStateType ={
    isLoading:boolean
}
type ActionType = LoadingActionType

export const loadingReducer = (state = initState, action:ActionType ):initStateType => { // fix any
    switch (action.type) {
        case "CHANGE_LOADING":{
            return {
                ...state,
                isLoading:action.isLoading
            }
        }
        // пишет студент  // need to fix

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
}as const)
