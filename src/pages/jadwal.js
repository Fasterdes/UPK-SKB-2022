import JadwalItems from "../component/content/JadwalItems";
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import Container from "../util/container";

export default function Jadwal() { 
    return ( 
        <> 
            <Container> 
                <Navbar title="Jadwal Ujian"/>
                <JadwalItems/>
                <Footer/>
            </Container>
        </>
    )
}