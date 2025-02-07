import { useState,useEffect } from "react";
function UseCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>{
            res.json();
        })
        .then((res)=>{
            setData(res[currency])//macha nennu ikkada setData icchanu kabati
        })
        console.log(data)
    
    },[currency])
    return data;//ikkada return cheyochu ra
}
export default UseCurrencyInfo;