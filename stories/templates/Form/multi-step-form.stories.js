import { html } from "lit";

const Template = () => html`
  <style>
    .step-section {
      display: none;
    }
    .step-section.active {
      display: block;
    }
  </style>

  <sit-masthead></sit-masthead>

  <sit-mainnav>
    <strong slot="brand">Logo</strong>
    <sit-mainnav-item slot="end">
      <a href="#" class="sit:text-sm sit:text-body-subtle">Save draft</a>
    </sit-mainnav-item>
  </sit-mainnav>

  <!-- ── Page header ──────────────────────────────────────── -->
  <section id="page-header" class="sit:bg-surface-default sit:py-layout-lg">
    <div class="sit-container">
      <div
        class="sit:flex sit:flex-col sit:items-start sit:text-left sit:gap-layout-md"
        style="max-width: var(--Sit-text-max-width);"
      >
        <sit-breadcrumb>
          <sit-breadcrumb-item><a href="#">Home</a></sit-breadcrumb-item>
          <sit-breadcrumb-item><a href="#">Grants</a></sit-breadcrumb-item>
          <sit-breadcrumb-item active><a href="#">Sustainability Grant Application</a></sit-breadcrumb-item>
        </sit-breadcrumb>

        <div>
          <div
            class="sit:text-overline-md sit:font-semibold sit:leading-2-xs sit:tracking-wide sit:uppercase sit:text-label-default sit:mb-xs"
          >
            Grant Programme
          </div>
          <h1 class="sit:text-heading-xl sit:font-bold sit:leading-xl sit:tracking-tight sit:text-heading-default">
            Enterprise Sustainability Grant
          </h1>
          <p class="sit:text-body-lg sit:leading-md sit:tracking-normal sit:text-body-subtle">
            Apply for funding to implement sustainability initiatives in your business. Grant quantum: up to 70% of
            qualifying costs, capped at S$30,000 per project.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="sit:bg-surface-default sit:min-h-screen">
    <div class="sit-container sit:py-2-xl">
      <!-- ── Info alert ─────────────────────────────────────── -->
      <sit-alert variant="info" class="sit:mb-layout-md" dismissible>
        <strong>Before you begin:</strong> Ensure you have your company UEN, latest financial statements, and project
        quotations ready. Applications typically take 20-30 minutes to complete.
      </sit-alert>

      <!-- ── Stepper ───────────────────────────────────────── -->
      <sit-stepper id="grant-stepper" class="sit:mb-layout-md"></sit-stepper>

      <!-- ═══════════════════════════════════════════════════
           STEP 1 Eligibility Check
      ════════════════════════════════════════════════════ -->
      <section id="step-eligibility" class="step-section active">
        <form id="form-eligibility" novalidate>
          <div class="sit:border-t sit:border-muted sit:py-layout-md">
            <div class="sit-grid sit:gap-layout-md">
              <div class="sit-col-4 sit-col-sm-8 sit-col-lg-4">
                <h2
                  class="sit:text-heading-md sit:font-semibold sit:leading-md sit:tracking-tight sit:text-heading-default"
                >
                  Company Information
                </h2>
                <p class="sit:text-body-md sit:leading-xs sit:tracking-normal sit:text-body-subtle">
                  Basic details about your registered business entity.
                </p>
              </div>
              <div class="sit-col-4 sit-col-sm-8 sit-col-lg-8 sit:flex sit:flex-col sit:gap-layout-md">
                <div class="sit-grid sit:gap-component-sm">
                  <sit-input
                    class="sit-col-4 sit-col-sm-8 sit-col-lg-6"
                    id="uen"
                    label="Unique Entity Number (UEN)"
                    name="uen"
                    placeholder="e.g. 201234567A"
                    required
                    hasFeedback="both"
                    invalidFeedback="Enter a valid 9- or 10-character UEN"
                  ></sit-input>
                  <sit-input
                    class="sit-col-4 sit-col-sm-8 sit-col-lg-6"
                    id="companyName"
                    label="Registered Company Name"
                    name="companyName"
                    placeholder="e.g. Green Solutions Pte. Ltd."
                    required
                    hasFeedback="both"
                  ></sit-input>
                </div>

                <sit-select
                  id="businessStructure"
                  label="Business Structure"
                  name="businessStructure"
                  placeholder="Select a business structure"
                  required
                  hasFeedback
                  invalidFeedback="Select a business structure"
                >
                  <sit-select-option value="sole-proprietorship">Sole Proprietorship</sit-select-option>
                  <sit-select-option value="partnership">Partnership / Limited Liability Partnership</sit-select-option>
                  <sit-select-option value="private-limited">Private Limited Company (Pte. Ltd.)</sit-select-option>
                  <sit-select-option value="public-limited">Public Limited Company (Ltd.)</sit-select-option>
                  <sit-select-option value="cooperative">Co-operative</sit-select-option>
                </sit-select>

                <div class="sit-grid sit:gap-component-sm">
                  <sit-select
                    class="sit-col-4 sit-col-sm-8 sit-col-lg-6"
                    id="employeeCount"
                    label="Number of Employees"
                    name="employeeCount"
                    placeholder="Select a range"
                    required
                    hasFeedback
                    invalidFeedback="Select an employee count"
                    hintText="As at last financial year end"
                  >
                    <sit-select-option value="1-10">1 - 10</sit-select-option>
                    <sit-select-option value="11-50">11 - 50</sit-select-option>
                    <sit-select-option value="51-200">51 - 200</sit-select-option>
                    <sit-select-option value="201+">More than 200 (not eligible)</sit-select-option>
                  </sit-select>
                  <sit-select
                    class="sit-col-4 sit-col-sm-8 sit-col-lg-6"
                    id="annualTurnover"
                    label="Annual Turnover"
                    name="annualTurnover"
                    placeholder="Select a range"
                    required
                    hasFeedback
                    invalidFeedback="Select an annual turnover range"
                    hintText="As at last financial year end"
                  >
                    <sit-select-option value="lt-1m">Less than S$1 million</sit-select-option>
                    <sit-select-option value="1m-10m">S$1 million - S$10 million</sit-select-option>
                    <sit-select-option value="10m-50m">S$10 million - S$50 million</sit-select-option>
                    <sit-select-option value="50m-100m">S$50 million - S$100 million</sit-select-option>
                    <sit-select-option value="gt-100m">More than S$100 million (not eligible)</sit-select-option>
                  </sit-select>
                </div>
              </div>
            </div>
          </div>

          <div class="sit:border-t sit:border-muted sit:py-layout-md">
            <div class="sit-grid sit:gap-layout-md">
              <div class="sit-col-4 sit-col-sm-8 sit-col-lg-4">
                <h2
                  class="sit:text-heading-md sit:font-semibold sit:leading-md sit:tracking-tight sit:text-heading-default"
                >
                  Industry & History
                </h2>
                <p class="sit:text-body-md sit:leading-xs sit:tracking-normal sit:text-body-subtle">
                  Your primary sector and prior engagement with government grants.
                </p>
              </div>
              <div class="sit-col-4 sit-col-sm-8 sit-col-lg-8 sit:flex sit:flex-col sit:gap-layout-md">
                <div class="sit-grid sit:gap-component-sm">
                  <sit-select
                    class="sit-col-4 sit-col-sm-8 sit-col-lg-6"
                    id="industrySector"
                    label="Primary Industry Sector"
                    name="industrySector"
                    placeholder="Select a sector"
                    required
                    hasFeedback
                  >
                    <sit-select-option value="food-beverage">Food & Beverage</sit-select-option>
                    <sit-select-option value="retail">Retail</sit-select-option>
                    <sit-select-option value="manufacturing">Manufacturing</sit-select-option>
                    <sit-select-option value="construction">Construction</sit-select-option>
                    <sit-select-option value="logistics">Logistics & Transportation</sit-select-option>
                    <sit-select-option value="hospitality">Hospitality & Tourism</sit-select-option>
                    <sit-select-option value="professional-services">Professional Services</sit-select-option>
                    <sit-select-option value="healthcare">Healthcare</sit-select-option>
                    <sit-select-option value="ict">ICT & Digital Services</sit-select-option>
                    <sit-select-option value="other">Other</sit-select-option>
                  </sit-select>
                  <sit-select
                    class="sit-col-4 sit-col-sm-8 sit-col-lg-6"
                    id="yearsInOperation"
                    label="Years in Operation"
                    name="yearsInOperation"
                    placeholder="Select a range"
                    required
                    hasFeedback
                  >
                    <sit-select-option value="lt-1">Less than 1 year (not eligible)</sit-select-option>
                    <sit-select-option value="1-3">1 - 3 years</sit-select-option>
                    <sit-select-option value="3-5">3 - 5 years</sit-select-option>
                    <sit-select-option value="gt-5">More than 5 years</sit-select-option>
                  </sit-select>
                </div>

                <sit-radio-group
                  id="priorGrant"
                  label="Have you previously received this grant?"
                  name="priorGrant"
                  required
                  hasFeedback
                >
                  <sit-radio value="no">No, this is my first application</sit-radio>
                  <sit-radio value="yes-different">Yes, for a different project</sit-radio>
                  <sit-radio value="yes-same">Yes, for a similar project (may affect eligibility)</sit-radio>
                </sit-radio-group>
              </div>
            </div>
          </div>

          <div class="sit:border-t sit:border-muted sit:pt-layout-sm sit:flex sit:justify-end sit:gap-component-sm">
            <sit-button id="btn-next-1" variant="primary" type="button">
              Next: Project Details
              <sit-icon name="arrow-right" slot="rightIcon"></sit-icon>
            </sit-button>
          </div>
        </form>
      </section>

      <!-- ═══════════════════════════════════════════════════
           STEP 2 Project Details
      ════════════════════════════════════════════════════ -->
      <section id="step-project" class="step-section">
        <form id="form-project" novalidate>
          <div class="sit:border-t sit:border-muted sit:py-layout-md">
            <div class="sit-grid sit:gap-layout-md">
              <div class="sit-col-4 sit-col-sm-8 sit-col-lg-4">
                <h2
                  class="sit:text-heading-md sit:font-semibold sit:leading-md sit:tracking-tight sit:text-heading-default"
                >
                  Project Overview
                </h2>
                <p class="sit:text-body-md sit:leading-xs sit:tracking-normal sit:text-body-subtle">
                  Describe the sustainability initiative you are seeking funding for.
                </p>
              </div>
              <div class="sit-col-4 sit-col-sm-8 sit-col-lg-8 sit:flex sit:flex-col sit:gap-layout-md">
                <sit-input
                  id="projectTitle"
                  label="Project Title"
                  name="projectTitle"
                  placeholder="e.g. Solar Panel Installation at Ang Mo Kio Factory"
                  required
                  hasFeedback="both"
                  invalidFeedback="Provide a project title"
                ></sit-input>

                <sit-select
                  id="projectCategory"
                  label="Project Category"
                  name="projectCategory"
                  placeholder="Select a category"
                  required
                  hasFeedback
                >
                  <sit-select-option value="renewable-energy">Renewable Energy (Solar, Wind, Biogas)</sit-select-option>
                  <sit-select-option value="energy-efficiency">Energy Efficiency & Management</sit-select-option>
                  <sit-select-option value="water-conservation">Water Conservation & Recycling</sit-select-option>
                  <sit-select-option value="waste-management">Waste Reduction & Circular Economy</sit-select-option>
                  <sit-select-option value="green-transport">Green Transport & Logistics</sit-select-option>
                  <sit-select-option value="sustainable-procurement"
                    >Sustainable Procurement & Supply Chain</sit-select-option
                  >
                  <sit-select-option value="green-building">Green Building Retrofit</sit-select-option>
                  <sit-select-option value="carbon-management">Carbon Measurement & Management</sit-select-option>
                </sit-select>

                <sit-textarea
                  id="projectDescription"
                  label="Project Description"
                  name="projectDescription"
                  placeholder="e.g. We plan to install rooftop solar panels across our warehouse facility to reduce grid electricity dependency and lower carbon emissions..."
                  rows="5"
                  minlength="100"
                  maxlength="2000"
                  characterCount
                  required
                  hasFeedback="both"
                  invalidFeedback="Provide a description of at least 100 characters"
                  hintText="Describe what you plan to implement and how it will improve your sustainability performance (min. 100 characters)"
                ></sit-textarea>
              </div>
            </div>
          </div>

          <div class="sit:border-t sit:border-muted sit:pt-layout-sm sit:flex sit:justify-between sit:gap-component-sm">
            <sit-button id="btn-prev-2" variant="outline" type="button">
              <sit-icon name="arrow-left" slot="leftIcon"></sit-icon>
              Back
            </sit-button>
            <sit-button id="btn-next-2" variant="primary" type="button">
              Next: Review
              <sit-icon name="arrow-right" slot="rightIcon"></sit-icon>
            </sit-button>
          </div>
        </form>
      </section>

      <!-- ═══════════════════════════════════════════════════
           STEP 3 Review & Declare
      ════════════════════════════════════════════════════ -->
      <section id="step-review" class="step-section">
        <form id="form-review" novalidate>
          <div class="sit:border-t sit:border-muted sit:py-layout-md">
            <div class="sit-grid sit:gap-layout-md">
              <div class="sit-col-4 sit-col-sm-8 sit-col-lg-4">
                <h2
                  class="sit:text-heading-md sit:font-semibold sit:leading-md sit:tracking-tight sit:text-heading-default"
                >
                  Application Summary
                </h2>
                <p class="sit:text-body-md sit:leading-xs sit:tracking-normal sit:text-body-subtle">
                  Review all details before submitting. Use the Back button to correct any information.
                </p>
              </div>
              <div class="sit-col-4 sit-col-sm-8 sit-col-lg-8">
                <div class="sit:flex sit:flex-col sit:gap-layout-sm">
                  <sit-description-list-group bordered>
                    <span slot="title">Company Information</span>
                    <sit-description-list>UEN<span slot="data" id="rv-uen">-</span></sit-description-list>
                    <sit-description-list
                      >Company Name<span slot="data" id="rv-companyName">-</span></sit-description-list
                    >
                    <sit-description-list
                      >Business Structure<span slot="data" id="rv-businessStructure">-</span></sit-description-list
                    >
                  </sit-description-list-group>

                  <sit-description-list-group bordered>
                    <span slot="title">Project Details</span>
                    <sit-description-list
                      >Project Title<span slot="data" id="rv-projectTitle">-</span></sit-description-list
                    >
                    <sit-description-list
                      >Category<span slot="data" id="rv-projectCategory">-</span></sit-description-list
                    >
                  </sit-description-list-group>
                </div>
              </div>
            </div>
          </div>

          <div class="sit:border-t sit:border-muted sit:py-layout-md">
            <div class="sit-grid sit:gap-layout-md">
              <div class="sit-col-4 sit-col-sm-8 sit-col-lg-4">
                <h2
                  class="sit:text-heading-md sit:font-semibold sit:leading-md sit:tracking-tight sit:text-heading-default"
                >
                  Declarations
                </h2>
                <p class="sit:text-body-md sit:leading-xs sit:tracking-normal sit:text-body-subtle">
                  All declarations must be acknowledged before submission.
                </p>
              </div>
              <div class="sit-col-4 sit-col-sm-8 sit-col-lg-8 sit:flex sit:flex-col sit:gap-layout-md">
                <sit-checkbox
                  id="decl-accurate"
                  name="declAccurate"
                  value="yes"
                  required
                  hasFeedback="both"
                  invalidFeedback="You must confirm this declaration"
                >
                  I declare that all information provided in this application is true, complete, and accurate to the
                  best of my knowledge.
                </sit-checkbox>

                <sit-checkbox
                  id="decl-tnc"
                  name="declTnc"
                  value="yes"
                  required
                  hasFeedback="both"
                  invalidFeedback="You must agree to the Terms and Conditions"
                >
                  I have read and agree to the
                  <a href="#" class="sit:text-info-default sit:underline">Terms and Conditions</a>.
                </sit-checkbox>
              </div>
            </div>
          </div>

          <div class="sit:border-t sit:border-muted sit:pt-layout-sm sit:flex sit:justify-between sit:gap-component-sm">
            <sit-button id="btn-prev-3" variant="outline" type="button">
              <sit-icon name="arrow-left" slot="leftIcon"></sit-icon>
              Back
            </sit-button>
            <sit-button id="btn-submit" variant="primary" type="submit">
              Submit Application
              <sit-icon name="send" slot="rightIcon"></sit-icon>
            </sit-button>
          </div>
        </form>
      </section>

      <!-- ═══════════════════════════════════════════════════
           SUCCESS STATE
      ════════════════════════════════════════════════════ -->
      <section id="step-success" class="step-section">
        <div class="sit:flex sit:flex-col sit:items-center sit:text-center sit:py-layout-xl sit:gap-layout-md">
          <sit-icon name="check-circle-fill" size="3-xl" class="sit:text-success-default"></sit-icon>

          <div>
            <h1 class="sit:text-heading-xl sit:font-bold sit:leading-xl sit:tracking-tight sit:text-heading-default">
              Application Submitted
            </h1>
            <p class="sit:text-body-lg sit:leading-md sit:tracking-normal sit:text-body-subtle">
              Thank you for applying for the Enterprise Sustainability Grant.
            </p>
          </div>

          <div>
            <div
              class="sit:text-overline-md sit:font-semibold sit:leading-2-xs sit:tracking-wide sit:uppercase sit:text-label-default sit:mb-xs"
            >
              Reference Number
            </div>
            <h4
              id="ref-number"
              class="sit:text-heading-sm sit:font-light sit:leading-sm sit:tracking-tight sit:text-heading-default"
            >
              ESG-2026-12345
            </h4>
          </div>
        </div>
      </section>
    </div>
  </section>

  <sit-footer></sit-footer>

  <!-- ── Script ──────────────────────────────────────────────── -->
  <script>
    const stepper = document.getElementById("grant-stepper");

    const STEPS = [
      { stepHeader: "Eligibility", component: "eligibility" },
      { stepHeader: "Project Details", component: "project" },
      { stepHeader: "Review & Declare", component: "review" }
    ];

    const SECTIONS = {
      eligibility: document.getElementById("step-eligibility"),
      project: document.getElementById("step-project"),
      review: document.getElementById("step-review"),
      success: document.getElementById("step-success")
    };

    const FORMS = {
      eligibility: document.getElementById("form-eligibility"),
      project: document.getElementById("form-project"),
      review: document.getElementById("form-review")
    };

    stepper.steps = STEPS;
    stepper.activeStep = 0;

    function showSection(key) {
      Object.values(SECTIONS).forEach(s => s.classList.remove("active"));
      SECTIONS[key].classList.add("active");
    }

    function validateStep(formId) {
      const form = FORMS[formId];
      if (!form) return true;
      return form.reportValidity();
    }

    stepper.addEventListener("Sit-arrived", () => {
      const key = STEPS[stepper.activeStep].component;
      showSection(key);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.getElementById("btn-next-1").addEventListener("click", () => {
      if (!validateStep("eligibility")) return;
      stepper.nextStep();
    });

    document.getElementById("btn-prev-2").addEventListener("click", () => stepper.previousStep());

    document.getElementById("btn-next-2").addEventListener("click", () => {
      if (!validateStep("project")) return;
      populateReview();
      stepper.nextStep();
    });

    document.getElementById("btn-prev-3").addEventListener("click", () => stepper.previousStep());

    const LABELS = {
      businessStructure: {
        "sole-proprietorship": "Sole Proprietorship",
        partnership: "Partnership / LLP",
        "private-limited": "Private Limited (Pte. Ltd.)",
        "public-limited": "Public Limited (Ltd.)",
        cooperative: "Co-operative"
      },
      projectCategory: {
        "renewable-energy": "Renewable Energy",
        "energy-efficiency": "Energy Efficiency",
        "water-conservation": "Water Conservation",
        "waste-management": "Waste Management",
        "green-transport": "Green Transport",
        "sustainable-procurement": "Sustainable Procurement",
        "green-building": "Green Building Retrofit",
        "carbon-management": "Carbon Management"
      }
    };

    function resolveLabel(field, value) {
      const map = LABELS[field];
      return map && map[value] ? map[value] : value || "-";
    }

    function populateReview() {
      const fields = ["uen", "companyName", "businessStructure", "projectTitle", "projectCategory"];

      fields.forEach(id => {
        const el = document.getElementById(id);
        const rvEl = document.getElementById("rv-" + id);
        if (!el || !rvEl) return;
        const raw = el.value || "";
        rvEl.textContent = resolveLabel(id, raw) || "-";
      });
    }

    document.getElementById("form-review").addEventListener("submit", e => {
      e.preventDefault();
      if (!e.target.reportValidity()) return;

      const refNum = "ESG-2026-" + String(Math.floor(10000 + Math.random() * 90000)).padStart(5, "0");
      document.getElementById("ref-number").textContent = refNum;

      stepper.style.display = "none";
      document.getElementById("page-header").style.display = "none";
      Object.values(SECTIONS).forEach(s => s.classList.remove("active"));
      SECTIONS.success.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  </script>
`;

export default {
  title: "Templates/Form/Multi-step Form",
  tags: ["!autodocs"],
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    interactions: { disable: true },
    layout: "fullscreen"
  }
};

export const MultiStepForm = {
  render: Template.bind({}),
  name: "Multi-step Form"
};
