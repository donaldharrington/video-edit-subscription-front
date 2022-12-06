import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const FaqContent = () => {
    return (
        <div className="faq-area ptb-100">
			<div className="container">
				<div className="section-title">
					<h2>Frequently Asked Questions</h2>
				</div>

				<div className="faq-accordion">
                    <Accordion allowZeroExpanded preExpanded={['a']}>
                        <AccordionItem uuid="a">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Is it really Unlimited Video Editing?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>Yes! We work with companies all over the world to produce video content in the most scalable way possible.</p>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem uuid="b">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    How will I communicate with your team?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>We have our own portal where you can submit a new project, communicate with our team via chat and provide any suggested edits on your videos.</p>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem uuid="c">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Where are you based?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>It's always sunny in Philadelphia which is why we chose Philadelphia, PA as our HQ.</p>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem uuid="d">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    How long does it take to edit my video?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>On average videos, are delivered in 2-4 days. The more footage we have to edit and the complexity of the edit will impact the turnaround time. We'll always let you know ahead of time once we have a chance to review your footage.</p>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem uuid="e">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What happens if I don't like my video?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>We accept .MOV: .MP4 ; JPEG ; PNG and PDF files.</p>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem uuid="f">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    How many Gigabytes (GB's) of footage do you accept per project?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>Depending on the plan you choose, we accept 20 GB's, 30 GB's and 40 GB's of video footage per project.</p>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem uuid="g">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    How many Gigabytes (GB's) of footage do you accept per project?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>Depending on the plan you choose, we accept 20 GB's, 30 GB's and 40 GB's of video footage per project.</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
				</div>
			</div>
		</div>
    )
}

export default FaqContent;