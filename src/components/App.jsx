import Header from "./Header.jsx";
import Container from "./Container.jsx";
import DownloadButton from "./DownloadButton.jsx";
import Footer from "./Footer.jsx";

function App() {

  return (
    <>
        <Header></Header>
        <main className="d-flex flex-column gap-3">
            <Container>
                <h2>Información del servidor</h2>
                <ul>
                    <li><h4>Dirección: miarma.net</h4></li>
                    <li><h4>Puerto: 7777</h4></li>
                    <li><h4>Versión: 1.4.4.9</h4></li>
                </ul>
                <DownloadButton />
            </Container>
            <Footer />
        </main>

    </>
  )
}

export default App
