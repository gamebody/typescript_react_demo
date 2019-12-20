/**
 * @description 获取全部的Todo
 */

import { getUrl } from 'src/utils/getUrl';
import Request from 'src/utils/requests';
import * as defs from '../../baseClass';

export class Params {}

export const init = [];

export async function request(params = {}) {
  return Request({
    url: getUrl('/todos', params, 'GET'),
    params,
    method: 'get',
  });
}

export function createFetchAction(types, stateKey) {
  return (params = {}, meta?: any) => {
    return {
      types,
      meta,
      stateKey,
      method: 'get',
      url: getUrl('/todos', params, 'GET'),
      params,
      init,
    };
  };
}
