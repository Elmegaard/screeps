interface Role {
  role: CreepRole;

  run(creep: Creep, room: Room): void;
  build(room: Room): void;
}
