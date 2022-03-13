import PelaksanaanItems from "../component/content/PelaksanaanItems";
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import Container from "../util/container";

export default function Pelaksanaan() { 
    return ( 
        <> 
            <Container>
                <Navbar/>
                <PelaksanaanItems/> 
                <Footer/>
            </Container>
        </>
    )
}