import image1 from "../images/images v2/image-1.png";
import image2 from "../images/images v2/image-2.png";
import image3 from "../images/images v2/image-3.png";
import image4 from "../images/images v2/image-4.png";
import image5 from "../images/images v2/image-5.png";

export const HOME_SLIDES = [
    {
        image: image1,
        title: "Espace partagé",
        description:
            "Crée un espace privé avec tes amis pour retrouver facilement vos photos, vos vidéos et tous les moments que vous voulez garder ensemble.",
        cta: "Telecharger Shared",
    },
    {
        image: image2,
        title: "Ton actualité",
        description:
            "Découvre en un coup d'oeil les moments récents de tes proches, leurs nouveautés, leurs photos et les souvenirs qu'ils ont choisi de partager avec toi.",
        cta: "Telecharger Shared",
    },
    {
        image: image3,
        title: "Conversations privées.",
        description:
            "Garde les conversations importantes au même endroit que tes souvenirs, pour ne jamais perdre le contexte des échanges qui comptent vraiment.",
        cta: "Telecharger Shared",
    },
    {
        image: image4,
        title: "Capture l'instant présent",
        description:
            "Partage instantanément avec tes amis les moments que tu vis sur le moment, sans friction, dans un espace simple, rapide et pensé pour rester vivant.",
        cta: "Telecharger Shared",
    },
    {
        image: image5,
        title: "Tes souvenirs",
        description:
            "Profite d'un espace pensé pour conserver durablement tes moments inoubliables, organiser tes contenus et les retrouver quand tu veux.",
        cta: "Telecharger Shared",
    },
];

export const HOME_REVIEWS = [
    {
        name: "Camille Renaud",
        role: "Photographe freelance",
        quote: "Shared me permet de centraliser les souvenirs de mes shootings et de les partager rapidement avec mes clients et mes proches.",
    },
    {
        name: "Lucas Morel",
        role: "Chef de projet",
        quote: "L'application est simple, fluide et surtout pratique pour retrouver en quelques secondes les photos importantes d'un événement.",
    },
    {
        name: "Sarah El Amrani",
        role: "Etudiante",
        quote: "Avec Shared, je peux garder tous les souvenirs de mes voyages avec mes amis sans perdre de temps entre plusieurs applis.",
    },
    {
        name: "Nicolas Perrin",
        role: "Réalisateur vidéo",
        quote: "J'aime le côté propre de l'interface. Tout reste lisible, même quand on commence à accumuler beaucoup de contenus.",
    },
    {
        name: "Julie Martel",
        role: "Responsable communication",
        quote: "On a commencé à utiliser Shared en famille et tout le monde s'y retrouve. C'est devenu notre espace commun pour nos souvenirs.",
    },
    {
        name: "Antoine Girard",
        role: "Développeur produit",
        quote: "Le ressenti est rapide et agréable. On sent que l'application a été pensée pour partager sans friction.",
    },
    {
        name: "Léa Roche",
        role: "Illustratrice",
        quote: "J'utilise Shared pour conserver mes inspirations, mes photos et les moments créatifs que j'ai envie de retrouver plus tard.",
    },
    {
        name: "Thomas Viala",
        role: "Professeur",
        quote: "Le format des espaces partagés est vraiment utile. Chacun peut contribuer et on garde une trace claire de tout ce qui compte.",
    },
    {
        name: "Inès Carvalho",
        role: "Architecte d'intérieur",
        quote: "J'apprécie particulièrement le soin apporté à la présentation. Les souvenirs sont mieux mis en valeur que sur une galerie classique.",
    },
    {
        name: "Mathieu Bernard",
        role: "Entrepreneur",
        quote: "Shared donne envie de revenir consulter ses albums. C'est rare d'avoir une appli à la fois utile, claire et vraiment agréable à utiliser.",
    },
];

export const HOME_REVIEW_COLUMNS = [
    HOME_REVIEWS.filter((_, index) => index % 2 === 0),
    HOME_REVIEWS.filter((_, index) => index % 2 === 1),
];
