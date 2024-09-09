document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contato');
    const tabelaContatos = document.querySelector('#tablebody');

    const nomes = [];
    const contatos = [];
    const emails = [];

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const tele = document.getElementById('tel').value;
        const email = document.getElementById('email').value;

        if (numeroNecessario(tele) && !inLista(nome, nomes) && !inLista(tele, contatos) && !inLista(email, emails)) {
            nomes.push(nome);
            contatos.push(tele);
            emails.push(email);
            adicionaLinha(nome, tele, email);
        } else {
            alert('Número inválido ou dados já encontrados na lista.');
        }
    });

    function inLista(valor, lista) {
        return lista.indexOf(valor) !== -1;
    }

    function numeroNecessario(numero) {
        return numero.length >= 11;
    }

    function adicionaLinha(nome, tele, email) {
        let linha = `<tr>
                        <td>${nome}</td>
                        <td>${tele}</td>
                        <td>${email}</td>
                     </tr>`;
        tabelaContatos.innerHTML += linha;
    }
});

