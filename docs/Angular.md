# Angular

Web components are [fully supported in Angular](https://custom-elements-everywhere.com/#angular) and can be used directly.

## Installation

Locally install the library or use CDN by adding the script tag to entry point of the Angular application (i.e. index.html). Follow instructions in `Installation` and `Imports` documentation section

## Configuration

Angular requires `CUSTOM_ELEMENTS_SCHEMA` to recognise custom element tags. Add it to the `schemas` array of any standalone component that uses Canvas web components.

```typescript
// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {}
```

## Importing the library

Import the library once in your root component (or in `main.ts`) to register all custom elements globally:

```typescript
// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import "@sit-canvas/canvas-web-component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {}
```

Alternatively, import individual components for smaller bundles:

```typescript
// app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import "@sit-canvas/canvas-web-component/components/Button";
import "@sit-canvas/canvas-web-component/components/Alert";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {}
```

## Usage

See Angular's documentation on [using custom elements](https://angular.dev/guide/elements).

### Binding Attributes and Properties

Use Angular's property binding syntax to bind attributes and properties to Canvas web components:

```typescript
// footer.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FooterComponent {
  footerTitle = "Canvas";
  footerDescription = "this is a description";
  lastUpdatedDate = new Date().toDateString();
  links = [
    {
      title: "Column 1",
      links: [
        { href: "#1", label: "About Us" },
        { href: "#2", label: "This is a super long link" }
      ]
    },
    {
      title: "Column 2",
      links: [
        { href: "#1", label: "About Us" },
        { href: "#2", label: "This is a super long link" }
      ]
    }
  ];
}
```

```html
<!-- footer.component.html -->
<sit-footer
  [title]="footerTitle"
  [description]="footerDescription"
  [lastUpdatedDate]="lastUpdatedDate"
  [links]="links"
></sit-footer>
```

### Listening to Events

Use Angular's event binding syntax with Canvas custom events:

```typescript
// input.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InputComponent {
  inputValue = "defaultValue";

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;
  }
}
```

```html
<!-- input.component.html -->
<sit-input
  [value]="inputValue"
  (sit-input)="onInput($event)"
  placeholder="Enter your name"
></sit-input>
<div>Name: {{ inputValue }}</div>
```

### Using Slots

Pass content into named or default slots using standard HTML:

```html
<!-- sidenav.component.html -->
<sit-sidenav>
  <sit-sidenav-item>
    <span slot="title">SideNav Item #1</span>
    <sit-sidenav-link>sit-sidenav-link</sit-sidenav-link>
    <sit-sidenav-link href="#" disabled>sit-sidenav-link</sit-sidenav-link>
    <sit-sidenav-link href="#">sit-sidenav-link</sit-sidenav-link>
  </sit-sidenav-item>
  <sit-sidenav-item>
    <span slot="title">SideNav Item #2</span>
    <sit-sidenav-link href="#">sit-sidenav-link</sit-sidenav-link>
    <sit-sidenav-link href="#">sit-sidenav-link</sit-sidenav-link>
  </sit-sidenav-item>
  <sit-sidenav-item href="#">
    <span slot="title">SideNav Item #3</span>
  </sit-sidenav-item>
</sit-sidenav>
```

### Referencing sit-web-components with ViewChild

Use `ViewChild` with a template reference to access component properties and methods programmatically:

```typescript
// alert.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from "@angular/core";
import SitAlert from "@sit-canvas/canvas-web-component/components/Alert/sit-alert.js";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlertComponent {
  @ViewChild("alert")
  alert?: ElementRef<SitAlert>;

  showAlert() {
    if (this.alert) {
      this.alert.nativeElement.show = true;
    }
  }

  closeAlert() {
    this.alert?.nativeElement.close();
  }
}
```

```html
<!-- alert.component.html -->
<sit-button (click)="showAlert()">Show Alert</sit-button>
<sit-button (click)="closeAlert()">Close Alert</sit-button>
<sit-alert #alert>This is an alert</sit-alert>
```
