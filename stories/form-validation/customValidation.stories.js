import { html } from "lit";

export default {
  title: "Form/Custom Validation"
};
const handleInput = e => {};

const DisableValidationByInputTemplate = args => {
  return html`
    <form id="custom-validation-form" class="sit:flex sit:flex-col sit:gap-layout-xs">
      <sit-input
        noValidate
        required
        label="Keys"
        hinttext="Keys cannot start with special characters like @, #, $"
        name="input-keys"
        hasFeedback="both"
        placeholder="Placeholder"
        id="custom-validation__input-novalidate"
        @Sit-input=${handleInput}
      >
      </sit-input>
      <sit-textarea
        noValidate
        required
        label="Bio"
        hinttext="Must be at least 10 characters long"
        name="textarea-bio"
        hasFeedback
        placeholder="Enter bio"
        id="custom-validation__textarea-novalidate"
      >
      </sit-textarea>
      <sit-combo-box
        noValidate
        required
        label="Fruit"
        hinttext="Selection must start with 'A'"
        name="combo-fruit"
        hasFeedback
        placeholder="Select a fruit"
        id="custom-validation__combobox-novalidate"
      >
        <sit-combo-box-option value="apple">Apple</sit-combo-box-option>
        <sit-combo-box-option value="apricot">Apricot</sit-combo-box-option>
        <sit-combo-box-option value="banana">Banana</sit-combo-box-option>
        <sit-combo-box-option value="durian">Durian</sit-combo-box-option>
      </sit-combo-box>
      <sit-select
        noValidate
        required
        label="Gender"
        hinttext="Please select a gender"
        name="select-gender"
        hasFeedback
        placeholder="Select a gender"
        id="custom-validation__select-novalidate"
      >
        <sit-select-option value="male">Male</sit-select-option>
        <sit-select-option value="female">Female</sit-select-option>
        <sit-select-option value="other">Other</sit-select-option>
        <sit-select-option value="prefer-not-to-say">Prefer not to say</sit-select-option>
      </sit-select>
      <sit-file-upload
        noValidate
        required
        label="Documents"
        hinttext="Max 2 PDF files"
        name="documents"
        hasFeedback
        multiple
        accept=".pdf"
        id="custom-validation__file-upload-novalidate"
      >
        Choose Files
      </sit-file-upload>
      <sit-datepicker
        noValidate
        required
        label="Appointment Date"
        hintText="Must be a future date"
        name="appointment-date"
        hasFeedback
        id="custom-validation__datepicker-novalidate"
      ></sit-datepicker>
      <sit-radio-group
        noValidate
        required
        label="Gender"
        hintText="Please select a gender"
        name="radio-gender"
        hasFeedback
        id="custom-validation__radio-novalidate"
      >
        <sit-radio value="male">Male</sit-radio>
        <sit-radio value="female">Female</sit-radio>
        <sit-radio value="other">Other</sit-radio>
      </sit-radio-group>
      <sit-checkbox-group
        noValidate
        required
        label="Interests"
        hintText="Select at least one interest"
        name="checkbox-interests"
        hasFeedback
        id="custom-validation__checkbox-novalidate"
      >
        <sit-checkbox value="sports">Sports</sit-checkbox>
        <sit-checkbox value="music">Music</sit-checkbox>
        <sit-checkbox value="reading">Reading</sit-checkbox>
      </sit-checkbox-group>
      <div class="sit:flex sit:justify-end sit:gap-component-xs">
        <sit-button type="reset" variant="ghost">Reset</sit-button>
        <sit-button type="submit">Submit</sit-button>
      </div>
    </form>
    <script>
      const formOne = document.getElementById("custom-validation-form");
      formOne.addEventListener("submit", e => {
        e.preventDefault();
        const components = formOne.querySelectorAll(
          "Sit-input, Sit-textarea, Sit-combo-box, Sit-select, Sit-file-upload, Sit-datepicker"
        );
        let hasInvalid = false;
        components.forEach(c => {
          if (c.invalid) hasInvalid = true;
        });
        if (hasInvalid) return;
        alert(
          "Form submitted successfully despite empty required fields — constraint validation was disabled by the noValidate property."
        );
      });

      const inputOne = document.querySelector("Sit-input#custom-validation__input-novalidate");
      inputOne.addEventListener("Sit-input", e => {
        if (!/^[^a-zA-Z0-9]/.test(e.target.value)) {
          e.target.setInvalid(false);
        } else {
          e.target.setInvalid(true);
          e.target.invalidFeedback = "This is an invalid message";
        }
      });

      const textareaOne = document.querySelector("Sit-textarea#custom-validation__textarea-novalidate");
      textareaOne.addEventListener("Sit-input", e => {
        if (!e.target.value || e.target.value.length >= 10) {
          e.target.setInvalid(false);
        } else {
          e.target.setInvalid(true);
          e.target.invalidFeedback = "Bio must be at least 10 characters long";
        }
      });
      const comboOne = document.querySelector("Sit-combo-box#custom-validation__combobox-novalidate");
      comboOne.addEventListener("Sit-change", e => {
        if (!e.target.value) {
          e.target.setInvalid(true);
          e.target.invalidFeedback = "Select an option";
        } else if (!e.target.value.startsWith("a")) {
          e.target.setInvalid(true);
          e.target.invalidFeedback = "Selection must start with 'A'";
        } else {
          e.target.setInvalid(false);
        }
      });
      const selectOne = document.querySelector("Sit-select#custom-validation__select-novalidate");
      selectOne.addEventListener("Sit-change", e => {
        if (!e.target.value) {
          e.target.setInvalid(true);
          e.target.invalidFeedback = "Please select a gender";
        } else {
          e.target.setInvalid(false);
        }
      });
      const fileUploadOne = document.querySelector("Sit-file-upload#custom-validation__file-upload-novalidate");
      fileUploadOne.addEventListener("Sit-add-files", e => {
        const allFiles = fileUploadOne.files;
        let isValid = true;
        let errorMsg = "";

        if (allFiles.length > 2) {
          isValid = false;
          errorMsg = "Maximum 2 files allowed";
        }

        for (const file of e.detail) {
          if (!file.name.toLowerCase().endsWith(".pdf")) {
            isValid = false;
            errorMsg = "Only PDF files are allowed";
            break;
          }
        }

        fileUploadOne.invalidFeedback = errorMsg;
        fileUploadOne.setInvalid(!isValid);
      });

      fileUploadOne.addEventListener("Sit-remove-file", e => {
        const remaining = e.detail.files;
        if (remaining.length === 0) {
          fileUploadOne.invalidFeedback = "At least one file is required";
          fileUploadOne.setInvalid(true);
        } else {
          fileUploadOne.setInvalid(false);
        }
      });

      const datepickerOne = document.querySelector("Sit-datepicker#custom-validation__datepicker-novalidate");
      datepickerOne.addEventListener("Sit-change-date", e => {
        const val = e.target.value;
        if (!val || val === "DD/MM/YYYY") return;
        const [day, month, year] = val.split("/");
        const selected = new Date(Number(year), Number(month) - 1, Number(day));
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selected <= today) {
          e.target.setInvalid(true);
          e.target.invalidFeedback = "Please select a future date";
        } else {
          e.target.setInvalid(false);
        }
      });

      const radioOne = document.querySelector("Sit-radio-group#custom-validation__radio-novalidate");
      radioOne.addEventListener("Sit-change", e => {
        if (!e.target.value) {
          e.target.setInvalid(true);
          e.target.invalidFeedback = "Please select a gender";
        } else {
          e.target.setInvalid(false);
        }
      });
      const checkboxGroupOne = document.querySelector("Sit-checkbox-group#custom-validation__checkbox-novalidate");
      checkboxGroupOne.addEventListener("Sit-change", e => {
        if (!e.target.value) {
          e.target.setInvalid(true);
          e.target.invalidFeedback = "Please select at least one interest";
        } else {
          e.target.setInvalid(false);
        }
      });
    </script>
  `;
};
const DisableValidationByFormTemplate = args => {
  return html`
    <form id="custom-validation-form_novalidate" class="sit:flex sit:flex-col sit:gap-layout-xs" novalidate>
      <sit-input
        required
        label="Keys"
        hinttext="Keys cannot start with special characters like @, #, $"
        name="input-keys"
        hasFeedback="both"
        placeholder="Placeholder"
        id="custom-validation__input-two-novalidate"
      >
      </sit-input>
      <sit-textarea
        required
        label="Notes"
        hinttext="Custom validation: minimum 5 characters"
        name="textarea-notes"
        hasFeedback
        placeholder="Enter notes"
        id="custom-validation__textarea-two-novalidate"
      >
      </sit-textarea>
      <sit-combo-box
        required
        label="Fruit"
        hinttext="Selection must start with 'A'"
        name="combo-fruit"
        hasFeedback
        placeholder="Select a fruit"
        id="custom-validation__combobox-two-novalidate"
      >
        <sit-combo-box-option value="apple">Apple</sit-combo-box-option>
        <sit-combo-box-option value="apricot">Apricot</sit-combo-box-option>
        <sit-combo-box-option value="banana">Banana</sit-combo-box-option>
        <sit-combo-box-option value="durian">Durian</sit-combo-box-option>
      </sit-combo-box>
      <sit-select
        required
        label="Gender"
        hinttext="Please select a gender"
        name="select-gender"
        hasFeedback
        placeholder="Select a gender"
        id="custom-validation__select-two-novalidate"
      >
        <sit-select-option value="male">Male</sit-select-option>
        <sit-select-option value="female">Female</sit-select-option>
        <sit-select-option value="other">Other</sit-select-option>
        <sit-select-option value="prefer-not-to-say">Prefer not to say</sit-select-option>
      </sit-select>
      <sit-file-upload
        required
        label="Documents"
        hinttext="Max 2 PDF files"
        name="documents"
        hasFeedback
        multiple
        accept=".pdf"
        id="custom-validation__file-upload-two-novalidate"
      >
        Choose Files
      </sit-file-upload>
      <sit-datepicker
        required
        label="Appointment Date"
        hintText="Must be a future date"
        name="appointment-date"
        hasFeedback
        id="custom-validation__datepicker-two-novalidate"
      ></sit-datepicker>
      <sit-radio-group
        required
        label="Gender"
        hintText="Please select a gender"
        name="radio-gender"
        hasFeedback
        id="custom-validation__radio-two-novalidate"
      >
        <sit-radio value="male">Male</sit-radio>
        <sit-radio value="female">Female</sit-radio>
        <sit-radio value="other">Other</sit-radio>
      </sit-radio-group>
      <sit-button type="submit">Submit</sit-button>
      <sit-checkbox-group
        required
        label="Interests"
        hintText="Select at least one interest"
        name="checkbox-interests"
        hasFeedback
        id="custom-validation__checkbox-two-novalidate"
      >
        <sit-checkbox value="sports">Sports</sit-checkbox>
        <sit-checkbox value="music">Music</sit-checkbox>
        <sit-checkbox value="reading">Reading</sit-checkbox>
      </sit-checkbox-group>
      <div class="sit:flex sit:justify-end sit:gap-component-xs">
        <sit-button type="reset" variant="ghost">Reset</sit-button>
        <sit-button type="submit">Submit</sit-button>
      </div>
    </form>
    <script>
      const formTwo = document.getElementById("custom-validation-form_novalidate");
      formTwo.addEventListener("submit", e => {
        e.preventDefault();
        alert(
          "Form submitted successfully despite empty required fields — constraint validation was disabled by the noValidate property."
        );
      });

      const inputTwo = document.getElementById("custom-validation__input-two-novalidate");
      inputTwo.addEventListener("Sit-input", e => {
        if (!/^[^a-zA-Z0-9]/.test(e.target.value)) {
          e.target.setInvalid(false);
        } else {
          e.target.setInvalid(true);
          e.target.invalidFeedback = "This is an invalid message";
        }
      });

      const textareaTwo = document.getElementById("custom-validation__textarea-two-novalidate");
      textareaTwo.addEventListener("Sit-input", e => {
        if (!e.target.value || e.target.value.length >= 5) {
          e.target.setInvalid(false);
        } else {
          e.target.setInvalid(true);
          e.target.invalidFeedback = "Notes must be at least 5 characters long";
        }
      });

      const comboTwo = document.getElementById("custom-validation__combobox-two-novalidate");
      comboTwo.addEventListener("Sit-change", e => {
        if (!e.target.value) {
          e.target.setInvalid(true);
          e.target.invalidFeedback = "Select an option";
        } else if (!e.target.value.startsWith("a")) {
          e.target.setInvalid(true);
          e.target.invalidFeedback = "Selection must start with 'A'";
        } else {
          e.target.setInvalid(false);
        }
      });
      const selectTwo = document.getElementById("custom-validation__select-two-novalidate");
      selectTwo.addEventListener("Sit-change", e => {
        if (!e.target.value) {
          e.target.setInvalid(true);
          e.target.invalidFeedback = "Please select a gender";
        } else {
          e.target.setInvalid(false);
        }
      });
      const fileUploadTwo = document.getElementById("custom-validation__file-upload-two-novalidate");
      fileUploadTwo.addEventListener("Sit-add-files", e => {
        const allFiles = fileUploadTwo.files;
        let isValid = true;
        let errorMsg = "";

        if (allFiles.length > 2) {
          isValid = false;
          errorMsg = "Maximum 2 files allowed";
        }

        for (const file of e.detail) {
          if (!file.name.toLowerCase().endsWith(".pdf")) {
            isValid = false;
            errorMsg = "Only PDF files are allowed";
            break;
          }
        }

        fileUploadTwo.invalidFeedback = errorMsg;
        fileUploadTwo.setInvalid(!isValid);
      });

      fileUploadTwo.addEventListener("Sit-remove-file", e => {
        const remaining = e.detail.files;
        if (remaining.length === 0) {
          fileUploadTwo.invalidFeedback = "At least one file is required";
          fileUploadTwo.setInvalid(true);
        } else {
          fileUploadTwo.setInvalid(false);
        }
      });

      const datepickerTwo = document.getElementById("custom-validation__datepicker-two-novalidate");
      datepickerTwo.addEventListener("Sit-change-date", e => {
        const val = e.target.value;
        if (!val || val === "DD/MM/YYYY") return;
        const [day, month, year] = val.split("/");
        const selected = new Date(Number(year), Number(month) - 1, Number(day));
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selected <= today) {
          e.target.setInvalid(true);
          e.target.invalidFeedback = "Please select a future date";
        } else {
          e.target.setInvalid(false);
        }
      });

      const radioTwo = document.getElementById("custom-validation__radio-two-novalidate");
      radioTwo.addEventListener("Sit-change", e => {
        if (!e.target.value) {
          e.target.setInvalid(true);
          e.target.invalidFeedback = "Please select a gender";
        } else {
          e.target.setInvalid(false);
        }
      });
      const checkboxGroupTwo = document.getElementById("custom-validation__checkbox-two-novalidate");
      checkboxGroupTwo.addEventListener("Sit-change", e => {
        if (!e.target.value) {
          e.target.setInvalid(true);
          e.target.invalidFeedback = "Please select at least one interest";
        } else {
          e.target.setInvalid(false);
        }
      });
    </script>
  `;
};

export const DisableThroughForm = {
  render: DisableValidationByFormTemplate.bind({}),
  name: "Form novalidate attribute",
  args: {},
  parameters: {},
  tags: ["!dev"]
};

export const DisableThroughInput = {
  render: DisableValidationByInputTemplate.bind({}),
  name: "Component noValidate property",
  args: {},
  parameters: {},
  tags: ["!dev"]
};
