export interface TaskDTO {
  readonly id: string;
  readonly task: string;
  readonly created: number;
  readonly done: boolean;
}
