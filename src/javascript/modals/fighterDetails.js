import { createElement } from '../helpers/domHelper';
import { showModal } from './modal';

export  function showFighterDetailsModal(fighter) {
  const title = 'Fighter info';
  const bodyElement = createFighterDetails(fighter);
  showModal({ title, bodyElement });
}

function createFighterDetails(fighter) {
  const { name } = fighter;

  const fighterDetails = createElement({ tagName: 'div', className: 'modal-body' });
  const nameElement = createElement({ tagName: 'span', className: 'fighter-name' });
  
  // show fighter name, attack, defense, health, image

  nameElement.innerText = name;
  fighterDetails.append(nameElement);

  return fighterDetails;
}
