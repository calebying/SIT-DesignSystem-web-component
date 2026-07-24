import { html } from "lit";

export default {
  title: "Form/Validation"
};

const ConstraintValidationTemplate = args => {
  return html`
    <form id="validation-form_constraint-validation" class="d-flex-column">
      <sit-input
        label="First Name"
        hinttext="type Sarah"
        name="firstName"
        required
        hasFeedback="both"
        placeholder="Placeholder"
        pattern="Sarah"
      >
      </sit-input>
      <sit-datepicker required hasFeedback name="appointmentDate" label="Appointment date"></sit-datepicker>
      <sit-select
        required
        hasFeedback
        name="favouriteAnimal"
        menuList='[
      { "label": "Aligator", "value": "1" },
      { "label": "Bear", "value": "2" },
      { "label": "Cat", "value": "3" },
      { "label": "Dog", "value": "4" },
      { "label": "Elephant", "value": "5" },
      { "label": "Frog", "value": "6" },
      { "label": "Goose", "value": "7" },
      { "label": "Hen", "value": "8" }
    ]'
      ></sit-select>
      <sit-combo-box
        required
        hasFeedback
        name="countryOfBirth"
        label="Country of birth"
        menuList='[
      { "label": "Singapore", "value": "1" },
      { "label": "Thailand", "value": "2" },
      { "label": "Malaysia", "value": "3" },
      { "label": "Philippines", "value": "4" },
      { "label": "Japan", "value": "5" },
      { "label": "Laos", "value": "6" },
      { "label": "Vietnam", "value": "7" },
      { "label": "China", "value": "8" }
    ]'
        placeholder="Choose a country"
      ></sit-combo-box>
      <sit-quantity-toggle
        label="Number of dependents"
        name="dependentCount"
        min="1"
        max="10"
        hinttext="Input number 1 to 10 only"
        hasFeedback="both"
      ></sit-quantity-toggle>
      <sit-checkbox-group hasFeedback hintText="Check at least one option" required label="Food preference" name="food">
        <sit-checkbox value="vegetarian">vegetarian</sit-checkbox>
        <sit-checkbox value="halal">halal</sit-checkbox>
        <sit-checkbox value="na">no preference</sit-checkbox>
      </sit-checkbox-group>

      <sit-radio-group hasFeedback name="gender" required label="Gender">
        <sit-radio value="female">Female</sit-radio>
        <sit-radio value="male">Male</sit-radio>
      </sit-radio-group>

      <sit-textarea
        name="comments"
        minlength="3"
        required
        hasFeedback
        resize="auto"
        label="Comments"
        hintText="Required to fill with minimum length of 3"
      ></sit-textarea>
      <sit-file-upload required label="Supporting documents" multiple name="documents" hasFeedback
        >File upload</sit-file-upload
      >
      <sit-checkbox name="consentA" value="consentA" required hasFeedback="both">I consent to ...</sit-checkbox>
      <div class="d-flex-row">
        <sit-button type="submit" id="submit">Submit</sit-button>
        <sit-button type="reset" id="reset" variant="ghost">Reset</sit-button>
      </div>
    </form>
  `;
};

export const ConstraintValidation = {
  render: ConstraintValidationTemplate.bind({}),
  name: "Constraint validation",
  args: {},
  parameters: {},
  tags: ["!dev"]
};

const FormDataTemplate = args => {
  return html`
    <form id="validation-form_getting-data" class="d-flex-column">
      <sit-input
        label="First Name"
        hinttext="type Sarah"
        name="firstName"
        required
        hasFeedback="both"
        placeholder="Placeholder"
        pattern="Sarah"
      >
      </sit-input>
      <sit-quantity-toggle
        label="Number of dependents"
        name="dependentCount"
        min="1"
        max="10"
        hinttext="Input number 1 to 10 only"
        hasFeedback="both"
      ></sit-quantity-toggle>
      <sit-datepicker required hasFeedback name="appointmentDate" label="Appointment date"></sit-datepicker>
      <sit-select
        required
        hasFeedback
        name="favouriteAnimal"
        menuList='[
      { "label": "Aligator", "value": "1" },
      { "label": "Bear", "value": "2" },
      { "label": "Cat", "value": "3" },
      { "label": "Dog", "value": "4" },
      { "label": "Elephant", "value": "5" },
      { "label": "Frog", "value": "6" },
      { "label": "Goose", "value": "7" },
      { "label": "Hen", "value": "8" }
    ]'
      ></sit-select>
      <sit-combo-box
        required
        hasFeedback
        name="countryOfBirth"
        label="Country of birth"
        menuList='[
      { "label": "Singapore", "value": "1" },
      { "label": "Thailand", "value": "2" },
      { "label": "Malaysia", "value": "3" },
      { "label": "Philippines", "value": "4" },
      { "label": "Japan", "value": "5" },
      { "label": "Laos", "value": "6" },
      { "label": "Vietnam", "value": "7" },
      { "label": "China", "value": "8" }
    ]'
        placeholder="Choose a country"
      ></sit-combo-box>
      <sit-checkbox-group hasFeedback hintText="Check at least one option" required label="Food preference" name="food">
        <sit-checkbox value="vegetarian">vegetarian</sit-checkbox>
        <sit-checkbox value="halal">halal</sit-checkbox>
        <sit-checkbox value="na">no preference</sit-checkbox>
      </sit-checkbox-group>

      <sit-radio-group hasFeedback name="gender" required label="Gender">
        <sit-radio value="female">Female</sit-radio>
        <sit-radio value="male">Male</sit-radio>
      </sit-radio-group>

      <sit-textarea
        name="comments"
        minlength="3"
        required
        hasFeedback
        resize="auto"
        label="Comments"
        hintText="Required to fill with minimum length of 3"
      ></sit-textarea>
      <sit-file-upload
        id="file-upload-form-data"
        required
        label="Supporting documents"
        multiple
        name="documents"
        hasFeedback
        >File upload</sit-file-upload
      >
      <sit-checkbox name="consentA" value="consentA" required hasFeedback="both">I consent to ...</sit-checkbox>

      <div class="d-flex-row">
        <sit-button type="submit" id="submit">Submit</sit-button>
        <sit-button type="reset" id="reset" variant="ghost">Reset</sit-button>
      </div>
    </form>

    <script>
      const form = document.querySelector("#validation-form_getting-data");

      form.addEventListener("submit", event => {
        let data = {
          firstName: "",
          dependentCount: 0,
          appointmentDate: "",
          countryOfBirth: "",
          consentA: false,
          gender: "",
          comments: "",
          food: ""
        };
        event.preventDefault();
        const formData = new FormData(event.target);
        data.firstName = formData.get("firstName");
        data.dependentCount = formData.get("dependentCount");
        data.appointmentDate = formData.get("appointmentDate");
        data.countryOfBirth = formData.get("countryOfBirth");
        data.consentA = formData.get("consentA") === "on";
        data.gender = formData.get("gender");
        data.comments = formData.get("comments");
        data.food = formData.get("food");
        const fileInput = document.getElementById("file-upload-form-data");
        for (let i = 0; i < fileInput.selectedFiles.length; i++) {
          const fileName = "file" + i;
          formData.append(fileName, fileInput.selectedFiles[i]);
          data[fileName] = JSON.stringify(fileInput.selectedFiles[i].name);
        }
        alert(JSON.stringify(data));
        // submit FormData
      });
    </script>
  `;
};

export const FormData = {
  render: FormDataTemplate.bind({}),
  name: "Get values through FormData",
  args: {},
  parameters: {},
  tags: ["!dev"]
};
