import { property } from "lit/decorators.js";
import feedbackStyles from "../styles/feedback.css";
import formHintStyles from "../styles/form-hint.css";
import formLabelStyles from "../styles/form-label.css";
import formPlaceholderStyles from "../styles/form-placeholder.css";
import SitElement from "./sit-element";
import generateId from "../utils/generateId";

export default class FormControlElement extends SitElement {
  static styles = [...SitElement.styles, feedbackStyles, formHintStyles, formLabelStyles, formPlaceholderStyles];

  /** The input's label  */
  @property({ reflect: true }) label = "";

  /** The input's hint text */
  @property({ reflect: true }) hintText = "";

  /** The input's name attribute */
  @property({ reflect: true }) name: string;

  /** Disables the input. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Marks the component as invalid. Replace the pseudo :invalid selector for absent in custom elements */
  @property({ type: Boolean, reflect: true }) invalid = false;

  protected _controlId = generateId("input");
  protected _labelId = generateId("label");

  /** Programatically sets the invalid state of the input. Pass in boolean value in the argument */
  public setInvalid(bool: boolean) {
    this.invalid = bool;
    if (bool) {
      this.emit("sit-invalid");
    } else {
      this.emit("sit-valid");
    }
  }
}
