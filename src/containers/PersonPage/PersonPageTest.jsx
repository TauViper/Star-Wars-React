import React, {useState, useEffect} from 'react';
import {API_PEOPLE} from "../../constans/api";
import {getApiResource} from "../../utils/network";
import {getPersonId, getPersonImage} from "../../services/getPersonData";
import style from './PersonPage.module.css';
import {PersonPageList} from "components/PersonPageComponents/PersonPageList";

export const PersonPageTest = () => {
    const [person, setPerson] = useState(null)
    const [errorApi, setErrorApi] = useState(false)
    const api = async (url) =>{
         const res = await getApiResource(1+url)

        if (res){
            const list = res.results.map(({name, url})=>{
                const id = getPersonId(url)
                const img = getPersonImage(id)

                return{
                    id,
                    name,
                    img
                }

            })
            setPerson(list)
            setErrorApi(false)
        }else {
            setErrorApi(true)
        }

    }
    useEffect(()=>{
        api(API_PEOPLE)
    })
        return (
            <>
            {errorApi
            ? <h1>Error</h1>
            : <>{person && <PersonPageList person={person} />}</>
            }
            </>

        );

};





