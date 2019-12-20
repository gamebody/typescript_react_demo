type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export class CreateTodoDto {
    /** text */
    text: number;
  }

  export class Todo {
    /** completed */
    completed: boolean;

    /** id */
    id: number;

    /** text */
    text: string;
  }

  export class UpdateTodoDto {
    /** true: 完成，false：未完成 */
    completed: boolean;
  }
}

declare namespace API {
  /**
   *
   */
  export namespace todos {
    /**
     * 获取全部的Todo
     * /todos
     */
    export namespace getTodos {
      export class Params {}

      export type Response = Array<defs.Todo>;
      export const init: Response;
      export function request(params: Params): Promise<Array<defs.Todo>>;
    }

    /**
     * 创建todo1
     * /todos
     */
    export namespace postTodos {
      export class Params {}

      export type Response = any;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.CreateTodoDto,
      ): Promise<any>;
    }

    /**
     * 更新todo
     * /todos/{id}
     */
    export namespace patchTodosById {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = any;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.UpdateTodoDto,
      ): Promise<any>;
    }

    /**
     * 删除todo
     * /todos/{id}
     */
    export namespace deleteTodosById {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = any;
      export const init: Response;
      export function request(params: Params): Promise<any>;
    }
  }
}
