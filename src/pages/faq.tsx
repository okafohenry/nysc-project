import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

import { Footer, Nav } from "../components";

export const Faq = () => {
    return(
        <>
            <Nav navlinks={true} selected="faq" />
            <main>
                <section className="background">  
                    <div className="overlay"></div>                  
                    <div className="background-text-overlay">
                        <h1>Frequently Asked Questions</h1>
                    </div>
                </section>
                <section>
                    <div className="info-section">
                        <div className="header-text">
                            <h2>Common Questions asked by corp members in the FCT</h2>
                            <p><strong>Note:</strong></p>
                            <ul>
                                <li>Relocation is Free.</li>
                                <li>Posting is Free.</li>
                                <li>You deserve to be treated right in your place of primary assignment.</li>
                            </ul>
                        </div>
                        <div className="accordion">
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                    <Typography><strong>How do I go about my relocation?</strong></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nevertheless, corps members are given the opportunity to apply for relocation on marital or health grounds while in the orientation camps. Relocation is done electronically. After the camp relocation, all other relocations are carried out three (3) months after the orientation course.<br/>
                                        The corps members must apply online and the State Coordinators appropriately recommend online too before the relocations are effected. However, as a policy, all relocations stop six (6) months into the service year.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                    <Typography><strong>How do I go about my relocation?</strong></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nevertheless, corps members are given the opportunity to apply for relocation on marital or health grounds while in the orientation camps. Relocation is done electronically. After the camp relocation, all other relocations are carried out three (3) months after the orientation course.<br/>
                                        The corps members must apply online and the State Coordinators appropriately recommend online too before the relocations are effected. However, as a policy, all relocations stop six (6) months into the service year.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                    <Typography><strong>How do I go about my relocation?</strong></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nevertheless, corps members are given the opportunity to apply for relocation on marital or health grounds while in the orientation camps. Relocation is done electronically. After the camp relocation, all other relocations are carried out three (3) months after the orientation course.<br/>
                                        The corps members must apply online and the State Coordinators appropriately recommend online too before the relocations are effected. However, as a policy, all relocations stop six (6) months into the service year.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                    <Typography><strong>How do I go about my relocation?</strong></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nevertheless, corps members are given the opportunity to apply for relocation on marital or health grounds while in the orientation camps. Relocation is done electronically. After the camp relocation, all other relocations are carried out three (3) months after the orientation course.<br/>
                                        The corps members must apply online and the State Coordinators appropriately recommend online too before the relocations are effected. However, as a policy, all relocations stop six (6) months into the service year.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}