import { assert, elementUpdated, expect, fixture, html, waitUntil } from "@open-wc/testing";
import { sendKeys } from "@web/test-runner-commands";
import sinon from "sinon";
import { SitButton, SitStepper } from "../src/components";
import "./sit-web-component";

const stepMetaData = [
  {
    stepHeader: "Personal Details",
    component: "1 test"
  },
  {
    stepHeader: "Address and Contact Information",
    component: "2 test"
  },
  {
    stepHeader: "Review",
    component: "3 test"
  }
];
const iconStepMetaData = [
  {
    stepHeader: "Personal Details",
    component: "1 test",
    iconName: "placeholder"
  },
  {
    stepHeader: "Address and Contact Information",
    component: "2 test",
    iconName: "placeholder"
  },
  {
    stepHeader: "Review",
    component: "3 test",
    iconName: "placeholder"
  }
];
describe("SIT-stepper", () => {
  it("is defined", () => {
    const el = document.createElement("SIT-stepper");
    assert.instanceOf(el, SitStepper);
  });
  it("by default should render 3 steps within component", async () => {
    const el = await fixture(html` <sit-stepper .steps=${stepMetaData}></sit-stepper> `);
    const stepperItems = el.shadowRoot?.querySelectorAll(".stepper-item");
    expect(stepperItems?.length).to.equal(3);
  });
  it("should render the correct number of steps when passed in steps prop", async () => {
    const fourSteps = [...stepMetaData, { stepHeader: "Submitted", component: "4 test" }];
    const el = await fixture(html` <sit-stepper .steps=${fourSteps}></sit-stepper> `);
    const stepperItems = el.shadowRoot?.querySelectorAll(".stepper-item");
    expect(stepperItems?.length).to.equal(4);
  });
  it("should have default activeStep=0", async () => {
    const el = await fixture<SitStepper>(html` <sit-stepper .steps=${stepMetaData}></sit-stepper> `);
    expect(el.activeStep).to.equal(0);
  });

  it("should have the is-active class on step 1 when activeStep set to 0", async () => {
    const el = await fixture(html` <sit-stepper .steps=${stepMetaData} activeStep="0"></sit-stepper> `);

    expect(el.shadowRoot?.children[0].querySelector(".stepper-item")?.classList.value).to.contain("is-active");
  });

  it("when activeStep set to 2 and clickable set to false, should not update the `is-active` to the previous step when clicked", async () => {
    const el = await fixture(html` <sit-stepper .steps=${stepMetaData} activeStep="2"></sit-stepper> `);

    const stepperItemTwo = el.shadowRoot
      ?.querySelectorAll(".stepper-item-container")[1]
      .querySelector(".stepper-item") as SitStepper;
    const stepperItemThree = el.shadowRoot
      ?.querySelectorAll(".stepper-item-container")[2]
      .querySelector(".stepper-item") as SitStepper;

    stepperItemTwo.click();
    await elementUpdated(el);
    expect(stepperItemTwo.classList.contains("is-active")).to.be.false;
    expect(stepperItemThree.classList.contains("is-active")).to.be.true;
  });

  it("when activeStep set to 2 and clickable set to true, should update the `is-active` to the previous step when clicked", async () => {
    const el = await fixture(html` <sit-stepper .steps=${stepMetaData} activeStep="2" clickable></sit-stepper> `);
    const stepperItemTwo = el.shadowRoot
      ?.querySelectorAll(".stepper-item-container")[1]
      .querySelector(".stepper-item") as SitStepper;
    const stepperItemThree = el.shadowRoot
      ?.querySelectorAll(".stepper-item-container")[2]
      .querySelector(".stepper-item") as SitStepper;

    stepperItemTwo.click();
    await elementUpdated(el);
    expect(stepperItemTwo.classList.contains("is-active")).to.be.true;
    expect(stepperItemThree.classList.contains("is-active")).to.be.false;
  });

  it("getComponent method returns the component of current active step by default", async () => {
    const el = await fixture<SitStepper>(html` <sit-stepper .steps=${stepMetaData} activeStep="2"></sit-stepper> `);
    expect(el.getComponent()).to.equal(stepMetaData[2].component);
    el.previousStep();
    await el.updateComplete;
    expect(el.getComponent()).to.equal(stepMetaData[2 - 1].component);
  });

  it("getComponent method returns the component of step passed in", async () => {
    const el = await fixture<SitStepper>(html` <sit-stepper .steps=${stepMetaData} activeStep="2"></sit-stepper> `);
    expect(el.getComponent(0)).to.equal(stepMetaData[0].component);
  });

  it("when orientation is not set, the orientation is horizontal by default", async () => {
    const el = await fixture(html` <sit-stepper .steps=${stepMetaData}></sit-stepper> `);

    const stepper = el.shadowRoot?.querySelector(".stepper") as SitStepper;
    expect(stepper.classList.contains("horizontal")).to.be.true;
  });

  it("when orientation set to vertical, the stepper will be in vertical orientation", async () => {
    const el = await fixture(html` <sit-stepper .steps=${stepMetaData} orientation="vertical"></sit-stepper> `);

    const stepper = el.shadowRoot?.querySelector(".stepper") as SitStepper;
    expect(stepper.classList.contains("vertical")).to.be.true;
  });
  it("when iconName is included in stepsMetadata, sit-icon is rendered in steps marker", async () => {
    const el = await fixture(html` <sit-stepper .steps=${iconStepMetaData}></sit-stepper> `);
    const markers = el.shadowRoot?.querySelectorAll(".stepper-marker > sit-icon[name='placeholder']");
    expect(markers?.length).to.equal(3);
  });
});

describe("SIT-stepper, sit-button interactions", () => {
  it("should increment the active step when the nextStep() method is called", async () => {
    const el = await fixture(html`
      <sit-stepper .steps=${stepMetaData} id="myStepper" activeStep="0"></sit-stepper>
      <sit-button stepperId="myStepper" methodType="increment" variant="primary">Next</sit-button>
    `);

    const stepper = el.querySelector<SitStepper>("SIT-stepper");
    const button = el.querySelector<SitButton>("SIT-button");

    if (button) {
      expect(stepper?.shadowRoot?.querySelectorAll(".stepper-item")[0]).to.have.class("is-active");
      button.shadowRoot?.querySelector("button")?.click();
      await elementUpdated(el);
      expect(stepper?.shadowRoot?.querySelectorAll(".stepper-item")[0]).not.to.have.class("is-active");
      expect(stepper?.shadowRoot?.querySelectorAll(".stepper-item")[1]).to.have.class("is-active");
    }
  });

  it("should increment the active step when the nextStep() method is called, showing the previous step 1 to have is-clickable, is-completed props, tab-index=0", async () => {
    const el = await fixture(html`
      <sit-stepper .steps=${stepMetaData} id="myStepper" activeStep="0"></sit-stepper>
      <sit-button stepperId="myStepper" methodType="increment" variant="primary">Next</sit-button>
    `);

    const stepper = el.querySelector<SitStepper>("SIT-stepper");
    const button = el.querySelector<SitButton>("SIT-button");

    if (button) {
      expect(stepper?.shadowRoot?.querySelectorAll(".stepper-item")[0]).to.have.class("is-active");
      button.shadowRoot?.querySelector("button")?.click();
      await elementUpdated(el);
      expect(stepper?.shadowRoot?.querySelectorAll(".stepper-item")[0]).to.have.class("is-completed");
      expect(stepper?.shadowRoot?.querySelectorAll(".stepper-item")[0]).to.have.class("is-clickable");
      expect(stepper?.shadowRoot?.querySelectorAll(".stepper-item")[0]).not.to.have.class("is-active");
    }
  });

  it("should decrement the active step when the previousStep() method is called", async () => {
    const el = await fixture(html`
      <sit-stepper .steps=${stepMetaData} id="myStepper" activeStep="1"></sit-stepper>
      <sit-button stepperId="myStepper" methodType="decrement" variant="primary">Back</sit-button>
    `);

    const stepper = el.querySelector<SitStepper>("SIT-stepper");
    const button = el.querySelector<SitButton>("SIT-button");

    if (button) {
      expect(stepper?.shadowRoot?.querySelectorAll(".stepper-item")[1]).to.have.class("is-active");
      button.shadowRoot?.querySelector("button")?.click();
      await elementUpdated(el);
      expect(stepper?.shadowRoot?.querySelectorAll(".stepper-item")[0]).to.have.class("is-active");
      expect(stepper?.shadowRoot?.querySelectorAll(".stepper-item")[1]).not.to.have.class("is-active");
    }
  });

  it("should decrement the active step when the previousStep() method is called, showing the previous step 2 to not have is-clickable, is-completed props", async () => {
    const el = await fixture(html`
      <sit-stepper .steps=${stepMetaData} id="myStepper" activeStep="1"></sit-stepper>
      <sit-button stepperId="myStepper" methodType="decrement" variant="primary">Next</sit-button>
    `);

    const stepper = el.querySelector<SitStepper>("SIT-stepper");
    const button = el.querySelector<SitButton>("SIT-button");

    if (button) {
      expect(stepper?.shadowRoot?.querySelectorAll(".stepper-item")[1]).to.have.class("is-active");
      button.shadowRoot?.querySelector("button")?.click();
      await elementUpdated(el);
      expect(stepper?.shadowRoot?.querySelectorAll(".stepper-item")[0]).to.have.class("is-active");
      expect(stepper?.shadowRoot?.querySelectorAll(".stepper-item")[1]).not.to.have.class("is-completed");
      expect(stepper?.shadowRoot?.querySelectorAll(".stepper-item")[1]).not.to.have.class("is-clickable");
    }
  });

  it("should set the active step to the last step when the lastStep() method is called", async () => {
    const el = await fixture(html`
      <sit-stepper .steps=${stepMetaData} id="myStepper" activeStep="0"></sit-stepper>
      <sit-button stepperId="myStepper" methodType="last" variant="primary">Next</sit-button>
    `);

    const stepper = el.querySelector<SitStepper>("SIT-stepper");
    const button = el.querySelector<SitButton>("SIT-button");

    if (button) {
      expect(stepper?.shadowRoot?.querySelectorAll(".stepper-item")[0]).to.have.class("is-active");
      button.shadowRoot?.querySelector("button")?.click();
      await elementUpdated(el);
      expect(stepper?.shadowRoot?.querySelectorAll(".stepper-item")[0]).not.to.have.class("is-active");
      expect(stepper?.shadowRoot?.querySelectorAll(".stepper-item")[1]).not.to.have.class("is-active");
      expect(stepper?.shadowRoot?.querySelectorAll(".stepper-item")[2]).to.have.class("is-active");
    }
  });

  it("should set the active step to the first step when the firstStep() method is called", async () => {
    const el = await fixture(html`
      <sit-stepper .steps=${stepMetaData} id="myStepper" activeStep="2"></sit-stepper>
      <sit-button stepperId="myStepper" methodType="first" variant="primary">Next</sit-button>
    `);

    const stepper = el.querySelector<SitStepper>("SIT-stepper");
    const button = el.querySelector<SitButton>("SIT-button");

    if (button) {
      expect(stepper?.shadowRoot?.querySelectorAll(".stepper-item")[2]).to.have.class("is-active");
      button.shadowRoot?.querySelector("button")?.click();
      await elementUpdated(el);
      expect(stepper?.shadowRoot?.querySelectorAll(".stepper-item")[2]).not.to.have.class("is-active");
      expect(stepper?.shadowRoot?.querySelectorAll(".stepper-item")[1]).not.to.have.class("is-active");
      expect(stepper?.shadowRoot?.querySelectorAll(".stepper-item")[0]).to.have.class("is-active");
    }
  });

  it("when reset method is fired, activeStep is back to defaultValue", async () => {
    const el = await fixture<SitStepper>(html` <sit-stepper .steps=${stepMetaData} activeStep="1"></sit-stepper> `);
    expect(el.defaultActiveStep).to.equal(1);
    expect(el.activeStep).to.equal(1);

    el.nextStep();
    await el.updateComplete;
    expect(el.activeStep).to.equal(2);
    el.reset();
    await el.updateComplete;
    expect(el.activeStep).to.equal(1);
  });
});

const eventsMetadata = [
  {
    event: "SIT-next-step",
    method: "nextStep"
  },
  {
    event: "SIT-previous-step",
    method: "previousStep"
  },
  {
    event: "SIT-last-step",
    method: "lastStep"
  },
  {
    event: "SIT-first-step",
    method: "firstStep"
  }
];
describe("Stepper events", () => {
  eventsMetadata.forEach(m => {
    it(`${m.event} is fired when method ${m.method}() is called and sit-arrived is called after`, async () => {
      const el = await fixture<SitStepper>(
        html` <sit-stepper .steps=${stepMetaData} activeStep="1"></sit-stepper> `
      );
      const eventHandler = sinon.spy();
      const arrivedEventHandler = sinon.spy();
      el.addEventListener(m.event, eventHandler);
      el.addEventListener("SIT-arrived", arrivedEventHandler);
      el[m.method]();
      await waitUntil(() => eventHandler.calledOnce);
      expect(eventHandler).to.have.been.calledOnce;

      await waitUntil(() => arrivedEventHandler.calledOnce);
      expect(arrivedEventHandler).to.be.calledAfter(eventHandler);
    });
  });

  it("SIT-reset is fired when reset method is called, sit-arrived called after", async () => {
    const el = await fixture<SitStepper>(html` <sit-stepper .steps=${stepMetaData}></sit-stepper> `);
    const eventHandler = sinon.spy();
    const arrivedEventHandler = sinon.spy();
    el.addEventListener("SIT-reset", eventHandler);
    el.addEventListener("SIT-arrived", arrivedEventHandler);

    //setting the stage
    el.nextStep();
    await el.updateComplete;

    el.reset();
    await el.updateComplete;

    await waitUntil(() => eventHandler.calledOnce);
    expect(eventHandler).to.have.been.calledOnce;
  });
});

describe("Stepper keyboard interactions", () => {
  it("keyboard enter will simulate a click behaviour on the markers", async () => {
    const el = await fixture<SitStepper>(
      html` <sit-stepper activeStep="2" .steps=${stepMetaData} clickable></sit-stepper> `
    );
    const arrivedHandler = sinon.spy();
    el.addEventListener("SIT-arrived", arrivedHandler);
    const markers = el.shadowRoot?.querySelectorAll("div.stepper-item");
    expect(markers?.[0]).to.have.class("is-completed").and.have.class("is-clickable");
    expect(markers?.[1]).to.have.class("is-completed").and.have.class("is-clickable");

    await sendKeys({ press: "Tab" });
    await sendKeys({ press: "Enter" });
    await el.updateComplete;
    expect(markers?.[0]).to.have.class("is-active");
    expect(arrivedHandler).to.be.calledOnce;
  });
});

describe("SIT-stepper accessibility", () => {
  it("when orientation=horizontal, stepper should be displayed in horizontal orientation", async () => {
    const el = await fixture(
      html` <sit-stepper orientation="horizontal" .steps=${stepMetaData} activeStep="1"></sit-stepper> `
    );
    const stepper = el.shadowRoot?.querySelector(".stepper");
    expect(stepper).to.have.class("horizontal");
  });

  it("when orientation=vertical, stepper should be displayed in horizontal orientation", async () => {
    const el = await fixture(
      html` <sit-stepper orientation="horizontal" .steps=${stepMetaData} activeStep="1"></sit-stepper> `
    );
    const stepper = el.shadowRoot?.querySelector(".stepper");
    expect(stepper).to.have.class("horizontal");
  });

  it("when clickable=false, should not be tab-accessible for all steps", async () => {
    const el = await fixture(html` <sit-stepper .steps=${stepMetaData} activeStep="1"></sit-stepper> `);
    const markers = el.shadowRoot?.querySelectorAll("div.stepper-item");
    expect(markers?.[0]).to.have.attribute("tabindex", "-1");
    expect(markers?.[1]).to.have.attribute("tabindex", "-1");
    expect(markers?.[2]).to.have.attribute("tabindex", "-1");
  });

  it("when clickable=true, the steps before activeStep should be tab-accessible", async () => {
    const el = await fixture(html` <sit-stepper .steps=${stepMetaData} clickable activeStep="1"></sit-stepper> `);
    const markers = el.shadowRoot?.querySelectorAll("div.stepper-item");
    expect(markers?.[0]).to.have.attribute("tabindex", "0");
    expect(markers?.[1]).to.have.attribute("tabindex", "-1");
    expect(markers?.[2]).to.have.attribute("tabindex", "-1");
  });

  it("should have correct aria-current value for each step when activeStep set to 1", async () => {
    const el = await fixture(html` <sit-stepper .steps=${stepMetaData} activeStep="1"></sit-stepper> `);
    const markers = el.shadowRoot?.querySelectorAll("div.stepper-item");
    expect(markers?.[0]).to.have.attribute("aria-current", "false");
    expect(markers?.[1]).to.have.attribute("aria-current", "step");
    expect(markers?.[2]).to.have.attribute("aria-current", "false");
  });

  it("should have correct aria-disabled value for each step when activeStep set to 1", async () => {
    const el = await fixture(html` <sit-stepper .steps=${stepMetaData} activeStep="1"></sit-stepper> `);
    const markers = el.shadowRoot?.querySelectorAll("div.stepper-item");
    expect(markers?.[0]).to.have.attribute("aria-disabled", "false");
    expect(markers?.[1]).to.have.attribute("aria-disabled", "true");
    expect(markers?.[2]).to.have.attribute("aria-disabled", "true");
  });
});

describe("SIT-stepper with sit-step child components", () => {
  it("should render sit-step children when slotted", async () => {
    const el = await fixture(html`
      <sit-stepper>
        <sit-step stepHeader="Personal Details"></sit-step>
        <sit-step stepHeader="Address"></sit-step>
        <sit-step stepHeader="Review"></sit-step>
      </sit-stepper>
    `);
    const steps = el.querySelectorAll("SIT-step");
    expect(steps.length).to.equal(3);
  });

  it("should not render fallback steps when sit-step children are slotted", async () => {
    const el = await fixture(html`
      <sit-stepper .steps=${stepMetaData}>
        <sit-step stepHeader="Personal Details"></sit-step>
        <sit-step stepHeader="Address"></sit-step>
        <sit-step stepHeader="Review"></sit-step>
      </sit-stepper>
    `);
    const shadowSteps = el.shadowRoot?.querySelectorAll(".stepper-item-container");
    expect(shadowSteps?.length).to.equal(0);
  });

  it("should set hasDefaultSlot=true when sit-step children are slotted", async () => {
    const el = await fixture<SitStepper>(html`
      <sit-stepper>
        <sit-step stepHeader="Personal Details"></sit-step>
      </sit-stepper>
    `);
    await el.updateComplete;
    expect(el.hasDefaultSlot).to.be.true;
  });

  it("should set hasDefaultSlot=false when no sit-step children are slotted", async () => {
    const el = await fixture<SitStepper>(html` <sit-stepper .steps=${stepMetaData}></sit-stepper> `);
    await el.updateComplete;
    expect(el.hasDefaultSlot).to.be.false;
  });

  it("should render fallback steps when steps prop is provided and no children are slotted", async () => {
    const el = await fixture(html` <sit-stepper .steps=${stepMetaData}></sit-stepper> `);
    const shadowSteps = el.shadowRoot?.querySelectorAll(".stepper-item-container");
    expect(shadowSteps?.length).to.equal(3);
  });
});



