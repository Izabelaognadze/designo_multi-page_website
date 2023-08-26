import { Link } from "@tanstack/react-router";
import logoLight from "../../assets/about/desktop/bg-pattern-hero-about-desktop.svg"

const Locations = () => {
    return (
        <body>
            <div className="container">
                <div className="flex flex-row justify-between mt-5">
                    <Link to="/"><img src={logoLight} alt="" /></Link>
                    <div className="hidden md:flex space-between space-x-5">
                        <Link to="/ourCompany">locations</Link>
                    </div>
                </div>
            </div>
        </body>
    )
};
export default Locations;