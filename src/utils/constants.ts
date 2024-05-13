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
