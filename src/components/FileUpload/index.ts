import { SitFileUpload } from "./sit-file-upload";
import { register } from "../../utils/ce-registry";

register("sit-file-upload", SitFileUpload);

declare global {
  interface HTMLElementTagNameMap {
    "sit-file-upload": SitFileUpload;
  }
}
