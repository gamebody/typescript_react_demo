/**
 * @desc 创建todo1
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = undefined;

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/todos',
    params: bodyParams,
    method: 'post',
  });
}
