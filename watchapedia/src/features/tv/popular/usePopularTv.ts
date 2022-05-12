import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';

import { popularApi } from '../../../apis/tvApi';
import {TVDetail, ListResponse} from "../../../types";

const usePopularyTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>>('popularTv', popularApi);
}

export default usePopularyTv;