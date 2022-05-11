import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { topRatedApi } from '../../../apis/movieApi';
import { ListResponse,MovieDetail } from '../../../types';

const useTopRateMovie = () => {
    return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('topRateMovie', topRatedApi);
  }
  
  export default useTopRateMovie;