import '../css/Container.css';

export default function Container({ children }) {
    return (
        <section className={"container-custom col-sm-12 justify-content-center d-flex"}>
            {children}
        </section>
    )
}