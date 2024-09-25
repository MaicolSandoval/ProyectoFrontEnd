const iframe = document.createElement("iframe")


window.addEventListener("load", () => {
    iframe.src = "././Inicio.html"
    iframe.id = "iframeDimanico"
    document.getElementById("paginas").append(iframe)

});

const iframeInicio = document.getElementById("btnInicio")
iframeInicio.addEventListener("click", () => {

    document.getElementById("iframeDimanico") ? document.getElementById("paginas").removeChild(document.getElementById("iframeDimanico")) : ""
    iframe.src = "././Inicio.html"
    iframe.id = "iframeDimanico"
    document.getElementById("paginas").append(iframe)

})

const iframeNosotros = document.getElementById("btnNosotros")
iframeNosotros.addEventListener("click", () => {
    document.getElementById("iframeDimanico") ? document.getElementById("paginas").removeChild(document.getElementById("iframeDimanico")) : ""
    iframe.src = "./Nosotros.html"
    iframe.id = "iframeDimanico"
    document.getElementById("paginas").append(iframe)

})

const iframeExperiencia = document.getElementById("btnExperiencia")
iframeExperiencia.addEventListener("click", () => {
    document.getElementById("iframeDimanico") ? document.getElementById("paginas").removeChild(document.getElementById("iframeDimanico")) : ""
    iframe.src = "./Experiencias.html"
    iframe.id = "iframeDimanico"
    document.getElementById("paginas").append(iframe)

})

const iframePlanes = document.getElementById("btnPlanes")
iframePlanes.addEventListener("click", () => {
    document.getElementById("iframeDimanico") ? document.getElementById("paginas").removeChild(document.getElementById("iframeDimanico")) : ""
    iframe.src = "./Planes.html"
    iframe.id = "iframeDimanico"
    document.getElementById("paginas").append(iframe)

})

const iframeOfertas = document.getElementById("btnOfertas")
iframeOfertas.addEventListener("click", () => {
    document.getElementById("iframeDimanico") ? document.getElementById("paginas").removeChild(document.getElementById("iframeDimanico")) : ""
    iframe.src = "./Ofertas.html"
    iframe.id = "iframeDimanico"
    document.getElementById("paginas").append(iframe)

})


