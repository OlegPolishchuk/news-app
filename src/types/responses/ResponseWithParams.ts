import { RequestParams } from 'types/models/RequestParams';
import { BaseResponse } from 'types/responses/BaseResponce';

export interface ResponseWithParams {
  data: BaseResponse;
  params: RequestParams;
}
