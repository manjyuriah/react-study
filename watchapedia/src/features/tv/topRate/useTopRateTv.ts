import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';

import { topRatedApi } from '../../../apis/tvApi';
import {TVDetail, ListResponse} from "../../../types";

const useTopRateTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>>('topRateTv', topRatedApi);
}

export default useTopRateTv;