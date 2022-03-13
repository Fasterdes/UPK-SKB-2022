import { Link } from "react-router-dom"
import tw from "twin.macro"

import Arrow from '../img/arrow.svg'

const Title = tw.h1`text-2xl font-bold text-center text-white`

const Nav = tw.nav`flex items-center gap-10 bg-blue h-24 w-full px-4`

export default function Navbar(props) { 
    return( 
        <> 
            <Nav> 
               <Link to='/'> 
                    <img src={Arrow} alt="" />
               </Link>

            <Title>{props.title}</Title>
            </Nav>
        </>
    )
}