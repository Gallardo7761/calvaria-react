export default function DownloadButton() {
    const MODPACK_URI = "/downloads/Calvaria.zip";
    const download = () => {
        window.open(MODPACK_URI, "_blank");
    }

    return (
        <button onClick={download} className="downloadBtn"><h3 className="m-0 p-0">Descargar Modpack</h3></button>
    )
}