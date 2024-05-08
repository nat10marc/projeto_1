document.querySelector("#satisfacao").addEventListener("change", exibirNivelSatisfacao)

document.querySelector("#comentario").addEventListener("input", function () {
    const comentario = document.querySelector("#comentario").value
    document.querySelector("label[for=comentario]").innerText = "Comentário (" + comentario.length + "/1000 caracteres)"
})

function exibirNivelSatisfacao() {
    const nivelSatisfacao = document.querySelector("#satisfacao").value
    let mensagem = ""

    switch (nivelSatisfacao) {
        case "5":
            mensagem = "Muito Satisfeito"
            break
        case "4":
            mensagem = "Satisfeito"
            break
        case "3":
            mensagem = "Neutro"
            break
        case "2":
            mensagem = "Insatisfeito"
            break
        case "1":
            mensagem = "Muito Insatisfeito"
            break
    }

    document.querySelector("#nivel-satisfacao").innerText = mensagem
}
