import Footer from "../../Components/Footer/Index";
import Main from "../../Components/Main/Index";
import NavItems from "../../Components/NavItems/Index";
import Navbar from "../../Components/Navbar/Index";

export default function Home() {
    return (
        <>
            <Navbar>
                <NavItems />
            </Navbar>

            <Main>
                Children
            </Main>

            <Footer/>
        </>
    )
}