import { Camera, Grid2x2, House, Info, Mail, MapPin, MessageCircle } from "lucide-react";

export const PAGE_PATHS = {
    home: "/",
    download: "/download",
    contact: "/contact",
};

export const HEADER_NAV_ITEMS = [
    {
        id: "home",
        label: "Accueil",
        Icon: House,
        href: PAGE_PATHS.home,
        match: PAGE_PATHS.home,
    },
    {
        id: "download",
        label: "Camera",
        Icon: Camera,
        href: PAGE_PATHS.download,
        match: PAGE_PATHS.download,
        featured: true,
    },
    {
        id: "contact",
        label: "Contact",
        Icon: Mail,
        href: PAGE_PATHS.contact,
        match: PAGE_PATHS.contact,
    },
];

export const HEADER_ACTIONS = [
    { id: "download", label: "Telecharger", href: PAGE_PATHS.download },
];

export const SEARCH_NAV_ITEMS = [
    { id: "shared", label: "Shared", href: PAGE_PATHS.home },
    ...HEADER_NAV_ITEMS.map(({ id, label, href }) => ({ id, label, href })),
    ...HEADER_ACTIONS.map(({ id, label, href }) => ({ id, label, href })),
];

export const FOOTER_SECTIONS = [
    {
        title: "Produit",
        links: [
            { label: "Fonctionnalites", href: "/#features" },
            { label: "Telecharger", href: PAGE_PATHS.download },
        ],
    },
    {
        title: "Entreprise",
        links: [{ label: "Autres apps", href: "/#apps" }],
    },
    {
        title: "Ressources",
        links: [
            { label: "FAQ", href: "/#faq" },
            { label: "Contact", href: PAGE_PATHS.contact },
        ],
    },
];

export const CONTACT_DETAILS = [
    {
        icon: Mail,
        label: "Email",
        value: "hello@shared.app",
        href: "mailto:hello@shared.app",
    },
    {
        icon: MapPin,
        label: "Localisation",
        value: "Paris, France",
    },
    {
        icon: MessageCircle,
        label: "Reponse",
        value: "Sous 24 a 48 heures",
    },
];
