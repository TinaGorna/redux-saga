import { takeEvery } from 'redux-saga/effects'
import {LOAD_DATA} from "./actions"; //takeEvery позволяет производить отслеживание

function* workerLoadData () { //генератор (воркер), который будет производить манипуляции
    // здесь можем совершать какие-либо манипуляции
}

export function* watchLoadData () { //здесь будет отслеживать проиходящие события в Load Data
yield takeEvery(LOAD_DATA, workerLoadData) //передаем название экшена, который будет отслеживать
}