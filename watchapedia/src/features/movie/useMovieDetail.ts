import { AxiosError, AxiosResponse } from 'axios';
import { useQueries, useQuery } from 'react-query';
import { detailApi } from '../../apis/movieApi';
import { Movie, MovieDetail } from '../../types';

const useMovieDetail=(query: string)=>{
    const queryFn=()=>detailApi(query);
    
    return useQuery<AxiosResponse<MovieDetail>,AxiosError>(['movieDetail',query],queryFn)
    //query가 있을때(검색어가 있을때)만 해당 API호출
}

export default useMovieDetail;