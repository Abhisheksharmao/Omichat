import {useState,useEffect} from 'react'

const PREFIX = 'whatsapp-clone-'

export default function Uselocalstorage(key,initialvalue) {
 const prefilxedkey = PREFIX + key
 const[value,setValue]=useState(()=>{
    const jsonValue = localStorage.getItem(prefilxedkey)
    if(jsonValue != null) return JSON.parse(jsonValue)
    if(typeof initialvalue === 'function'){
        return initialvalue()
    }else{
        return initialvalue
    }
 })

 useEffect(()=>{
localStorage.setItem(prefilxedkey, JSON.stringify(value))
 },[value,prefilxedkey])
 return[value,setValue]
}
