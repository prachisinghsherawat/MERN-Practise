import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Navbar } from "../Navbar/Navbar"
import "./Header.css"


export const Header = () => {

    return(

        <>

        <div className="mainDiv">

        <div className="fonts">

            <div>
            <FontAwesomeIcon icon="fa-sharp fa-solid fa-star" />
            </div>

            <div></div>

            <div>
            <FontAwesomeIcon icon="fa-solid fa-person-swimming" />
            </div>

            <div>
            <FontAwesomeIcon icon="fa-sharp fa-solid fa-person-biking" />
            </div>

            <div>
            <FontAwesomeIcon icon="fa-solid fa-horse" />
            </div>

            <div>
            <FontAwesomeIcon icon="fa-sharp fa-solid fa-ufo-beam" />
            </div>

            <div>
            <FontAwesomeIcon icon="fa-regular fa-golf-club" />
            </div>

            <div></div>

            <div>
            <FontAwesomeIcon icon="fa-solid fa-ship" />
            </div>

        </div>

        <Navbar />

        </div>

        </>
    )
}