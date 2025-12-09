import { AboutClient } from "./AboutClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Social Grow",
    description: "Meet the architects behind the world's most influential personal brands.",
};

export default function AboutPage() {
    return <AboutClient />;
}
