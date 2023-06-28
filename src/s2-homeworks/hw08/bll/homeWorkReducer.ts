import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const {payload} = action
            return  [...state].sort((a, b) => {
                if (payload === 'up' ) {
                    return a.name > b.name ? 1 : -1
                } else {
                    return a.name < b.name ? 1 : -1
                }
            })

            // by name
            // sort() создаёт новый массив? или нужно в ручную?...
            //return state // need to fix
        }
        case 'check': {
            const {payload} = action
            return state.filter((f) => f.age >= payload )
            // filter() создаёт новый массив? или нужно в ручную?...
                //return state // need to fix
        }
        default:
            return state
    }
}
