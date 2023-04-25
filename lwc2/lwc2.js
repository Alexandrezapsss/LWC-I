import { LightningElement } from 'lwc';

export default class Lwc2 extends LightningElement {
    //armazenar as imagens em variaveis
    pokemonOculto = "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/7af3b478-4cfa-4fce-8c24-af07c24c38c5.jpg";
    pokemonMostrar = "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/98a48255-bedb-46d7-8f6e-a54229d3c75d.jpg";
    //fim das img
    nomePokemon = '';//vai armazenar a resposta vi que dá para pegar a resposta com on chance chamando uma função
    acertou = false;//vou ver se uso no if esse boolean

    pegaResposta(event) {
        this.nomePokemon = event.target.value;//vai armazenar o valor do input aqui para verificar a resposta
    }

    verificarPokemon() {//aqui vai veriricar o nome do pokemon e mudar caso acerte o acertou de false para true e exibir um alert
        if (this.nomePokemon.toLowerCase() === 'flareon') {
            this.acertou = true;
            alert('Você acertou!');
        } else {
            this.acertou = false;
            alert('Resposta incorreta. Tente novamente! - Tente Somente com Letras Minusculas');
        }
    }
}