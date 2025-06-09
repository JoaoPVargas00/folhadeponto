<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $datas = $_POST['data'];
    $entrada = $_POST['entrada'];
    $saidaAlmoco = $_POST['saida_almoco'];
    $retornoAlmoco = $_POST['retorno_almoco'];
    $saidas = $_POST['saida'];
    $observacoes = $_POST['observacoes'];
    $statuses = $_POST['status'];

    $arquivo = fopen('registros.csv', 'a');

    for ($i = 0; $i < count($datas); $i++) {
        $linha = [
            $datas[$i],
            $entrada[$i],
            $saidaAlmoco[$i],
            $retornoAlmoco[$i],
            $saidas[$i],
            $observacoes[$i],
            $statuses[$i]  // ← corrigido aqui
        ];
        fputcsv($arquivo, $linha, ';');
    }

    fclose($arquivo);
    echo "<h2>Folha de ponto salva com sucesso!</h2>";
    echo "<a href='index.html'>Voltar</a>";
}
?>
