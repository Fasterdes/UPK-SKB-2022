import HomeItems from "../component/content/HomeItems";
import Footer from "../component/footer";
import Container from "../util/container";

export default function Home() { 
    return( 
        <> 
            <Container> 
                <HomeItems/>
                <Footer/>
            </Container>
        </>
    )
}