"use client";

import { useState, useRef, useEffect } from "react";

export default function FormPreviewPage() {
  const [fullName, setFullName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [age, setAge] = useState("28");
  const [feedback, setFeedback] = useState("This is some default feedback text. You can edit it freely.");
  const [country, setCountry] = useState("sg");
  const [department, setDepartment] = useState("design");
  const [skills, setSkills] = useState("design;engineering");
  const [dietary, setDietary] = useState("vegetarian,vegan");
  const [priority, setPriority] = useState("medium");
  const [appointmentDate, setAppointmentDate] = useState("06/04/2026");
  const [fileName, setFileName] = useState("");
  const [quantity, setQuantity] = useState("5");
  const [notifications, setNotifications] = useState(true);

  const fullNameRef = useRef<any>(null);
  const emailRef = useRef<any>(null);
  const ageRef = useRef<any>(null);
  const feedbackRef = useRef<any>(null);
  const countryRef = useRef<any>(null);
  const departmentRef = useRef<any>(null);
  const skillsRef = useRef<any>(null);
  const dietaryRef = useRef<any>(null);
  const priorityRef = useRef<any>(null);
  const datepickerRef = useRef<any>(null);
  const fileUploadRef = useRef<any>(null);
  const quantityRef = useRef<any>(null);
  const switchRef = useRef<any>(null);

  useEffect(() => {
    const el = fullNameRef.current;
    if (!el) return;
    const handler = (e: Event) => setFullName((e.target as any).value);
    el.addEventListener("sit-change", handler);
    return () => el.removeEventListener("sit-change", handler);
  }, []);

  useEffect(() => {
    const el = emailRef.current;
    if (!el) return;
    const handler = (e: Event) => setEmail((e.target as any).value);
    el.addEventListener("sit-change", handler);
    return () => el.removeEventListener("sit-change", handler);
  }, []);

  useEffect(() => {
    const el = ageRef.current;
    if (!el) return;
    const handler = (e: Event) => setAge((e.target as any).value);
    el.addEventListener("sit-change", handler);
    return () => el.removeEventListener("sit-change", handler);
  }, []);

  useEffect(() => {
    const el = feedbackRef.current;
    if (!el) return;
    const handler = (e: Event) => setFeedback((e.target as any).value);
    el.addEventListener("sit-change", handler);
    return () => el.removeEventListener("sit-change", handler);
  }, []);

  useEffect(() => {
    const el = countryRef.current;
    if (!el) return;
    const handler = (e: Event) => setCountry((e.target as any).value);
    el.addEventListener("sit-change", handler);
    return () => el.removeEventListener("sit-change", handler);
  }, []);

  useEffect(() => {
    const el = departmentRef.current;
    if (!el) return;
    const handler = (e: Event) => setDepartment((e.target as any).value);
    el.addEventListener("sit-change", handler);
    return () => el.removeEventListener("sit-change", handler);
  }, []);

  useEffect(() => {
    const el = skillsRef.current;
    if (!el) return;
    const handler = (e: Event) => setSkills((e.target as any).value);
    el.addEventListener("sit-change", handler);
    return () => el.removeEventListener("sit-change", handler);
  }, []);

  useEffect(() => {
    const el = dietaryRef.current;
    if (!el) return;
    const handler = (e: Event) => setDietary((e.target as any).value);
    el.addEventListener("sit-change", handler);
    return () => el.removeEventListener("sit-change", handler);
  }, []);

  useEffect(() => {
    const el = priorityRef.current;
    if (!el) return;
    const handler = (e: Event) => setPriority((e as CustomEvent).detail.value);
    el.addEventListener("sit-change", handler);
    return () => el.removeEventListener("sit-change", handler);
  }, []);

  useEffect(() => {
    const el = datepickerRef.current;
    if (!el) return;
    const handler = (e: Event) => setAppointmentDate((e.target as any).value);
    el.addEventListener("sit-change-date", handler);
    return () => el.removeEventListener("sit-change-date", handler);
  }, []);

  useEffect(() => {
    const el = fileUploadRef.current;
    if (!el) return;
    const handler = (e: Event) => setFileName((e.target as any).files?.[0]?.name ?? "");
    el.addEventListener("sit-change", handler);
    return () => el.removeEventListener("sit-change", handler);
  }, []);

  useEffect(() => {
    const el = quantityRef.current;
    if (!el) return;
    const handler = (e: Event) => setQuantity((e.target as any).value);
    el.addEventListener("sit-change", handler);
    return () => el.removeEventListener("sit-change", handler);
  }, []);

  useEffect(() => {
    const el = switchRef.current;
    if (!el) return;
    const handler = (e: Event) => setNotifications((e as CustomEvent).detail.checked);
    el.addEventListener("sit-change", handler);
    return () => el.removeEventListener("sit-change", handler);
  }, []);

  return (
    <main>
      <h1>Form Components Preview</h1>
      <p>All Canvas form components rendered with a default value. Change any field to see the value update below it.</p>

      <hr />

      <section>
        <h2>Input — Text</h2>
        <sit-input
          ref={fullNameRef}
          type="text"
          label="Full Name"
          hintText="Enter your full name as per NRIC"
          name="fullName"
          value="John Doe"
          placeholder="e.g. Tan Ah Kow"
          suppressHydrationWarning
        ></sit-input>
        <div>Value: {fullName}</div>
      </section>

      <section>
        <h2>Input — Email</h2>
        <sit-input
          ref={emailRef}
          type="email"
          label="Email Address"
          hintText="We will send a confirmation to this address"
          name="email"
          value="john.doe@example.com"
          placeholder="you@example.com"
          suppressHydrationWarning
        ></sit-input>
        <div>Value: {email}</div>
      </section>

      <section>
        <h2>Input — Number</h2>
        <sit-input
          ref={ageRef}
          type="number"
          label="Age"
          name="age"
          value="28"
          min="0"
          max="120"
          placeholder="0"
          suppressHydrationWarning
        ></sit-input>
        <div>Value: {age}</div>
      </section>

      <section>
        <h2>Textarea</h2>
        <sit-textarea
          ref={feedbackRef}
          label="Feedback"
          hintText="Tell us what you think"
          name="feedback"
          rows="4"
          value="This is some default feedback text. You can edit it freely."
          placeholder="Enter your feedback here"
          maxlength="500"
          suppressHydrationWarning
        ></sit-textarea>
        <div>Value: {feedback}</div>
      </section>

      <section>
        <h2>Select</h2>
        <sit-select
          ref={countryRef}
          label="Country"
          hintText="Select your country of residence"
          name="country"
          placeholder="Select a country"
          value="sg"
          suppressHydrationWarning
        >
          <sit-select-option value="sg" suppressHydrationWarning>Singapore</sit-select-option>
          <sit-select-option value="my" suppressHydrationWarning>Malaysia</sit-select-option>
          <sit-select-option value="au" suppressHydrationWarning>Australia</sit-select-option>
          <sit-select-option value="uk" suppressHydrationWarning>United Kingdom</sit-select-option>
        </sit-select>
        <div>Value: {country}</div>
      </section>

      <section>
        <h2>Combo Box — Single Select</h2>
        <sit-combo-box
          ref={departmentRef}
          label="Department"
          hintText="Select your department"
          name="department"
          placeholder="Search or select"
          value="design"
          suppressHydrationWarning
        >
          <sit-combo-box-option value="engineering" suppressHydrationWarning>Engineering</sit-combo-box-option>
          <sit-combo-box-option value="design" suppressHydrationWarning>Design</sit-combo-box-option>
          <sit-combo-box-option value="product" suppressHydrationWarning>Product</sit-combo-box-option>
          <sit-combo-box-option value="operations" suppressHydrationWarning>Operations</sit-combo-box-option>
        </sit-combo-box>
        <div>Value: {department}</div>
      </section>

      <section>
        <h2>Combo Box — Multi Select</h2>
        <sit-combo-box
          ref={skillsRef}
          label="Skills"
          hintText="Select all that apply"
          name="skills"
          placeholder="Search or select"
          value="design;engineering"
          multiselect
          clearable
          suppressHydrationWarning
        >
          <sit-combo-box-option value="engineering" suppressHydrationWarning>Engineering</sit-combo-box-option>
          <sit-combo-box-option value="design" suppressHydrationWarning>Design</sit-combo-box-option>
          <sit-combo-box-option value="product" suppressHydrationWarning>Product</sit-combo-box-option>
          <sit-combo-box-option value="operations" suppressHydrationWarning>Operations</sit-combo-box-option>
        </sit-combo-box>
        <div>Value: {skills}</div>
      </section>

      <section>
        <h2>Checkbox Group</h2>
        <sit-checkbox-group
          ref={dietaryRef}
          label="Dietary Requirements"
          hintText="Check all that apply"
          name="dietary"
          suppressHydrationWarning
        >
          <sit-checkbox value="vegetarian" checked suppressHydrationWarning>Vegetarian</sit-checkbox>
          <sit-checkbox value="halal" suppressHydrationWarning>Halal</sit-checkbox>
          <sit-checkbox value="vegan" checked suppressHydrationWarning>Vegan</sit-checkbox>
          <sit-checkbox value="gluten-free" suppressHydrationWarning>Gluten-free</sit-checkbox>
        </sit-checkbox-group>
        <div>Value: {dietary}</div>
      </section>

      <section>
        <h2>Radio Group</h2>
        <sit-radio-group
          ref={priorityRef}
          label="Priority"
          hintText="Select one option"
          name="priority"
          value="medium"
          suppressHydrationWarning
        >
          <sit-radio value="low" suppressHydrationWarning>Low</sit-radio>
          <sit-radio value="medium" suppressHydrationWarning>Medium</sit-radio>
          <sit-radio value="high" suppressHydrationWarning>High</sit-radio>
        </sit-radio-group>
        <div>Value: {priority}</div>
      </section>

      <section>
        <h2>Datepicker</h2>
        <sit-datepicker
          ref={datepickerRef}
          label="Appointment Date"
          hintText="Select your preferred date"
          name="appointmentDate"
          dateFormat="DD/MM/YYYY"
          mode="single"
          value="06/04/2026"
          suppressHydrationWarning
        ></sit-datepicker>
        <div>Value: {appointmentDate}</div>
      </section>

      <section>
        <h2>File Upload</h2>
        <sit-file-upload
          ref={fileUploadRef}
          name="attachment"
          accept=".pdf,.jpg,.png"
          suppressHydrationWarning
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
          </svg>
          Choose a file
        </sit-file-upload>
        <div>Value: {fileName || "(no file selected)"}</div>
      </section>

      <section>
        <h2>Quantity Toggle</h2>
        <sit-quantity-toggle
          ref={quantityRef}
          label="Quantity"
          name="quantity"
          step="1"
          min="0"
          max="99"
          defaultValue="5"
          buttonVariant="primary"
          suppressHydrationWarning
        ></sit-quantity-toggle>
        <div>Value: {quantity}</div>
      </section>

      <section>
        <h2>Switch</h2>
        <sit-switch
          ref={switchRef}
          name="notifications"
          value="on"
          checked
          suppressHydrationWarning
        >
          Enable email notifications
        </sit-switch>
        <div>Value: {notifications ? "on" : "off"}</div>
      </section>
    </main>
  );
}
