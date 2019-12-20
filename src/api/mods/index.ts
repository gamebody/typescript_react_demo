import * as todos from './todos';

const API: any = {};
API.todos = todos;
(window as any).API = API;
