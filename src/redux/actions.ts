export const PUT_DATA = "PUT_DATA";

//этот action Creator возвращает экшены
export const putData = (dataFromServer: any) => {

    return {
        type: PUT_DATA,
        payload: dataFromServer
    }
}

export const loadData = () => (dispatch: any, getState: any) => { //getState возвращает все что у нас есть сейчас в текущем стейте. Это может быть полезно при совершении асинхронных запросов
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(json => { //кладем значение при помощи put Data в редакс (т е диспатчим обычное редакс событие)
            dispatch(putData(json))
        })
}