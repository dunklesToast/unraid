import { Executor, ExecutorConfigType } from '../../instance/executor';
import { Unraid } from '../../instance/unraid';

export class UnraidModuleExtensionBase {
  readonly instance: Unraid;

  constructor(instance: Unraid) {
    this.instance = instance;
  }
}
