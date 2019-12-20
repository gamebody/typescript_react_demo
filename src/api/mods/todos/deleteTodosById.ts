/**
 * @description 删除todo
 */

import { getUrl } from 'src/utils/getUrl';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';

export class Params {
  /** id */
  id: number;
}

export const init = new defs.Todo();

export async function request(params = {}) {
  return Request({
    url: getUrl('/todos/{id}', params, 'DELETE'),
    params,
    method: 'delete',
  });
}

export function createFetchAction(types, stateKey) {
  return (params = {}, meta?: any) => {
    return {
      types,
      meta,
      stateKey,
      method: 'delete',
      url: getUrl('/todos/{id}', params, 'DELETE'),
      params,
      init,
    };
  };
}
