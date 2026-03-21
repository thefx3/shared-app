import { useTranslation } from "react-i18next";

export default function NotFound() {
    const { t } = useTranslation();

    return (
        <div className="text-2xl font-semibold">{t("notFound.title")}</div>
    );
}
