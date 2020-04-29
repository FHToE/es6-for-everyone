import { getFighters } from './services/fightersService'
import { createFighters } from './fightersView';

const rootElement = document.getElementById('root');
const loadingElement = document.getElementById('loading-overlay');

export async function startApp() {
  try {
    loadingElement.style.visibility = 'visible';
    
    const fighters = await getFighters();
    const fightersElement = createFighters(fighters);

    rootElement.appendChild(fightersElement);
  } catch (error) {
    console.warn(error);
    rootElement.innerText = 'Failed to load data';
  } finally {
    loadingElement.style.visibility = 'hidden';
  }
}
