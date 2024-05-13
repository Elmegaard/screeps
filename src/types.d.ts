// Memory extension samples
interface Memory {
  uuid: number;
  log: any;
}

interface CreepMemory {
  role: CreepRole;
  homeRoom: string;
  targetRoom: string;
  working: boolean;
}

declare enum CreepRole {
  None,
  Worker
}

// Syntax for adding proprties to `global` (ex "global.log")
declare namespace NodeJS {
  interface Global {
    log: any;
  }
}
