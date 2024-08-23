$(document).ready(function(){
        $(`header button`).click(function() {
            $(`form`).slideDown();
        })

        $(`#botao-cancelar`).click(function(){
            $(`form`).slideUp();
        })

        $(`form`).on(`submit`, function(e) { 
            e.preventDefault();
            const endereçoDaNovaImagem = $(`endereço-imagem-nova`).val();
            const novoItem = $(`<li></li>`);
            $(`<ìmg src="${endereçoDaNovaImagem}"/>`).appendTo(novoItem);
            $(`
                <div class="overlay-imagem-link">
                <a href="${endereçoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    ver imagem em tamanho real
                    </a>
                </div>    
                `).appendTo(novoItem);
            $(novoItem).appendTo(`ul`);
            $(novoItem).fadeIn();
            $(`#endereco-imagem-nova`).val(``)    

        })
    })
