import { Link } from "react-router-dom";

type Props = {
    selected?: string;
    navlinks: boolean;
}

export const Nav = (props: Props) => {
    const {selected, navlinks} = props;
    return(
        <nav>
            <div className="logo">
                <Link to="/">
                    <div>E-REPORT PLATFORM</div>
                    <div className="small-logo-text">for FCT Corpers</div>
                </Link>
            </div>
            {navlinks ?
            <div>
                <ul className="desktop-nav">
                    <li>
                        <Link to="/" className={selected === "faq"? "":"selected"}>Home</Link>
                    </li>
                    <li>
                        <Link to="faq" className={selected === "faq"? "selected":""}>FAQ</Link>
                    </li>
                </ul>
            </div> : <></>
            }
        </nav>
    );
};