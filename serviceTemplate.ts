
import * as Pont from 'pont-engine';
import { CodeGenerator, Interface } from "pont-engine";

export class FileStructures extends Pont.FileStructures {
}

export default class MyGenerator extends CodeGenerator {
    getInterfaceContent(inter: Interface) {
        const paramsCode = inter.getParamsCode();
        const bodyParamsCode = inter.getBodyParamsCode();
        const method = inter.method.toUpperCase();
        let requestParams = bodyParamsCode ? `params = {}, bodyParams = {}` : `params = {}`;
    
        return `/* eslint-disable @typescript-eslint/no-unused-vars */

            /**
             * @description ${inter.description}
             */
            
            import { getUrl } from '../../../utils/getUrl';
            import Request from '../../../utils/requests';
            import * as defs from '../../baseClass';
        
        
            export const init = ${inter.response.initialValue};

            export async function request(${requestParams}) {
                return Request({
                    url: getUrl("${inter.path}", params, "${method}"),
                    ${bodyParamsCode ? 'bodyParams: bodyParams,' : ''}
                    method: '${inter.method}',
                });
            }
        `;
    }
}
