import '../css/Header.css';

export default function Header() {
    return (
        <header className="d-flex justify-content-center mt-5">
            <img
                src={"images/calvaria.png"}
                className={"img-fluid header-img w-75"}
                alt={"Logo del server"}
            />
        </header>

    )
}