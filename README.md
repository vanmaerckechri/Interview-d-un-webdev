# INTERVIEW WEBDEV - RAPHAEL GOETTER (en dev.)

## La Victime de l'Interview

[Raphaël Goetter](https://goetter.fr/), fondateur d'[Alsacréation](https://www.alsacreations.com/), que je remercie encore pour avoir joué le jeu.

## Les Consignes

* [consignes détaillées](https://github.com/becodeorg/Swartz-promo-3/tree/master/Projects/interview-webdev)
* Résumé des consignes:
  * création d'un petit site de plusieurs pages
  * à héberger via GitHub Pages
  * mise en relation avec un professionnel
  * vérification du projet professionnel


## Contexte

Réalisé durant la formation [Becode](http://www.becode.org/). Synthèse du premier mois d'apprentissage (novembre 2017).

## Liens Utiles PWA

[manifest.json et generation icones](https://realfavicongenerator.net)

[service workers UpUp](https://www.talater.com/upup/getting-started-with-offline-first.html)

[Article de Maître Yoda](https://dev.to/pixeline/the-easy-way-to-turn-a-website-into-a-progressive-web-app-77g)

## Code pour le Menu Déroulant sans Javascript

**HTML**

    <nav  tabindex="0" role="navigation">
        <ul>
            <li><a href="index.html">|Accueil</a></li>
            <li><a href="makingof.html">Making-of</a></li>
            <li><a href="entreprise.html">Entreprise</a></li>
            <li><a href="interview.html">Interview</a></li>
            <li><a href="conclusion.html">Conclusion</a></li>
        </ul>
    </nav>

**CSS**

    nav
    {
        position: relative;
        display: inline-block;
        width: 100%;
    }
    nav ul
    {
        position: absolute;
        z-index: 1;
        opacity: 0;
        visibility: hidden;
        transition: visibility 0.5s;
        width: 100%;
        background-color: pink;
        flex-direction: column;
    }
    nav ul li a
    {
       width: 100%;
    }
    nav::before
    {
        display: inline-block;
        content: "OUVRIR";
        background-color: black;
        text-align: center;
        color: white;
        width: 100%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    nav:hover::before, nav:focus::before
    {
        background-color: white;
        color: black;
    }
    nav:focus
    {
        pointer-events: none;
    }
    nav:focus::before
    {
        content: "FERMER";
    }
        nav:focus ul
    {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
    }
