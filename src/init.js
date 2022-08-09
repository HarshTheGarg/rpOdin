export default function pageLoad(){
    
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    document.body.appendChild(content);

    addHeader();

};

function addHeader() {

    const header = document.createElement('header');
    
    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.textContent = "Restraunt Page";
    header.appendChild(logo);
    

    const tabs = document.createElement('div');
    tabs.classList.add('menuContainer');

    const home = document.createElement('span');
    home.textContent = "Home";

    const menu = document.createElement('span');
    menu.textContent = "Menu";

    const contact = document.createElement('span');
    contact.textContent = "Contact Us";

    tabs.appendChild(home);
    tabs.appendChild(menu);
    tabs.appendChild(contact);


    header.appendChild(tabs);

    document.querySelector('#content').appendChild(header);

}