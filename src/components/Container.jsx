export default function Container(props) {
    return (
        <section className={"container-custom col-sm-12"}>
            {props.children}
        </section>
    )
}