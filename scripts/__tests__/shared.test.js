import { getSitComponents } from "../shared.mjs";
import { fixture, expect, waitUntil } from "@open-wc/testing";

/**
 * {
  kind: 'class',
  description: '',
  name: 'SitTooltip',
  members: [
    { kind: 'field', name: 'myTooltip', type: [Object] },
    {
      kind: 'field',
      name: 'bsTooltip',
      type: [Object],
      default: 'null'
    },
    {
      kind: 'field',
      name: 'content',
      type: [Object],
      default: '""',
      attribute: 'content'
    },
    {
      kind: 'field',
      name: 'placement',
      type: [Object],
      default: '"top"',
      attribute: 'placement'
    },
    {
      kind: 'field',
      name: 'trigger',
      type: [Object],
      default: '"hover focus"',
      attribute: 'trigger'
    },
    { kind: 'field', name: 'closableContainer', type: [Object] },
    { kind: 'field', name: 'popperConfig', type: [Object] },
    { kind: 'field', name: 'tooltipConfig', type: [Object] },
    { kind: 'method', name: 'closeTooltip' },
    {
      kind: 'method',
      name: 'emit',
      parameters: [Array],
      description: 'Emits a custom event with more convenient defaults.',
      inheritedFrom: [Object]
    }
  ],
  attributes: [
    {
      name: 'content',
      type: [Object],
      default: '""',
      fieldName: 'content'
    },
    {
      name: 'placement',
      type: [Object],
      default: '"top"',
      fieldName: 'placement'
    },
    {
      name: 'trigger',
      type: [Object],
      default: '"hover focus"',
      fieldName: 'trigger'
    }
  ],
  superclass: { name: 'SitElement', module: '/src/base/sit-element' },
  tagName: 'sit-tooltip',
  customElement: true,
  modulePath: 'src/Tooltip/sit-tooltip.ts'
}
 */
describe("getSitComponents()", () => {
  const input = [
    {
      modulePath: "src/components/Tooltip/sit-tooltip.ts"
    },
    {
      modulePath: "rubbish/test"
    },
    {
      modulePath: "src/base/test"
    }
  ];

  it("returns an array", () => {
    expect(Array.isArray(getSitComponents(input))).to.be.true;
  });
  it("should output components starting with sit-* only", () => {
    const expected = [{ modulePath: "src/components/Tooltip/sit-tooltip.ts" }];
    expect(JSON.stringify(getSitComponents(input))).to.equal(JSON.stringify(expected));
  });
});
