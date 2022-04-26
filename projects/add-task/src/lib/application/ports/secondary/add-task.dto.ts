export interface AddTaskDTO {
  readonly id: string;
  readonly task: string;
  readonly date: number;
  readonly done: boolean;
}
