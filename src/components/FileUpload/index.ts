import { SitFileUpload } from "./sgds-file-upload";
import { register } from "../../utils/ce-registry";

register("sgds-file-upload", SitFileUpload);

declare global {
  interface HTMLElementTagNameMap {
    "sgds-file-upload": SitFileUpload;
  }
}
