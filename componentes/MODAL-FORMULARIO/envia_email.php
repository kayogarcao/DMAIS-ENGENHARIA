<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pega os dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    // Validação simples
    if (empty($nome) || empty($email) || empty($mensagem)) {
        echo "Todos os campos são obrigatórios!";
        exit;
    }

    // Configura o e-mail para envio
    $to = "seu-email@seu-dominio.com"; // Altere para o e-mail do seu cliente
    $subject = "Pedido de Orçamento";
    $body = "Nome: $nome\nE-mail: $email\nMensagem: $mensagem";
    $headers = "From: $email";

    // Envia o e-mail
    if (mail($to, $subject, $body, $headers)) {
        echo "Orçamento enviado com sucesso!";
    } else {
        echo "Erro ao enviar o orçamento. Tente novamente.";
    }
}
?>
