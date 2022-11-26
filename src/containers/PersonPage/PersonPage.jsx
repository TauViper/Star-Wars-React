import React, {useState, useEffect} from 'react';
import {API_PEOPLE} from "constans/api";
import {getPersonId, getPersonImage, getPersonPageId} from "services/getPersonData";
import {PersonPageList} from "components/PersonPageComponents/PersonPageList";
import {getApiResource} from "utils/network";
import {useQueryParams} from "hooks/useQueryParams";
import {PersonNav} from "components/PersonNav/PersonNav";





export const PersonPage = ({setErrorApi}) => {
    const [person, setPerson] = useState(null)



     const getResource = async (url) => {/*Константа создает асинк запрос в файл network.js для получения данных с сервера*/
        const list = await getApiResource(url) /* ожидание получения результата запроса переменной getApiResource из
                                                файла network.js*/

        if (list){
            const personList = list.results.map(({name, url}) => { /*Создаем константу и методом map пробегаемся по базе
                                                                Json по объекту result и вытаскиваем из него данные
                                                                со свойствами name и url*/

                const id = getPersonId(url)/* Получаем ID из функции getPersonId из файла getPersonData параметром которой является url карточки*/
                const img = getPersonImage(id)/* Получаем img из функции getPersonImage из файла getPersonData параметром которой является id
                                             карточки*/


                return {/* возвращаем объект из result только свойства name и url*/
                    id,
                    name,
                    img
                }
            })
            setPerson(personList) /*Изменения useState работает внутри функции запроса*/


            setErrorApi(false)
        }else{
            setErrorApi(true)
        }
    }
        useEffect(() => {
            getResource(API_PEOPLE+query) /*API_PEOPLE получен из файла api.js*/

        }, [])
        return (
                    <>

                        {person &&  <PersonPageList person = {person}/>}
                    </>        /* так как useState = null то используется тернарник {state && (state)} если есть информация то она выводиться
                на страницу. */
        );

};





















// const [nextPage, setNextPage] = useState(null)
// const [previousPage, setPreviousPage] = useState(null)
// const [counterPage, setCounterPage] = useState(1)
// const query = useQueryParams()
// const queryPage = query.get('page')



//setNextPage(list.next)
//             setPreviousPage(list.previous)
//             setCounterPage(getPersonPageId(url))



// <PersonNav
//     getResource = {getResource}
//     nextPage = {nextPage}
//     previousPage = {previousPage}
//     counterPage = {counterPage}
// />