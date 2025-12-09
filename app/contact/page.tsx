import { ContactClient } from "./ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Social Grow",
    description: "Initiate your ascent. Book a strategy session with our elite management team.",
};

export default function ContactPage() {
    return <ContactClient />;
}
