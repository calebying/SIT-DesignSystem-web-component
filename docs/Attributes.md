# Attributes and properties

## String

The web components uses attributes to set the properties. For example, the variant attribute is used to set the variant property of the button and in turn alters its class and changes its colour

```html
<sit-button variant="secondary"></sit-button>
```

## Boolean

Boolean properties are usually false by default. To set it to true, add it as an attribute with no value on the custom element

```html
<sit-accordion allowMultiple> ... </sit-accordion>

<sit-input disabled></sit-input>
```

## Objects, arrays, and functions

Functions have to be passed in via javascript. For attributes that accepts Objects or Arrays, you can pass in as a JSON string or via javascript.

```html
//via JSON string
<sit-table rowHeader='["Name", "BirthDate"]'></sit-table>

// via Javascript
<script>
  const table = document.querySelector("sit-table");
  table.rowHeader = ["Name", "Birthdate"];
</script>
```
