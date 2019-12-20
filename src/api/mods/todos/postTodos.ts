/**
 * @description 创建todo1
 */

import { getUrl } from 'src/utils/getUrl';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';

export class Params {}

export const init = new defs.Todo();

export async function request(bodyParams = {}) {
  return Request({
    url: getUrl('/todos', bodyParams, 'POST'),
    params: bodyParams,
    method: 'post',
  });
}

export function createFetchAction(types, stateKey) {
  return (bodyParams = {}, meta?: any) => {
    return {
      types,
      meta,
      stateKey,
      method: 'post',
      url: getUrl('/todos', bodyParams, 'POST'),
      params: bodyParams,
      init,
    };
  };
}
