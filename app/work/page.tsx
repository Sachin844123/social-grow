import { WorkClient } from "./WorkClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Social Grow",
    description: "A showcase of our most impactful campaigns. Real results, real growth, real authority.",
};

export default function WorkPage() {
    return <WorkClient />;
}
