/**
 * @desc 删除todo
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** id */
  id: number;
}

export const init = undefined;

export async function request(params) {
  return pontFetch({
    url: '/todos/{id}',
    params,
    method: 'delete',
  });
}
