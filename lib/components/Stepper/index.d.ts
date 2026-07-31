import { SitStepper } from "./sit-stepper";
import { SitStep } from "./sit-step";
declare global {
    interface HTMLElementTagNameMap {
        "sit-stepper": SitStepper;
        "sit-step": SitStep;
    }
}
