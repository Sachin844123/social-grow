import { ServicesClient } from "./ServicesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | Social Grow",
    description: "Comprehensive social media management, content engineering, and growth hacking services for elite personal brands.",
};

export default function ServicesPage() {
    return <ServicesClient />;
}
