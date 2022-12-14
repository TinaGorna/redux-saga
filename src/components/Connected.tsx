import React from "react"
import {useDispatch} from "react-redux";
import {loadData} from "../redux/actions"

export const Connected = () => {
    const dispatch = useDispatch()
    const onClick = () => dispatch(loadData()) //putData - это action-creator

    //на кнопке висит обработчик onClick, который получает метод dispatch и вызывает action-creator putData (в него передан пустой объект)

    return (
        <div>
            <button onClick={onClick}>Click me</button>
        </div>
    )
}