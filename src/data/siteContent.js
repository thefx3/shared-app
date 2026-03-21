import { Camera, House, Mail, MapPin, MessageCircle } from "lucide-react";

export const PAGE_PATHS = {
    home: "/",
    download: "/download",
    contact: "/contact",
};

export function getHeaderNavItems(t) {
    return [
        {
            id: "home",
            label: t("header.nav.home"),
            Icon: House,
            href: PAGE_PATHS.home,
        },
        {
            id: "download",
            label: t("header.nav.camera"),
            Icon: Camera,
            href: PAGE_PATHS.download,
            featured: true,
        },
        {
            id: "contact",
            label: t("header.nav.contact"),
            Icon: Mail,
            href: PAGE_PATHS.contact,
        },
    ];
}

export function getHeaderActions(t) {
    return [
        {
            id: "download",
            label: t("common.actions.download"),
            shortLabel: t("common.actions.downloadShort"),
            href: PAGE_PATHS.download,
        },
    ];
}

export function getFooterSections(t) {
    return [
        {
            title: t("footer.sections.product"),
            links: [
                { label: t("footer.links.features"), href: "/#home" },
                { label: t("common.actions.download"), href: PAGE_PATHS.download },
            ],
        },
        {
            title: t("footer.sections.company"),
            links: [{ label: t("footer.links.otherApps"), href: "/#oriontech" }],
        },
        {
            title: t("footer.sections.resources"),
            links: [
                { label: t("footer.links.faq"), href: "/#faq" },
                { label: t("header.nav.contact"), href: PAGE_PATHS.contact },
            ],
        },
    ];
}

export function getContactDetails(t) {
    return [
        {
            icon: Mail,
            label: t("contact.details.email.label"),
            value: "sharedapp.contact@gmail.com",
            href: "mailto:sharedapp.contact@gmail.com",
        },
        {
            icon: MapPin,
            label: t("contact.details.location.label"),
            value: t("contact.details.location.value"),
        },
        {
            icon: MessageCircle,
            label: t("contact.details.response.label"),
            value: t("contact.details.response.value"),
        },
    ];
}
