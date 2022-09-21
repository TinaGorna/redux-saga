import {takeEvery, put, call} from "redux-saga/effects"
import {LOAD_DATA, putData} from "./actions"; //takeEvery позволяет производить отслеживание

function fetchData() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
}

function* workerLoadData() { //генератор (воркер), который будет производить манипуляции
    // здесь можем совершать какие-либо манипуляции
    //кладем значение при помощи put Data в редакс (т е диспатчим обычное редакс событие)
    const data = yield call(fetchData) //передаем объект ф-ии, а не вызываем ф-ю
    yield put(putData(data)) //сюда передаем acton creator, в который передаем наши данные. yield put() = dispatch. Нужен чтобы положить этот json в редакс
}

export function* watchLoadData() { //здесь будет отслеживать проиходящие события в Load Data
    yield takeEvery(LOAD_DATA, workerLoadData) //передаем название экшена, который будет отслеживать
}