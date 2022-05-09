import { useEffect , useState } from "react";

export default function useFetch(url :string){
    const [data,setData]=useState([]);
    
    useEffect(()=>{
        fetch(url)
            .then(res=>{
                //res = http응답(실제 json아님 -> json 메소드를 사용해서 json으로 변경)
                return res.json()
            })
            .then(data=>{
                console.log(data);
                setData(data)
            })
    },[url])
    return data;
}