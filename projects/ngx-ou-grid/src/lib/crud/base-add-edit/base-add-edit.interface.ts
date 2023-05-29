export interface IBaseAddEdit<TEditingData> {
  /**
   *
   * @param model
   */
  initForm(model?: TEditingData): void;

  /**
   *
   */
  close(): void;

  /**
   *
   */
  refresh(): void;
}
