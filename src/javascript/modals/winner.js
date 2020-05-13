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
  
  var attributes = { align: "center" };
  const fighterDetails = createElement({ tagName: 'div', className: 'modal-body', attributes });
  const nameElement = createElement({ tagName: 'p', className: 'fighter-name' });
  attributes = { src: source };
  const imgElement = createElement({ tagName: 'img', className: 'fighter-image-mirror', attributes });

  nameElement.innerText = 'Unbeatable ' + name;

  fighterDetails.append(nameElement, imgElement);

  return fighterDetails;
}
