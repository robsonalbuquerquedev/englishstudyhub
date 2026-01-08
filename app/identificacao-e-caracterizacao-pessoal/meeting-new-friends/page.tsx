"use client";

import TopicList from "@/components/topics/TopicList";

import { BookOpen, Video, Users, Boxes, Briefcase, Hash, FileText, HelpCircle, Phone, MessageCircle, Repeat, Flag } from "lucide-react";

export default function MeetingNewFriends() {
    const topics = [
        { title: "The Experience Begins", icon: <BookOpen />, link: "the-experience-begins" },
        { title: "Episode", icon: <Video />, link: "episode" },
        { title: "Meeting new people", icon: <Users />, link: "meeting-new-people" },
        { title: "Demonstrative pronouns", icon: <Boxes />, link: "demonstrative-pronouns" },
        { title: "The plural of words", icon: <FileText />, link: "plural-of-words" },
        { title: "Professions and occupations", icon: <Briefcase />, link: "professions-and-occupations" },
        { title: "Cardinal numbers / Zero", icon: <Hash />, link: "cardinal-numbers" },
        { title: "Indefinite articles", icon: <FileText />, link: "indefinite-articles" },
        { title: "Question words", icon: <HelpCircle />, link: "question-words" },
        { title: "Reading addresses and telephone numbers", icon: <Phone />, link: "reading-addresses-and-numbers" },
        { title: "How are you? vs. How old are you?", icon: <MessageCircle />, link: "how-are-you-vs-how-old-are-you" },
        { title: "Asking for help — Repeat, please", icon: <Repeat />, link: "asking-for-help" },
        { title: "Resumo e Glossário", icon: <Flag />, link: "resumo-e-glossario" },
    ];

    return (
        <TopicList
            title="Meeting New Friends 🤝"
            basePath="/identificacao-e-caracterizacao-pessoal/meeting-new-friends"
            topics={topics}
        />
    );
}
