export class MemoryUtils {
  // Automatically delete memory of missing creeps
  static DeleteDeadCreeps(): void {
    for (const name in Memory.creeps) {
      if (!(name in Game.creeps)) {
        delete Memory.creeps[name];
      }
    }
  }
}
