import { UserException } from "./UserException";

// Error Severity Constants
export enum ErrorSeverity {
  Info,
  Warning,
  Error,
  Fatal
}

// Color Constants
export const ErrorColors: any = {};
ErrorColors[ErrorSeverity.Fatal] = "#FF0000";
ErrorColors[ErrorSeverity.Error] = "#E300FF";
ErrorColors[ErrorSeverity.Warning] = "#F0FF00";
ErrorColors[ErrorSeverity.Info] = "#0045FF";

export class ErrorHandling {
  /**
   * Display an error to the console
   * @param e Either a UserException or an Error
   */
  public static printError(e: UserException | Error): void {
    if (e instanceof UserException) {
      console.log('<font color="' + e.titleColor + '">' + e.title + "</font>");
      console.log('<font color="' + e.bodyColor + '">' + e.dirname + "/" + e.filename + "</font>");
    } else {
      console.log("Unexpected error, see the details below: ");
      console.log(e.stack);
    }
  }
}
