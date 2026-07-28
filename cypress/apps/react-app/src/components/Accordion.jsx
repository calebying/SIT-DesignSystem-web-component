import SitAccordion from "@sit-canvas/canvas-web-component/react/accordion";
import SitAccordionItem from "@sit-canvas/canvas-web-component/react/accordion-item";

export const Accordion = () => {
    return (
        <>
            <SitAccordion accordionclasses="mb-4">
                <SitAccordionItem>
                    <div  slot="header">This is a solo accordion</div>
                    <span slot="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.</span>
                </SitAccordionItem>
            </SitAccordion>
            <SitAccordion>
                <SitAccordionItem>
                    <div  slot="header">This is an accordion</div>
                    <span slot="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.</span>
                </SitAccordionItem>
                <SitAccordionItem>
                    <div  slot="header">Accordion 1</div>
                    <span slot="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.</span>
                </SitAccordionItem>
                <SitAccordionItem open="">
                    <div slot="header">Accordion 2</div>
                    <span slot="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.</span>
                </SitAccordionItem>
                <SitAccordionItem>
                    <div  slot="header">Accordion 3</div>
                    <span slot="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.</span>
                </SitAccordionItem>
            </SitAccordion>
        </>
    )
};
