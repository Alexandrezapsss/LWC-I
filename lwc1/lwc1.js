import { LightningElement } from 'lwc';

export default class Lwc1 extends LightningElement {
    ocultarDivs() {
        //no forum estava para armazenar o seletor em variaveis
        let div2 = this.template.querySelector('[data-div="2"]');
        let div3 = this.template.querySelector('[data-div="3"]');
        if (div2.classList.contains('slds-hide')) { // se tentar fazer a verificação com and na div 3 da erro
            div2.classList.remove('slds-hide');//Lightning Desing = slds-hide oculta o elemento definendo sua propriedade como none
            div3.classList.remove('slds-hide');//classList ele procura a classe do seletor aí usamos o dot(.)para acessar as propriedades como add, remove e contains
        } else {
            div2.classList.add('slds-hide');//Lightning Desing = slds-hide oculta o elemento definendo sua propriedade como none
            div3.classList.add('slds-hide');
        }
    }
}