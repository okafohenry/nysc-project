import { Link } from "react-router-dom";

type Props = {
    selected?: string;
    navlinks: boolean;
}

export const Nav = (props: Props) => {
    const {selected, navlinks} = props;
    return(
        <nav>
            <div className="logo"><a href="/">logo</a></div>
            {navlinks ?
            <div>
                <ul>
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