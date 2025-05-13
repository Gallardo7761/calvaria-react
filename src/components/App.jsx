import Header from "./Header.jsx";
import Container from "./Container.jsx";
import Footer from "./Footer.jsx";

function App() {

  return (
    <>
        <Header></Header>
        <main className="d-flex flex-column gap-3">
            <Container>
              <div className="m-0 p-0 d-flex text-center flex-column justify-content-center">
                <h3>Dirección: miarma.net</h3>
                <h3>Puerto: 7777</h3>
                <h3>Versión: 1.4.4.9</h3>
                <a className="download" href="/downloads/Calvaria.zip"><h3>Descargar Modpack</h3></a>
              </div>
            </Container>
            <Footer />
        </main>

    </>
  )
}

export default App
