'use client';

import { CanvasAccordion, CanvasAccordionItem } from '@sit-canvas/canvas-web-component/react';

export const Accordion = () => {
  return (
    <>
      <CanvasAccordion density="spacious">
        <CanvasAccordionItem>
          <div className="m-0" slot="header">This is a solo accordion</div>
          <span slot="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.
          </span>
        </CanvasAccordionItem>
      </CanvasAccordion>
      <CanvasAccordion>
        <CanvasAccordionItem>
          <div className="m-0" slot="header">This is an accordion</div>
          <span slot="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.
          </span>
        </CanvasAccordionItem>
        <CanvasAccordionItem>
          <div className="m-0" slot="header">Accordion 1</div>
          <span slot="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.
          </span>
        </CanvasAccordionItem>
        <CanvasAccordionItem open>
          <div className="m-0" slot="header">Accordion 2</div>
          <span slot="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.
          </span>
        </CanvasAccordionItem>
        <CanvasAccordionItem>
          <div className="m-0" slot="header">Accordion 3</div>
          <span slot="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.
          </span>
        </CanvasAccordionItem>
      </CanvasAccordion>
    </>
  );
};
