export class CreateTodoDto {
  /** text */
  text = '';
}

export class Todo {
  /** completed */
  completed = false;

  /** id */
  id = undefined;

  /** text */
  text = '';
}

export class UpdateTodoDto {
  /** true: 完成，false：未完成 */
  completed = false;
}
