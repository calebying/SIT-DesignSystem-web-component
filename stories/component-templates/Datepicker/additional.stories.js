import { html } from "lit";

const RangeTemplate = () => html`<sit-datepicker mode="range"></sit-datepicker> `;

export const RangeSelection = {
  render: RangeTemplate.bind({}),
  name: "Range selection",
  args: {},
  parameters: {}
};

const FlipTemplate = args =>
  html`
    <sit-datepicker label="Flip disabled" mode="range" noFlip></sit-datepicker>
    <sit-datepicker label="Flip enabled" mode="range"></sit-datepicker>
    <sit-datepicker label="Flip disabled, Drop=up" mode="range" drop="up" noFlip></sit-datepicker>
  `;

export const Flip = {
  render: FlipTemplate.bind({}),
  name: "Flip",
  args: {},
  parameters: {}
};

const ModeTemplate = args => {
  return html`
    <sit-datepicker id="single-mode-example" .initialValue=${args.initialValue} mode=${args.mode}></sit-datepicker>
    <script>
      const datepicker = document.querySelector("#single-mode-example");
      datepicker.initialValue = ["23/05/2023"];
    </script>
  `;
};

export const SingleMode = {
  render: ModeTemplate.bind({}),
  name: "Initial value for single mode",
  args: { value: "23/05/2023", mode: "single" },
  parameters: {}
};
export const RangeMode = {
  render: ModeTemplate.bind({}),
  name: "Initial value for range mode",
  args: { value: "23/05/2023 - 15/12/2023", mode: "range" },
  parameters: {}
};

const MinMaxTemplate = args => {
  return html`
    <div style="height:500px;">
      <sit-datepicker
        id="min-max-example"
        label="Choose a date"
        hintText="The minimum date is 10 June 2023 and maximum date is 19 June 2023"
        .displayDate=${args.displayDate}
        minDate="2023-06-10T12:00:00.000Z"
        maxDate="2023-06-19T12:00:00.000Z"
      ></sit-datepicker>
      <script>
        const datepicker = document.querySelector("#min-max-example");
        datepicker.displayDate = new Date(2023, 5, 10);
      </script>
    </div>
  `;
};
export const MinMax = {
  render: MinMaxTemplate.bind({}),
  name: "Min and max date",
  args: { displayDate: new Date(2023, 5, 10) },
  parameters: {}
};

const FormSubmissionTemplate = args => {
  const submitHandler = event => {
    const formData = new FormData(event.target);
    alert("Date submitted :" + formData.get("myDatepicker"));
    event.preventDefault();
  };
  return html`
    <form id="datepicker-form" @submit=${submitHandler}>
      <sit-datepicker
        name="myDatepicker"
        id="form-submission-example"
        label="Choose a date"
        hintText="The minimum date is 10 June 2023 and maximum date is 19 June 2023"
        .displayDate=${args.displayDate}
        minDate="2023-06-10T12:00:00.000Z"
        maxDate="2023-06-19T12:00:00.000Z"
        required
      ></sit-datepicker>
      <sit-button type="submit">Submit</sit-button>
    </form>
    <script>
      const datepicker = document.querySelector("#form-submission-example");
      datepicker.displayDate = new Date(2023, 5, 10);
      const form = document.querySelector("#datepicker-form");
      form.addEventListener("submit", event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        alert("Date submitted :" + formData.get("myDatepicker"));
      });
    </script>
  `;
};
export const FormSubmission = {
  render: FormSubmissionTemplate.bind({}),
  name: "Form submission",
  args: { displayDate: new Date(2023, 5, 10) },
  parameters: {}
};

const CustomValidationTemplate = () => html`
  <sit-datepicker
    noValidate
    id="custom-validation-example"
    name="appointmentDate"
    label="Appointment Date"
    hintText="Must be a future date"
    hasFeedback
  ></sit-datepicker>
  <script>
    const picker = document.getElementById("custom-validation-example");
    picker.addEventListener("Sit-change-date", e => {
      const val = e.target.value;
      if (!val || val === "DD/MM/YYYY") return;
      const [day, month, year] = val.split("/");
      const selected = new Date(year + "-" + month + "-" + day);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected <= today) {
        e.target.setInvalid(true);
        e.target.invalidFeedback = "Please select a future date";
      } else {
        e.target.setInvalid(false);
      }
    });
  </script>
`;

export const CustomValidation = {
  render: CustomValidationTemplate.bind({}),
  name: "Custom validation",
  args: {},
  parameters: {}
};

const InvalidDateClearTemplate = () => {
  let logContent;

  const handleChangeDate = e => {
    if (logContent) {
      logContent.innerHTML += `<div class="sit:text-primary-default">Sit-change-date: "${e.target.value}"</div>`;
    }
  };

  const handleInvalidInput = () => {
    if (logContent) {
      logContent.innerHTML += `<div class="sit:text-danger-default">Sit-invalid: Invalid date detected</div>`;
    }
  };

  const handleBlur = e => {
    if (logContent && e.target.value === "") {
      logContent.innerHTML += `<div class="sit:text-success-default">Sit-blur: Invalid date cleared on blur!</div>`;
    }
  };

  setTimeout(() => {
    logContent = document.getElementById("log-content-invalid");
  }, 0);

  return html`
    <div>
      <sit-datepicker
        id="invalid-date-clear-example"
        name="eventDate"
        label="Event Date"
        hintText="Try entering an invalid date like 20/20/2026, then click outside"
        hasFeedback
        @Sit-change-date=${handleChangeDate}
        @Sit-invalid=${handleInvalidInput}
        @Sit-blur=${handleBlur}
      ></sit-datepicker>
      <div id="event-log" class="sit:mt-md sit:p-md sit:bg-alternate sit:rounded-sm">
        <strong>Event log:</strong>
        <div id="log-content-invalid" class="sit:text-body-sm" style="font-family: monospace;"></div>
      </div>
    </div>
  `;
};

export const InvalidDateClear = {
  render: InvalidDateClearTemplate.bind({}),
  name: "Invalid date auto-clear",
  args: {},
  parameters: {}
};
