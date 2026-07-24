import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const Template = ({ dataLength, currentPage, itemsPerPage, variant, size, navigation }) => {
  return html`
    <sit-pagination
      dataLength=${ifDefined(dataLength)}
      currentPage=${ifDefined(currentPage)}
      itemsPerPage=${ifDefined(itemsPerPage)}
      variant=${ifDefined(variant)}
      navigation=${ifDefined(navigation)}
      size=${ifDefined(size)}
    ></sit-pagination>
  `;
};

export const args = { dataLength: "50" };
export const parameters = {};

export const play = undefined;
