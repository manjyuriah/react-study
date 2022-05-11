import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { nowPlayingApi } from '../../../apis/movieApi';
import { ListResponse,MovieDetail } from '../../../types';

const useNowPlayingMovie = () => {
    return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('nowPlayingMovie', nowPlayingApi);
  }
  
  export default useNowPlayingMovie;