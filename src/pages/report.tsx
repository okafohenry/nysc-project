import { Nav, Footer } from "../components";

export const Report = () => {
    return(
        <>
            <Nav navlinks={true} selected="home" />
            <main>
                <section className="background">
                    <div className="overlay"></div>
                    <div className="background-text-overlay">
                        <h2>Servicom strives to  Improve Service Excellence In Public Services.</h2>
                        <p>Are you a Corp Member in the FCT and want to file a report?</p>
                        <div className="report-btn"><a href="#report-form">File a Report</a></div>
                    </div>
                </section>
                <section className="report-form">
                    <h2>File your report here</h2>
                    <form id="report-form">
                        <div className="form">
                            <div>
                                <label htmlFor="fullname">Full Name <span className="required">*</span></label><br/>
                                <input id="fullname" placeholder="Samantha Wheeler" />
                            </div>
                            <div>
                                <label htmlFor="email">Email Address <span className="required">*</span></label><br/>
                                <input id="email" placeholder="samantha@email.com" />
                            </div>
                            <div>
                                <label htmlFor="phone">Phone Number <span className="required">*</span></label><br/>
                                <input id="phone" placeholder="08000000000" />
                            </div>
                            <div>
                                <label htmlFor="state_code">State Code <span className="required">*</span></label><br/>
                                <input id="state_code" placeholder="FC/2..../...." />
                            </div>
                            <div>
                                <label htmlFor="subject">Subject <span className="required">*</span></label><br/>
                                <input id="subject" placeholder="Case of Extortion" />
                            </div>
                            <div>
                                <label htmlFor="report">What are you reporting? <span className="required">*</span></label><br/>
                                <textarea id="report" 
                                    placeholder="Max. 300 Words or paste Link"
                                    cols={50}                             
                                    rows={4}
                                    required />
                            </div>
                            <div><button>Send</button></div>
                        </div>                        
                    </form>
                </section>
            </main>           
            <Footer />
        </>
    )
}