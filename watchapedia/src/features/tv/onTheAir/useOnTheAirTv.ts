import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';

import { onTheAirApi } from '../../../apis/tvApi';
import {TVDetail, ListResponse} from "../../../types";

const useAiringTodayTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>>('onTheAirApi', onTheAirApi);
}

export default useAiringTodayTv;