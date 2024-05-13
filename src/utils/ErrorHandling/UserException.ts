import { ErrorColors, ErrorSeverity } from "./ErrorHandling";

/**
 * Custom error class
 */
export class UserException extends Error {
  public title: string;
  public severity: number;
  public titleColor: any;
  public bodyColor: string;

  public filename: string;
  public dirname: string;

  constructor(
    title: string,
    severity: ErrorSeverity,
    useTitleColor?: string,
    useBodyColor?: string,
    dirname: string = __dirname,
    filename: string = __filename
  ) {
    super();
    Object.setPrototypeOf(this, UserException.prototype);

    this.title = title;
    this.filename = filename;
    this.dirname = dirname;
    this.severity = severity;

    // Custom color option
    this.titleColor = useTitleColor !== undefined ? useTitleColor : ErrorColors[severity];
    this.bodyColor = useBodyColor !== undefined ? useBodyColor : "#ff1113";
  }
}
