import { createElement } from '../helpers/domHelper';
import { showModal } from './modal';

export  function showFighterDetailsModal(fighter) {
  const title = 'Fighter info';
  const bodyElement = createFighterDetails(fighter);
  showModal({ title, bodyElement });
}

function createFighterDetails(fighter) {
  const { name, health, attack, defense, source } = fighter;
  

  var attributes = { align: "center" };
  const fighterDetails = createElement({ tagName: 'div', className: 'modal-body', attributes });
  const nameElement = createElement({ tagName: 'p', className: 'fighter-name' });
  const healthElement = createElement({ tagName: 'p', className: 'fighter-health' });
  const attackElement = createElement({ tagName: 'p', className: 'fighter-attack' });
  const defenseElement = createElement({ tagName: 'p', className: 'fighter-defense' });
  attributes = { src: source };
  const imgElement = createElement({ tagName: 'img', className: 'fighter-image-mirror', attributes });
  // show fighter name, attack, defense, health, image

  nameElement.innerText = 'Name: ' + name;
  healthElement.innerText = 'Health: ' + health + ' HP';
  attackElement.innerText = 'Attack: ' + attack;
  defenseElement.innerText = 'Defence: ' + defense;

  fighterDetails.append(nameElement, healthElement, attackElement, defenseElement, imgElement);

  return fighterDetails;
}
