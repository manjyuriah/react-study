/*포켓몬 id를 파라미터로 받아 디테일 화면 표시*/
import React from "react";
import { useParams } from "react-router-dom";

type Params={
    id:string;
}

const DetailPage: React.FC=()=>{
    const {id}=useParams<Params>()
    return (
        <div>DetailPage id: {id}</div>
    )
}
export default DetailPage