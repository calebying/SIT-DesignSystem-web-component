import { LitElement, PropertyValueMap, html } from "lit";
import { customElement } from "lit/decorators.js";
import { SitInput } from "../src/components/Input/sit-input";
import { SitStepper } from "../src/components/Stepper/sit-stepper";

interface IDetails {
  firstName: string;
  lastName: string;
  address: string;
  gender: string;
}
@customElement("mock-stepper")
export class MockStepper extends LitElement {
  details: IDetails = {
    firstName: "",
    lastName: "",
    address: "",
    gender: ""
  };
  currentStep: number = 0;
  component: Function = () => {};
  stepMetaData = [
    {
      stepHeader: "Personal Details",
      component: (details: IDetails) => html`<div class="mb-4">
        <div class="row">
          <div class="col mb-2">
            <form>
              <h2>Content for Step 1</h2>
              <sit-input
                label="First Name"
                hinttext="Enter first name"
                name="firstName"
                required
                inputClasses="mb-3"
                .value=${details.firstName}
                @sit-input=${this._handleInputChange}
              ></sit-input>
              <sit-input
                label="Last Name"
                hinttext="Enter last name"
                name="lastName"
                required
                .value=${details.lastName}
                @sit-input=${this._handleInputChange}
              ></sit-input>
              <sit-radio-group @sit-change=${this._handleRadioChange} .value=${this.details.gender}>
                <span slot="label">Gender</span>
                <sit-radio value="female" isInline>Female</sit-radio>
                <sit-radio value="male" isInline>Male</sit-radio>
              </sit-radio-group>
            </form>
          </div>
        </div>
      </div>`
    },
    {
      stepHeader: "Address and Contact Information",
      component: (details: IDetails) => html`<div class="mb-4">
        <div class="row">
          <div class="col mb-2">
            <form>
              <h2>Content for Step 2</h2>
              <sit-input
                name="address"
                label="Address"
                id="input1"
                required
                .value=${details.address}
                @sit-input=${this._handleInputChange}
              ></sit-input>
            </form>
          </div>
        </div>
      </div>`
    },
    {
      stepHeader: "Review",
      component: (details: IDetails) => html`<div class="mb-4">
        <div class="row">
          <div class="col mb-2">
            <form>
              <h2>Content for Step 3</h2>
              <sit-input name="firstName" label="First Name" required readonly value=${details.firstName}></sit-input>
              <sit-input name="lastName" label="Last Name" required readonly value=${details.lastName}></sit-input>
              <sit-radio-group value=${this.details.gender}>
                <span slot="label">Gender</span>
                <sit-radio value="female" isInline disabled>Female</sit-radio>
                <sit-radio value="male" isInline disabled>Male</sit-radio>
              </sit-radio-group>
              <sit-input name="address" label="Address" required readonly value=${details.address}></sit-input>
            </form>
          </div>
        </div>
      </div>`
    }
  ];
  connectedCallback(): void {
    super.connectedCallback();
  }
  _handleArrived() {
    this.component = this._getComponent();
    this.requestUpdate();
  }

  _handleRadioChange(e: CustomEvent) {
    this.details.gender = e.detail.value;
  }

  _handleInputChange(e: KeyboardEvent) {
    e.preventDefault();
    const target = e.target as SitInput;
    this.details[target.name] = target.value;
  }

  _getStepper() {
    const stepper = this.shadowRoot?.querySelector("sit-stepper") as SitStepper;
    return stepper;
  }

  _reset() {
    this.details = {
      firstName: "",
      lastName: "",
      address: "",
      gender: ""
    };
    this._getStepper().reset();
  }

  _nextStep() {
    this._getStepper().nextStep();
  }

  _previousStep() {
    this._getStepper().previousStep();
  }

  _lastStep() {
    this._getStepper().lastStep();
  }

  _firstStep() {
    this._getStepper().firstStep();
  }

  _getComponent() {
    return (this._getStepper().getComponent() as Function)(this.details);
  }

  protected async firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): Promise<void> {
    await this.updateComplete;
    await this._getStepper().updateComplete;

    this.component = this._getComponent();
    this.requestUpdate();
  }

  render() {
    return html`
      <div style="padding:30px;">
        <h2>Stepper</h2>
        <sit-stepper id="myStepper" activeStep=${this.currentStep} @sit-arrived=${this._handleArrived}>
          ${this.stepMetaData.map(
            step => html`<sit-step stepHeader=${step.stepHeader} .component=${step.component}></sit-step>`
          )}
        </sit-stepper>
        <section
          class="container p-3"
          style="background: var(--sit-bg-default);padding: 30px 32px 30px 32px;border-radius: 5px;box-shadow: 0px 0px 25px 0px #161A1D12;box-shadow: 0px 8px 16px 0px #161A1D08;"
        >
          ${this.component ? this.component : ""}

          <div style="display:flex;justify-content:space-between;margin-top:1rem;">
            <div>
              <sit-button class="me-3" variant="light" @click="${this._reset}">Reset</sit-button>
              <sit-button class="me-3" variant="primary" @click="${this._nextStep}">Next</sit-button>
              <sit-button @click="${this._previousStep}" variant="secondary">Back</sit-button>
            </div>
            <div>
              <sit-button class="m-2" variant="danger" @click="${this._firstStep}">Go to first page</sit-button>
              <sit-button class="m-2" variant="warning" @click="${this._lastStep}">Go to last page</sit-button>
            </div>
          </div>
        </section>
      </div>
    `;
  }
}
