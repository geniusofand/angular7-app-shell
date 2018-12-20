export enum OssAppLayoutActionType {

  // Dialogs
  DialogClose         = 'DIALOG_CLOSE',
  DialogOpen          = 'DIALOG_OPEN',
  DialogSuccess       = 'DIALOG_SUCCESS',

  // Update
  UpdateTask          = 'UPDATE_TASK',
  UpdateTaskCompleted = 'UPDATE_TASK_COMPLETED',
  UpdateTaskFailed    = 'UPDATE_TASK_FAILED',

  // Load
  LoadTasks           = 'LOAD_TASKS',
  LoadTasksCompleted  = 'LOAD_TASKS_COMPLETED',
  LoadTasksFailed     = 'LOAD_TASKS_FAILED',

  // Select
  SelectTask          = 'SELECT_TASK',
  SelectTaskCompleted = 'SELECT_TASK_COMPLETED',
  SelectTaskFailed    = 'SELECT_TASK_FAILED',

}
