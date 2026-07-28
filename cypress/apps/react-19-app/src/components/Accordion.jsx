
export const Accordion = () => {
    return (
        <>
            <sit-accordion accordionclasses="mb-4">
                <sit-accordion-item>
                    <div  slot="header">This is a solo accordion</div>
                    <span slot="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.</span>
                </sit-accordion-item>
            </sit-accordion>
            <sit-accordion>
                <sit-accordion-item>
                    <div  slot="header">This is an accordion</div>
                    <span slot="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.</span>
                </sit-accordion-item>
                <sit-accordion-item>
                    <div  slot="header">Accordion 1</div>
                    <span slot="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.</span>
                </sit-accordion-item>
                <sit-accordion-item open="">
                    <div slot="header">Accordion 2</div>
                    <span slot="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.</span>
                </sit-accordion-item>
                <sit-accordion-item>
                    <div  slot="header">Accordion 3</div>
                    <span slot="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta eaque fugit fuga distinctio? Eum.</span>
                </sit-accordion-item>
            </sit-accordion>
        </>
    )
};
