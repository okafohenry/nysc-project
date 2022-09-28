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
                                id="panel1a-header">
                                    <Typography><strong>How do I go about my relocation?</strong></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nevertheless, corps members are given the opportunity to apply for relocation on marital or health grounds while in the orientation camps. Relocation is done electronically. After the camp relocation, all other relocations are carried out three (3) months after the orientation course.<br/><br/>
                                        The corps members must apply online and the State Coordinators appropriately recommend online too before the relocations are effected. However, as a policy, all relocations stop six (6) months into the service year.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                    <Typography><strong>My PPA letter is showing wuse 2, where will I do my biometrics?</strong></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>You are to go to the NYSC secretariat at wuse for your biometrics. </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                    <Typography><strong>​I am a new corp member from camp, I have not spent up to one week after camp, am I to do biometrics? If yes what documents will I carry along?</strong></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>No, you do not need to do your biometrics for the month, the clearance for that month is automatic, however, for your biometrics for the next month, the documents you will be needing are: personal clearance from your place of primary assignment, your schedule slip(printed from your dashboard), and CDS slip(signed or stamped by your CDS officer).
                                        {/* <br/> */}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                    <Typography><strong>I am a new corp member, where do I fill book of life?</strong></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                    The NYSC HQ of the state the corp member is posted to.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                    <Typography><strong>​I redeployed from one state to another where do I go for my registration or where do I go to submit my file?</strong></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                    The NYSC HQ of the state the corp member is posted to.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                    <Typography><strong>How do I get a CDS?</strong></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>Corpers in FCT are assigned to a CDS group from camp, corpers in other state will get their cds from the zonal office or their LGA secretariat, corpers in FCT can also get their cds from their zonal office if they relocated or were not assigned to a cds from camp.</Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                    <Typography><strong>My PPA has rejected me what should I do?</strong></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>Corp members who have a specific place in mind should go to the zonal office or LGA office with the rejection letter from the ppa and the recommendation letter from their preferred place of primary assigned and they will be posted<br/>
                                    Corp members who do not have a recommendation letter should go to the zonal or LGA secretariat with the rejection letter and they will be reposted.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                    <Typography><strong>NYSC posted me to a place that no longer exist, how do I go about it?</strong></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>The corp member is to go back to the zonal office or secretariat to make a compliant and they will be reposted.</Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                    <Typography><strong>Can I put on any cloth other than the approved NYSC Uniform when coming to the secretariat or whenever I want to do biometrics?</strong></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>No. Corp members are expected to be dressed in atleast the 6/7 for their biometrics or when visiting the secretariat, the 6/7 consists of the khaki trouser, a white vest( without any inscription on it), the jungle boot or white sneakers, white socks, nysc belt and Nysc head dress.</Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                    <Typography><strong>I have been maltreated by my boss in the office and he has threaten me to keep quiet,what should I do?</strong></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>Make a complaint to your cds officer and he or she will follow it up.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                    <Typography><strong>What is the difference between NYSC secretariat wuse zone 3, NYSC secretariat maitama , NYSC kubwa camp, NYSC yakubu Gowon house?</strong></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                    - NYSC Secretariat wuse zone 3: the Zone 3 office is a local government secretariat for Corp members who’s LGA is wuse.<br/>
                                    - NYSC secretariat maitama:  The Maitama office is the Nysc HQ.<br/>
                                    - NYSC kubwa camp: It is the Nysc camp where corpers are camped for the first three weeks of their service year.<br/>
                                    - NYSC Yakubu gowon house: National head quarters.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                    <Typography><strong>What is the promising amount or gift for the corp members who will fall in love and wed?</strong></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                    A sum of 500,000 (five hundred thousand naira is given to the intending couple by NYSC)

                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                    <Typography><strong>Should I pay money to change PPA?</strong></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>No, it is totally free and will be done for you by the Nysc officials at your LGA secretariat. After sufficient reasons have been given with a letter of rejection.
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