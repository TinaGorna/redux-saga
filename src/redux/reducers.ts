import {PUT_DATA} from "./actions";

const initialState = { //изначальный стейт
    data: {}
}

export const reducer = (state = initialState, action: any) => {
    if (action.type === PUT_DATA) { //редьюсер, который обрабатывает только экшен put Data
        return {
            ...state,
            data: action.payload //здесь кладем все, что есть в payload в data из initialState;
        }
    }
    return state;
}