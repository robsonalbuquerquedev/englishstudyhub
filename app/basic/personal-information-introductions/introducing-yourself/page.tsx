import { BookOpen, Handshake, Smile, Flag, Users, User, Globe, Languages } from "lucide-react";
import ModuleTopics from "@/components/modules/ModuleTopics";

const topics = [
    { title: "Welcome to Your First English Introduction", icon: <BookOpen />, link: "welcome" },
    { title: "Saying Hello: Common Greetings", icon: <Smile />, link: "common-greetings" },
    { title: "Polite Words in Daily Conversations", icon: <User />, link: "polite-words" },
    { title: "Your Name and Basic Information", icon: <Handshake />, link: "basic-information" },
    { title: "Subject Pronouns Made Simple", icon: <Users />, link: "subject-pronouns" },
    { title: "The Verb To Be in Real Life", icon: <Languages />, link: "verb-to-be" },
    { title: "Countries and Nationalities", icon: <Globe />, link: "countries-and-nationalities" },
    { title: "Quick Review & Glossary", icon: <Flag />, link: "review-and-glossary" },
];

export default function IntroducingYourselfPage() {
    return (
        <ModuleTopics
            title="Introducing Yourself in English"
            basePath="/basic/personal-information-introductions/introducing-yourself"
            topics={topics}
        />
    );
}
