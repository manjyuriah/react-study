import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { popularApi } from '../../../apis/movieApi';
import { ListResponse,MovieDetail } from '../../../types';

const usePopularMovie = () => {
    return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('popular', popularApi);
  }
  
  export default usePopularMovie;