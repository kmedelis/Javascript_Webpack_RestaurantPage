import _ from 'lodash';
import './style.css';
import Icon from './pictures/icon.png';
import printMe from './subpages/print.js';
import printAbout from './subpages/About.js';
import printContact from './subpages/Contact.js';
import printMenu from './subpages/Menu.js';


function component() {

    // creates  main div
    const element = document.createElement('div');  
    element.classList.add('mainBackground');
    element.appendChild(header(element));
    
    // adds image background
    // const myIcon = new Image();
    // myIcon.src = Icon;
    // element.appendChild(myIcon);

    // create div for the main content
    const mainBody = document.createElement('div');
    mainBody.setAttribute("id", "mainBody");
    element.appendChild(mainBody);
    return element;

  }


function header() {
  const header = document.createElement('header');
  header.classList.add('header');

  // edit this to change the main name
  const mainText = document.createElement('mainText');
  mainText.classList.add('mainText')
  header.appendChild(mainText)
  mainText.innerHTML = 'Ramintos tortukai';

  // adds all the three buttons with functions and adds them to a button row
  const buttonRow = document.createElement('buttonRow');
  buttonRow.classList.add('buttonRow');
  buttonRow.appendChild(createButton("Menu", printMenu));
  buttonRow.appendChild(createButton("Kontaktai", printContact));
  buttonRow.appendChild(createButton("Apie", printAbout));
  header.appendChild(buttonRow);

  return header;
}

function createButton(text, functionName) {
  const btn = document.createElement('button');
  btn.classList.add('button');
  btn.innerHTML = `${text}`;
  btn.onclick = functionName;
  return btn;
}


  document.body.appendChild(component());

