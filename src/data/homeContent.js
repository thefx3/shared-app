import image1 from "../images/images v2/image-1.png";
import image2 from "../images/images v2/image-2.png";
import image3 from "../images/images v2/image-3.png";
import image4 from "../images/images v2/image-4.png";
import image5 from "../images/images v2/image-5.png";

export const HOME_SLIDES = [
    {
        image: image1,
        title: "Au plus pres de tout ce que vous aimez... petit coquin.",
        description:
            "Retrouvez vos albums partages dans une interface claire, rapide et simple a parcourir, meme quand vous avez beaucoup de souvenirs a trier.",
        cta: "Telecharger Shared",
    },
    {
        image: image2,
        title: "Vos grilles restent belles, meme quand elles grandissent comme ma... .",
        description:
            "Chaque espace met en avant vos photos et videos avec une hierarchie nette pour retrouver les meilleurs moments en un coup d'oeil.",
        cta: "Telecharger Shared",
    },
    {
        image: image3,
        title: "Le petit vaurien a créé son application.",
        description:
            "Les conversations, reactions et partages restent connectes a vos contenus pour garder une experience vivante et vraiment collaborative.",
        cta: "Telecharger Shared",
    },
    {
        image: image4,
        title: "Paul est vraiment un enfoiré de première",
        description:
            "Les conversations, reactions et partages restent connectes a vos contenus pour garder une experience vivante et vraiment collaborative.",
        cta: "Telecharger Shared",
    },
    {
        image: image5,
        title: "Paul le petit sac à me...rde.",
        description:
            "Les conversations, reactions et partages restent connectes a vos contenus pour garder une experience vivante et vraiment collaborative.",
        cta: "Telecharger Shared",
    },
];

export const HOME_REVIEWS = [
    {
        name: "Paul",
        role: "Le chômeur",
        quote: "Shared m'a aidé à sortir de ma période de chômage prolongé.",
    },
    {
        name: "Paul",
        role: "Le goinfre",
        quote: "Je mange à mes heures perdues et Shared m'aide à organiser mes souvenirs de mes repas les plus mémorables.",
    },
    {
        name: "Paul",
        role: "L'hypocondriaque",
        quote: "Je suis tellement obsédé par ma santé que j'ai utilisé Shared pour partager mes photos chez le docteur.",
    },
    {
        name: "Paul",
        role: "L'acteur",
        quote: "Johnny Depp et Brad n'ont qu'a bien se tenir, j'arrive avec mes talents d'acteur et mon application de souvenirs partagés.",
    },
    {
        name: "Paul",
        role: "Le tueur de zombies",
        quote: "Je tue pas seulement des zombies, je tue aussi le temps en organisant mes souvenirs avec Shared.",
    },
    {
        name: "Paul",
        role: "Le développeur et trader",
        quote: "Je développe, je trade mais je suis aussi un grand fan de Shared.",
    },
    {
        name: "Paul",
        role: "L'imbécile heureux'",
        quote: "Je ne suis pas le plus intelligent mais Shared me rend heureux et c'est tout ce qui compte.",
    },
    {
        name: "Paul",
        role: "Le paulochon des cavernes",
        quote: "Heureux de voir que même les paulochons des cavernes peuvent profiter de Shared pour organiser leurs souvenirs préhistoriques.",
    },
    {
        name: "Paul",
        role: "Le maniaque",
        quote: "J'ai la manie de tout organiser, et Shared est l'outil parfait pour satisfaire mon besoin de contrôle sur mes souvenirs partagés.",
    },
    {
        name: "Paul",
        role: "L'artiste de rue",
        quote: "Artiste un jour, artiste toujours. Shared m'aide à organiser mes souvenirs de mes performances de rue et à les partager avec mes fans.",
    },
];

export const HOME_REVIEW_COLUMNS = [
    HOME_REVIEWS.filter((_, index) => index % 2 === 0),
    HOME_REVIEWS.filter((_, index) => index % 2 === 1),
];
