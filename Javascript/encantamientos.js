// @ts-check

/**
 * Para elegir una carta, devuelva la carta que está en el índice positionde la pila dada.

const position = 2;
getItem([1, 2, 4, 1], position);
// => 4
 */
export function getItem(cards, position) {
    return cards[position]
  }
  
  /**
   Realice un juego de manos y cambie la carta del índice positionpor la carta de reemplazo proporcionada. Devuelva la pila ajustada.

const position = 2;
const replacementCard = 6;
setItem([1, 2, 4, 1], position, replacementCard);
// => [1, 2, 6, 1]
   */
  export function setItem(cards, position, replacementCard) {
    cards[position] = replacementCard;
    return cards
  }
  
  /**
  Haga que aparezca una carta insertando una nueva carta en la parte superior de la pila. Devuelva la pila ajustada.

const newCard = 8;
insertItemAtTop([5, 9, 7, 1], newCard);
// => [5, 9, 7, 1, 8]
   */
  export function insertItemAtTop(cards, newCard) {
    cards.push(newCard);
    return cards
  }
  
  /**
  Haz que una carta desaparezca retirando la carta indicada positionde la pila. Devuelve la pila ajustada.

const position = 2;
removeItem([3, 2, 6, 4, 8], position);
// => [3, 2, 4, 8]
   */
  export function removeItem(cards, position) {
    cards.splice(position, 1)
    return cards
  }
  
  /**
   Haz desaparecer una carta quitando la carta que está en la parte superior de la pila. Devuelve la pila ajustada.

removeItemFromTop([3, 2, 6, 4, 8]);
// => [3, 2, 6, 4]
   */
  export function removeItemFromTop(cards) {
    cards.pop();
    return cards
  }
  
  /**
   Haga que aparezca una carta insertando una nueva carta en la parte inferior de la pila. Devuelva la pila ajustada.

const newCard = 8;
insertItemAtBottom([5, 9, 7, 1], newCard);
// => [8, 5, 9, 7, 1]
   */
  export function insertItemAtBottom(cards, newCard) {
    cards.unshift(newCard);
    return cards
  }
  
  /**
  Haz que una carta desaparezca retirando la carta que se encuentra en la parte inferior de la pila. Devuelve la pila ajustada.

removeItemAtBottom([8, 5, 9, 7, 1]);
// => [5, 9, 7, 1]
   */
  export function removeItemAtBottom(cards) {
    cards.shift();
    return cards
  }
  
  /**
  Comprueba si el tamaño de la pila es igual stackSizeo no.

const stackSize = 4;
checkSizeOfStack([3, 2, 6, 4, 8], stackSize);
// => false
   */
  export function checkSizeOfStack(cards, stackSize) {
    let compara = false;
    compara = stackSize === cards.length;
    return compara
  }
  