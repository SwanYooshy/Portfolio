const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
  });

let first = 0;
let com = "<p class='grid__proj__title'>Communication</p><p class='grid__proj__text'>J'ai réalisé une refonte du site de l'aéroport de Limoges. Il y a de nombreux problèmes sur ce site qui peux porter atteinte à la comprehension du site. Sous Figma j'ai rélisé un prototype fonctionnel de ce qui devrait être modifier sur la page d'accueil. Ci-dessous une photo du projet et du site originel. Le lien vers le projet Figma.</p><a href='https://www.figma.com/proto/qz9JIKfc8neLP2L4iDHaGn/KewannMoreau_MathieuTaris_SwanChevallereau?scaling=scale-down&page-id=0%3A1&starting-point-node-id=46%3A892&show-proto-sidebar=1'><img class='grid__proj__img' src='./data/Aeroport.PNG' alt=''></a>";
let dev = "<p class='grid__proj__title'>Développement</p><p class='grid__proj__text'>Voici mon dernier projet d'étude ! Il s'agit d'un faux site de LDLC, ce projet à duré environ trois semaines. Il est entièrement réalisé sous Vue Js et la base de données à été créer sous Symfony avec le bundle doctrine. De plus, je me suis servi de api plateform afin d'avoir accès aux requetes fetch pour vue. J'ai également mis en place un back office. Nous pouvons également passer le site en français ou en anglais.</p><a href='#'><img class='grid__proj__img' src='./data/LDLC.PNG' alt=''></a><p class='grid__proj__text'>Dans ce projet de première année j'ai réalisé un site de musique utilisant YouTube afin d'afficher les musiques selon les artistes, des playlists ou bien directemment via les albums. Tous sa en site one page et en utilisant une base de donnée. Cet entrainement m'a permis d'apprendre comment fonctionne une base de données ainsi que le langage SQL mais également de comment l'implenté sur un site grâce au JavaScript et au PHP.</p><a href='https://www.chevallereau-swan.com/OnlyTube'><img class='grid__proj__img' src='./data/OnlyTube.PNG' alt=''></a>";
let stage = "<p class='grid__proj__title'>Stage</p><p class='grid__proj__stage'>Vous trouverez ci-contre mes projets réalisés au sein de l'entreprise ComQuest durant un stage de 8 semaines</p> <p class='grid__proj__text'>J'ai réalisé un filtrage de données d'un fichier csv pour une injection dans une base de données. Ensuite via cette base de données nous affichons une carte avec les boutiques vendant le vin demandé. En ce qui concerne l'affichage de la carte je n'ai qu'adapter le code pour les nouvelles données.</p><a href='https://www.barton-guestier.com/usa_store_locator_swan/'><img class='grid__proj__img' src='./data/Barton&Guestier.png' alt=''></a><p class='grid__proj__text'>J'ai réalisé une newsletter pour la Fédération Française de Triathlon. J'ai du pour ce faire codé en HTML4 afin que n'importe quel logiciel de messagerie puissent le lire correctement.</p><a href='https://www.fftri-communication.com/emailings/230412Raid/lalettre/'><img class='grid__proj__img' src='./data/FFTri.png' alt=''></a><p class='grid__proj__text'>J'ai édité des pages sous wordpress pour la Fédération Française des Clubs Omnisports notamment cette page de connexion. J'ai réalisé ces changements en CSS.</p><a href='https://www.ffco.org/wp-login.php?redirect_to=https%3A%2F%2Fwww.ffco.org%2Faccueil-adherent%2F'><img class='grid__proj__img' src='./data/FFCO.png' alt=''></a>";
let gra = "<p class='grid__proj__title'>Graphisme</p><p class='grid__proj__text'>J'ai réalisé des posts instagram pour le jeu vidéo Cuphead sous illustrator afin de m'améliorer mais également de m'adapter au format 1:1 d'instagram pour publier un contenu pertinent.</p><a href='https://www.chevallereau-swan.com/data/projetCuphead.jpg'><img class='grid__proj__img' src='./data/Cuphead.PNG' alt=''></a>";
  OpenOrClose = function(ev){
    first = first + 1;
    if (ev.currentTarget.className == "grid__proj opened"){
      first = first - 1;
    } else if(ev.target.textContent == "Développement" && first == 1){
      let currentOpen = document.querySelector(".opened");
      if(currentOpen.childNodes[1].innerText == "Stage"){
        currentOpen.innerHTML = '<p class="grid__proj__title">Stage</p>';
      } else if(currentOpen.childNodes[1].innerText == "Graphisme"){
        currentOpen.innerHTML = '<p class="grid__proj__title">Graphisme</p>';
      } else if(currentOpen.childNodes[1].innerText == "Communication"){
        currentOpen.innerHTML = '<p class="grid__proj__title">Communication</p>';
      }
      currentOpen.classList.remove("opened");
      ev.currentTarget.innerHTML = dev;
      ev.currentTarget.classList.add("opened");
    } else if(ev.target.textContent == "Communication" && first == 1){
      let currentOpen = document.querySelector(".opened");
      if(currentOpen.childNodes[1].innerText == "Développement"){
        currentOpen.innerHTML = '<p class="grid__proj__title">Développement</p>';
      } else if(currentOpen.childNodes[1].innerText == "Graphisme"){
        currentOpen.innerHTML = '<p class="grid__proj__title">Graphisme</p>';
      } else if(currentOpen.childNodes[1].innerText == "Stage"){
        currentOpen.innerHTML = '<p class="grid__proj__title">Stage</p>';
      }
      currentOpen.classList.remove("opened");
      ev.currentTarget.innerHTML = gra;
      ev.currentTarget.classList.add("opened");
    } else if(ev.target.textContent == "Graphisme" && first == 1){
      let currentOpen = document.querySelector(".opened");
      if(currentOpen.childNodes[1].innerText == "Communication"){
        currentOpen.innerHTML = '<p class="grid__proj__title">Communication</p>';
      } else if(currentOpen.childNodes[1].innerText == "Développement"){
        currentOpen.innerHTML = '<p class="grid__proj__title">Développement</p>';
      } else if(currentOpen.childNodes[1].innerText == "Stage"){
        currentOpen.innerHTML = '<p class="grid__proj__title">Stage</p>';
      }
      currentOpen.classList.remove("opened");
      ev.currentTarget.innerHTML = gra;
      ev.currentTarget.classList.add("opened");
    } else if(ev.target.textContent == "Communication" && first >= 2){
      let currentOpen = document.querySelector(".opened");
      if(currentOpen.childNodes[0].innerText == "Développement"){
        currentOpen.innerHTML = '<p class="grid__proj__title">Développement</p>';
      } else if(currentOpen.childNodes[0].innerText == "Graphisme"){
        currentOpen.innerHTML = '<p class="grid__proj__title">Graphisme</p>';
      } else if(currentOpen.childNodes[0].innerText == "Stage"){
        currentOpen.innerHTML = '<p class="grid__proj__title">Stage</p>';
      } 
      currentOpen.classList.remove("opened");
      ev.currentTarget.innerHTML = com;
      ev.currentTarget.classList.add("opened");
    } else if(ev.target.textContent == "Graphisme" && first >= 2){
      let currentOpen = document.querySelector(".opened");
      if(currentOpen.childNodes[0].innerText == "Communication"){
        currentOpen.innerHTML = '<p class="grid__proj__title">Communication</p>';
      } else if(currentOpen.childNodes[0].innerText == "Développement"){
        currentOpen.innerHTML = '<p class="grid__proj__title">Développement</p>';
      } else if(currentOpen.childNodes[0].innerText == "Stage"){
        currentOpen.innerHTML = '<p class="grid__proj__title">Stage</p>';
      } 
      currentOpen.classList.remove("opened");
      ev.currentTarget.innerHTML = gra;
      ev.currentTarget.classList.add("opened");
    } else if(ev.target.textContent == "Stage" && first >= 2){
      let currentOpen = document.querySelector(".opened");
      if(currentOpen.childNodes[0].innerText == "Communication"){
        currentOpen.innerHTML = '<p class="grid__proj__title">Communication</p>';
      } else if(currentOpen.childNodes[0].innerText == "Développement"){
        currentOpen.innerHTML = '<p class="grid__proj__title">Développement</p>';
      } else if(currentOpen.childNodes[0].innerText == "Graphisme"){
        currentOpen.innerHTML = '<p class="grid__proj__title">Graphisme</p>';
      }
      currentOpen.classList.remove("opened");
      ev.currentTarget.innerHTML = stage;
      ev.currentTarget.classList.add("opened");
    } else if(ev.target.textContent == "Développement" && first >= 2){
      let currentOpen = document.querySelector(".opened");
      if(currentOpen.childNodes[0].innerText == "Communication"){
        currentOpen.innerHTML = '<p class="grid__proj__title">Communication</p>';
      } else if(currentOpen.childNodes[0].innerText == "Graphisme"){
        currentOpen.innerHTML = '<p class="grid__proj__title">Graphisme</p>';
      } else if(currentOpen.childNodes[0].innerText == "Stage"){
        currentOpen.innerHTML = '<p class="grid__proj__title">Stage</p>';
      } 
      currentOpen.classList.remove("opened");
      ev.currentTarget.innerHTML = dev;
      ev.currentTarget.classList.add("opened");
    }
  }

document.querySelectorAll(".grid__proj").forEach(item => {
  item.addEventListener("click", OpenOrClose)
});

