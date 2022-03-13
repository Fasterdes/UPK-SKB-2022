import HomeItems from "../component/content/HomeItems";
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import Container from "../util/container";

export default function Home() { 
    return( 
        <> 
            <Container> 
                <Navbar/>
                <HomeItems/>
                <Footer/>
            </Container>
        </>
    )
}