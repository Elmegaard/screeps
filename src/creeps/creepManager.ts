import { ErrorHandling, ErrorSeverity } from "utils/ErrorHandling/ErrorHandling";
import { UserException } from "utils/ErrorHandling/UserException";
import { WorkerRole } from "./roles/workerRole";

export class CreepManager {
  public static runCreepManager(): void {
    for (const creep in Game.creeps) {
      try {
        this.runSingleCreepManager(Game.creeps[creep]);
      } catch (e: any) {
        ErrorHandling.printError(e);
      }
    }
  }

  private static runSingleCreepManager(creep: Creep): void {
    const role: CreepRole = creep.memory.role;

    // If no role provided, throw warning
    if (!role || role === CreepRole.None) {
      throw new UserException("Null role provided to run single creep manager", ErrorSeverity.Error);
    }

    // Don't run the creep if they are still spawning
    if (creep.spawning) {
      return;
    }

    const homeRoom: Room = Game.rooms[creep.memory.homeRoom];
    const targetRoom: Room = Game.rooms[creep.memory.targetRoom];
    let roleManager: Role | undefined;

    switch (creep.memory.role) {
      case CreepRole.Worker:
        roleManager = new WorkerRole();
        break;
    }

    if (roleManager !== undefined) {
      roleManager.run(creep, homeRoom);
    }

    throw new UserException(
      "Creep we tried to run manager for is not defined in the constants array",
      ErrorSeverity.Error
    );
  }
}
