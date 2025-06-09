const tbody = document.getElementById('pontoBody');
const diasNomes = new Date().getDate();
const hoje = new Date();
const ano = hoje.getFullYear();
const mes = hoje.getMonth();

for (let dia = 1; dia <= 31; dia++) {
    const data = new Date(ano, mes, dia);
    if (data.getMonth() !== mes) break;

    const dataFormatada = data.toLocaleDateString('pt-BR');
    tbody.innerHTML += `
        <tr>
            <td><input type=\"hidden\" name=\"data[]\" value="${dataFormatada}">${dataFormatada}</td>
            <td><input type=\"time\" name=\"entrada[]\"></td>
            <td><input type=\"time\" name=\"saida_almoco[]\"></td>
            <td><input type=\"time\" name=\"retorno_almoco[]\"></td>
            <td><input type=\"time\" name=\"saida[]\"></td>
            <td><input type=\"text\" name=\"observacoes[]\" placeholder=\"Observações\"></td>
            <td>
                <select name=\"status[]\">
                    <option value=\"\">--</option>\n
                    <option value=\"Presente\">Presente</option>
                    <option value=\"Falta\">Falta</option>
                    <option value=\"Atestado\">Atestado</option>
                    <option value=\"Feriado\">Feriado</option>
                </select>
            </td>
        </tr>
    `;
}
