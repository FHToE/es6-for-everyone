import { createElement } from '../helpers/domHelper';
import { showModal } from './modal';


export  function showWinnerModal(fighter) {
  const title = 'And in this fight wins...';
  fighter.then(fighter => {const bodyElement = createWinnerDetails(fighter);
    showModal({ title, bodyElement });
  });
  //const bodyElement = createWinnerDetails(fighter);
  //showModal({ title, bodyElement });
    // show winner name and image
}

function createWinnerDetails(fighter) {
  const { name, source } = fighter;

  let attributes = { align: "center" };
  const fighterDetails = createElement({ tagName: 'div', className: 'modal-body', attributes });
  const nameElement = createElement({ tagName: 'span', className: 'modal-root', attributes });
  attributes = { src: source };
  const imgElement = createElement({ tagName: 'img', className: 'fighter-image', attributes });
  nameElement.innerText = name;
  fighterDetails.append(nameElement, imgElement);

  return fighterDetails;
}
