/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * @description 删除todo
 */

import { getUrl } from '../../../utils/getUrl';
import Request from '../../../utils/requests';
import * as defs from '../../baseClass';

export const init = new defs.Todo();

export async function request(params = {}) {
  return Request({
    url: getUrl('/todos/{id}', params, 'DELETE'),

    method: 'delete',
  });
}
