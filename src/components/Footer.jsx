import Container from "./Container.jsx";

export default function Footer() {
    return (
        <Container>
            <div className="d-flex justify-content-center mb-2">
                <h4 className="m-0 p-0">
                    <a
                        className="footer-link"
                        rel="cc:attributionURL"
                        href="https://miarma.net/miarmacraft"
                    >
                        Calvaria
                    </a>{" "}
                    by{" "}
                    <a
                        className="footer-link"
                        rel="cc:attributionURL dct:creator"
                        href="https://miarma.net"
                    >
                        miarma
                    </a>{" "}
                    is licensed under{" "}
                    <a
                        className="footer-link"
                        href="https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1"
                        target="_blank"
                        rel="license noopener noreferrer"
                        style={{ display: "inline-block" }}
                    >
                        CC BY-NC-ND 4.0
                        <img
                            style={{
                                height: "22px",
                                marginLeft: "3px",
                                verticalAlign: "text-bottom",
                            }}
                            src={"images/cc.svg"}
                            alt="CC"
                        />
                        <img
                            style={{
                                height: "22px",
                                marginLeft: "3px",
                                verticalAlign: "text-bottom",
                            }}
                            src={"images/by.svg"}
                            alt="BY"
                        />
                        <img
                            style={{
                                height: "22px",
                                marginLeft: "3px",
                                verticalAlign: "text-bottom",
                            }}
                            src={"images/nc.svg"}
                            alt="NC"
                        />
                        <img
                            style={{
                                height: "22px",
                                marginLeft: "3px",
                                verticalAlign: "text-bottom",
                            }}
                            src={"images/nd.svg"}
                            alt="ND"
                        />
                    </a>
                </h4>
            </div>
            <p className="text-dark text-center m-0 p-0">
                <strong>
                    El dominio original de miarma.net es{" "}
                    <span style={{ color: "tomato" }}>ÚNICO</span> y es{" "}
                    <span style={{ color: "tomato" }}>ESTE</span>. No nos hacemos responsables de posibles copias
                    malintencionadas.
                </strong>
            </p>
        </Container>
    );
}
