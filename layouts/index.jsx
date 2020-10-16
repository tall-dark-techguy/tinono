import Footer from '../components/footer';
import Head from '../components/head';
import NavBar from "../components/nav"

export default function Layout({children}) {
    return <>
        <Head />
        <NavBar />
        {children}
        <Footer />
    </>
}