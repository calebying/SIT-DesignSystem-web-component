import { SitStepper } from "./sit-stepper";
import { SitStep } from "./sit-step";
import { register } from "../../utils/ce-registry";

register("sit-stepper", SitStepper);
register("sit-step", SitStep);
declare global {
  interface HTMLElementTagNameMap {
    "sit-stepper": SitStepper;
    "sit-step": SitStep;
  }
}
