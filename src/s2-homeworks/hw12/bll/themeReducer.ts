const initState: StateType = {
    themeId: 1,
}

export type SetThemeIdType = {
    type: 'SET_THEME_ID'
    id: number
}

export type StateType = {
    themeId: number
}
type ActionsType = SetThemeIdType

export const themeReducer = (state: StateType = initState, action: ActionsType): StateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {
                ...state, // создаем копию объекта состояния
                themeId: action.id // обновляем значение поля themeId
            }
        }// дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number): SetThemeIdType => ({type: 'SET_THEME_ID', id}) // fix any
