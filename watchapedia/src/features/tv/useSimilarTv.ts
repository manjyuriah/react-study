import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { similarApi } from '../../apis/tvApi';
import { TVDetail, ListResponse } from '../../types';

const useSimilarTv = (id: string) => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(['similarTv', id], () => similarApi(id));
}

export default useSimilarTv;