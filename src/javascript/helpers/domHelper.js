export function createElement({ tagName, className, attributes = {} }) {
  const element = document.createElement(tagName);
  
  if (className) {
    element.classList.add(className);
  }

  Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));

  return element;
}