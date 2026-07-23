import { SitStepper } from "./sgds-stepper";
import { SitStep } from "./sgds-step";
import { register } from "../../utils/ce-registry";

register("sgds-stepper", SitStepper);
register("sgds-step", SitStep);
declare global {
  interface HTMLElementTagNameMap {
    "sgds-stepper": SitStepper;
    "sgds-step": SitStep;
  }
}
