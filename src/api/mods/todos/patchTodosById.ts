/**
 * @description 更新todo
 */

import { getUrl } from 'src/utils/getUrl';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';

export class Params {
  /** id */
  id: number;
}

export const init = new defs.Todo();

export async function request(bodyParams = {}) {
  return Request({
    url: getUrl('/todos/{id}', bodyParams, 'PATCH'),
    params: bodyParams,
    method: 'patch',
  });
}

export function createFetchAction(types, stateKey) {
  return (bodyParams = {}, meta?: any) => {
    return {
      types,
      meta,
      stateKey,
      method: 'patch',
      url: getUrl('/todos/{id}', bodyParams, 'PATCH'),
      params: bodyParams,
      init,
    };
  };
}
