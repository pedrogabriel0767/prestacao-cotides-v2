fetch("data.json")
.then(res => res.json())
.then(data => {

    document.getElementById("saldo").innerText = "R$ " + data.saldo;

    let entradas = 0;
    let saidas = 0;

    const tabela = document.getElementById("tabela");

    data.movimentacoes.forEach(item => {

        tabela.innerHTML += `
        <tr>
            <td>${item.tipo}</td>
            <td>${item.categoria}</td>
            <td>R$ ${item.valor}</td>
            <td>${item.data}</td>
        </tr>
        `;

        if(item.tipo === "entrada") entradas += item.valor;
        if(item.tipo === "saida") saidas += item.valor;
    });

    document.getElementById("entradas").innerText = "R$ " + entradas;
    document.getElementById("saidas").innerText = "R$ " + saidas;
});