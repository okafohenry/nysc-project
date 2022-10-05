import {useState} from 'react';

import { Nav, Footer } from "../components";

export const Report = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [stateCode, setStateCode] = useState("");
    const [subject, setSubject] = useState("");
    const [report, setReport] = useState("");
    const [msg, setMsg] = useState({
        status: "",
        text: ""
    });
    const [codeValidationMsg, setCodeValidationMsg] = useState("");


    const handleNameChange = (e: any) => (
        setName(e.target.value)
    );
    const handleEmailChange = (e: any) => (
        setEmail(e.target.value)
    )
    const handlePhoneChange = (e: any) => (
        setPhone(e.target.value)
    )
    const handleStateCodeChange = (e: any) => { 
        let pattern = /^\w{2}\/\d{2}\w\/\d{4}$/i;
        let isStateCode = pattern.test(e.target.value);
        if(isStateCode){
            setStateCode(e.target.value);
            setCodeValidationMsg("");
        }else{
            setCodeValidationMsg("invalid state code");
        }
    }
    const handleSubjectChange = (e: any) => (
        setSubject(e.target.value)
    )
    const handleReportChange = (e: any) => (
        setReport(e.target.value)
    )

    const handleSubmit = (e: any) => {
        e.preventDefault();
        try{
            if(name !== "" && email !== "" && phone !== "" && stateCode !== "" && subject !== "" && report !== "" ){
                console.log({ name, email, phone, stateCode, subject, report });
                // let res = await fetch('', {
                //     method: "POST",
                //     body: JSON.stringify({ name, email, phone, stateCode, subject, report }),
                // })

                // let resJson = await res.json();
                // if(resJson.status === 200){ 
                //     setMsg({
                //         status: "success",
                //         text: "Report submitted successfully!"
                //     })
                //     setName('');
                //     setEmail('');
                //     setPhone('');
                //     setStateCode('');
                //     setSubject('');
                //     setReport('')
                // }else{
                //     setMsg({
                //         status: 'error',
                //         text: "Some error occurred, try again"
                //     })
                // }
            }
        
        }catch(err){
            console.log(err)
        }
    }

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
                    <form id="report-form" onSubmit={handleSubmit}>
                        {msg ? <div className={msg.status==="success"?'success-msg': msg.status==="error"?'error-msg':''}>{msg.text}</div> : null}
                        <div className="form">
                            <div>
                                <label htmlFor="fullname">Full Name <span className="required">*</span></label><br/>
                                <input 
                                    id="fullname" 
                                    type="text"
                                    placeholder="Samantha Wheeler"
                                    value={name}
                                    onChange={handleNameChange}
                                    required />
                            </div>
                            <div>
                                <label htmlFor="email">Email Address <span className="required">*</span></label><br/>
                                <input 
                                    id="email" 
                                    type="email"
                                    placeholder="samantha@email.com"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required />
                            </div>
                            <div>
                                <label htmlFor="phone">Phone Number <span className="required">*</span></label><br/>
                                <input 
                                    id="phone" 
                                    type="tel"
                                    placeholder="08000000000"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    required />
                            </div>
                            <div>
                                <label htmlFor="state_code">State Code <span className="required">*</span></label><br/>
                                <input 
                                    id="state_code" 
                                    type="text"
                                    placeholder="FC/2..../...."
                                    value={stateCode}
                                    onChange={handleStateCodeChange}
                                    required />
                                {codeValidationMsg ? <div className='error-msg'>{codeValidationMsg}</div> : null} 
                            </div>
                            <div>
                                <label htmlFor="subject">Subject <span className="required">*</span></label><br/>
                                <input 
                                    id="subject" 
                                    type="text"
                                    placeholder="Case of Extortion"
                                    value={subject}
                                    onChange={handleSubjectChange} 
                                    required/>
                            </div>
                            <div>
                                <label htmlFor="report">What are you reporting? <span className="required">*</span></label><br/>
                                <textarea id="report" 
                                    placeholder="Max. 300 Words or paste Link"
                                    value={report}
                                    onChange={handleReportChange}
                                    cols={50}                             
                                    rows={4}
                                    required />
                            </div>
                            <div><button type='submit'>Send</button></div>
                        </div>                        
                    </form>
                </section>
            </main>           
            <Footer />
        </>
    )
}