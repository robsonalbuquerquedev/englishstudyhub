import { BookOpen, Smile, Handshake, Users, User, Globe, Languages, Flag } from "lucide-react";
// import ModuleTopics from "@/components/modules/ModuleTopics";
import UnderDevelopment from "@/components/UnderDevelopment";

const topics = [
    { title: "Breaking the Ice", icon: <Smile />, link: "breaking-the-ice" },
    { title: "Greetings and First Impressions", icon: <Handshake />, link: "greetings-and-first-impressions" },
    { title: "Introducing Yourself", icon: <User />, link: "introducing-yourself" }, { title: "Asking Simple Questions", icon: <Languages />, link: "asking-simple-questions" },
    { title: "Talking About Where You Are From", icon: <Globe />, link: "talking-about-origins" },
    { title: "Keeping the Conversation Going", icon: <Users />, link: "keeping-the-conversation-going" },
    { title: "Common Expressions for Friendly Talks", icon: <BookOpen />, link: "common-friendly-expressions" },
    { title: "Quick Review & Glossary", icon: <Flag />, link: "review-and-glossary" }
];

export default function StartingConversationsAndMakingFriendsPage() {
    return (
        // <ModuleTopics
        //     title="Starting Conversations and Making Friends"
        //     basePath="/basic/personal-information-introductions/starting-conversations"
        //     topics={topics}
        // />
        <UnderDevelopment />
    );
}
