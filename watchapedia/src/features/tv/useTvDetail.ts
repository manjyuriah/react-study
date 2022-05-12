import { AxiosError, AxiosResponse } from 'axios';
import { useQueries, useQuery } from 'react-query';
import { detailApi } from '../../apis/movieApi';
import {TVDetail } from '../../types';

const useTvDetail=(query: string)=>{
    const queryFn=()=>detailApi(query);
    
    return useQuery<AxiosResponse<TVDetail>,AxiosError>(['tvDetail',query],queryFn)
    //query가 있을때(검색어가 있을때)만 해당 API호출
}

export default useTvDetail;