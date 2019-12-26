/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * @description 获取全部的Todo
 */

import { getUrl } from '../../../utils/getUrl';
import Request from '../../../utils/requests';
import * as defs from '../../baseClass';

export const init = [];

export async function request(params = {}) {
  return Request({
    url: getUrl('/todos', params, 'GET'),

    method: 'get',
  });
}
