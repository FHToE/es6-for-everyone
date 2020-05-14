import { createElement } from './helpers/domHelper';
import { showModal } from './modals/modal';

var currentHp1 = 0;
var currentHp2 = 0;
var currentHealthElement1 = null;
var currentHealthElement2 = null;
var getDamage1 = null;
var getDamage2 = null;




export async function fight(firstFighter, secondFighter) {
  showFighterInFightModal(firstFighter, secondFighter);
  await timer(3000);
  let getDMG;
  while (currentHp1 > 0 && currentHp2 > 0) {
   
    getDMG = getDamage(secondFighter, firstFighter); 
    currentHp1 =  currentHp1 - getDMG; 
    if (getDMG === 0) {
    getDamage1.innerText = 'dodge';
    } else {
      getDamage1.innerText = '- ' + getDMG.toFixed(2); 
    }
    getDamage2.innerText = ' ';
    await timer(400);
    if (currentHp1 < 0) {
      getDamage1.innerText = ' ';
      currentHealthElement1.innerText = 'Current HP is ' + 0;
      break;
    }
    currentHealthElement1.innerText = 'Current HP is ' + currentHp1.toFixed(2);
    await timer(400);
    getDMG = getDamage(firstFighter, secondFighter);
    currentHp2 =  currentHp2 - getDMG;
    if (getDMG === 0) {
      getDamage2.innerText = 'dodge';
    } else {
      getDamage2.innerText = '- ' + getDMG.toFixed(2);
    }
    getDamage1.innerText = ' ';
    await timer(400);
    if (currentHp2 < 0) {
      getDamage2.innerText = ' ';
      currentHealthElement2.innerText = 'Current HP is ' + 0;
      break;
    }
    currentHealthElement2.innerText = 'Current HP is ' + currentHp2.toFixed(2);
    await timer(400);
  }
  await timer(2000);

  if (currentHp1 > currentHp2) {
    return firstFighter;
  } else {
    return secondFighter;
  }
}

function timer(ms) {
  return new Promise(res => setTimeout(res, ms));
 }
 

export function getDamage(attacker, enemy) {
  
  let damage = getHitPower(attacker) - getBlockPower(enemy);
  if (damage < 0) {
    return 0;
  } else {
    return damage;
  }
  // damage = hit - block
  // return damage 
}

export function getHitPower(fighter) {
  let criticalHitChance = Math.random() + 1;
  let hitPower = fighter.attack * criticalHitChance;
  return hitPower;
  // return hit power
}

export function getBlockPower(fighter) {
  let dodgeChance = Math.random() + 1;
  let blockPower = fighter.defense * dodgeChance;
  return blockPower;
  // return block power
}

export  function showFighterInFightModal(firstFighter, secondFighter) {
  const title = 'Fight!';
  const bodyElement = createFighterForFight(firstFighter, secondFighter);
  showModal({ title, bodyElement });

}

function createFighterForFight(firstFighter, secondFighter) {
  //first fighter
  let name1 = firstFighter.name;
  let health1 = firstFighter.health;
  let source1 = firstFighter.source;
  
  let attributes = { width: "200", valign: "top", align: "left" };
  const firstfighterDetails = createElement({ tagName: 'td', className: 'modal-body', attributes });
  let nameElement = createElement({ tagName: 'p', className: 'fighter-name' });
  let healthElement = createElement({ tagName: 'p', className: 'modal-root' });
  currentHealthElement1 = createElement({ tagName: 'p', className: 'modal-root' });
  attributes = { align: "center" };
  getDamage1 = createElement({ tagName: 'p', className: 'modal-root' , attributes });
  attributes = { src: source1 };
  let imgElement = createElement({ tagName: 'img', className: 'fighter-image', attributes });
  getDamage1.innerText = ' ';
  nameElement.innerText = 'Name: ' + name1;
  healthElement.innerText = 'Total Health: ' + health1 + ' HP';
  currentHp1 = health1;
  currentHealthElement1.innerText = 'Current HP is ' + currentHp1;
  firstfighterDetails.append(nameElement, healthElement,  currentHealthElement1, getDamage1, imgElement);


  //second fighter
  let name2 = secondFighter.name;
  let health2 = secondFighter.health;
  let source2 = secondFighter.source;
  attributes = { valign: "top", align: "right" };
  const secondfighterDetails = createElement({ tagName: 'td', className: 'modal-body', attributes });
  nameElement = createElement({ tagName: 'p', className: 'fighter-name' });
  healthElement = createElement({ tagName: 'p', className: 'modal-root' });
  currentHealthElement2 = createElement({ tagName: 'p', className: 'modal-root' });
  attributes = { align: "center" };
  getDamage2 = createElement({ tagName: 'p', className: 'modal-root', attributes });
  attributes = { src: source2 };
  imgElement = createElement({ tagName: 'img', className: 'fighter-image-mirror', attributes });
  getDamage2.innerText = ' ';
  nameElement.innerText = 'Name: ' + name2;
  healthElement.innerText = 'Total Health: ' + health2 + ' HP';
  currentHp2 = health2;
  currentHealthElement2.innerText = 'Current HP is ' + currentHp2;
  secondfighterDetails.append(nameElement, healthElement,  currentHealthElement2, getDamage2, imgElement);


  //add fighters on tatami:)
  attributes = { width: "100%", cellspacing: "0", cellpadding: "5" };
  const tatami = createElement({ tagName: 'table', className: 'modal-body', attributes });
  const cells = createElement({ tagName: 'tr', className: 'modal-body' });
  cells.append(firstfighterDetails, secondfighterDetails);
  tatami.append(cells);
  return tatami;
}