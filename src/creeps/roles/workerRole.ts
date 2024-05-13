export class WorkerRole implements Role {
  public role = CreepRole.Worker;

  public run(creep: Creep, room: Room): void {
    throw new Error("Method not implemented.");
  }

  public build(room: Room): void {
    throw new Error("Method not implemented.");
  }
}
