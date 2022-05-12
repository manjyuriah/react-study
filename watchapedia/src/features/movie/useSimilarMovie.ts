import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { similarApi } from '../../apis/movieApi';
import { MovieDetail, ListResponse } from '../../types';

const useSimilarMovie = (id: string) => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(['similarMovie', id], () => similarApi(id));
}

export default useSimilarMovie;