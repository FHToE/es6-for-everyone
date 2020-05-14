import { createElement } from '../helpers/domHelper';
import { showModal } from './modal';

export  function showFighterDetailsModal(fighter) {
  const title = 'Fighter info';
  const bodyElement = createFighterDetails(fighter);
  showModal({ title, bodyElement });
}

function createFighterDetails(fighter) {
  const { name, health, attack, defense, source } = fighter;

  let attributes = { align: "center" };
  const fighterDetails = createElement({ tagName: 'div', className: 'modal-body', attributes });
  const nameElement = createElement({ tagName: 'span', className: 'fighter-name', attributes });
  const healthElement = createElement({ tagName: 'span', className: 'modal-root', attributes });
  const attackElement = createElement({ tagName: 'span', className: 'modal-root', attributes });
  const defenseElement = createElement({ tagName: 'span', className: 'modal-root', attributes });
  attributes = { src: source };
  const imgElement = createElement({ tagName: 'img', className: 'fighter-image', attributes });
  // show fighter name, attack, defense, health, image

  nameElement.innerText = 'Name: ' + name;
  healthElement.innerText = 'Health: ' + health;
  attackElement.innerText = 'Attack: ' + attack;
  defenseElement.innerText = 'Defense: ' + defense;
  
  fighterDetails.append(nameElement, healthElement,  attackElement, defenseElement, imgElement);

  return fighterDetails;
}