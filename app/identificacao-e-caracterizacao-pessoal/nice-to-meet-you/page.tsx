"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    BookOpen,
    Handshake,
    Smile,
    Flag,
    Type,
    Users,
    User,
    Globe,
    NotebookPen,
    Languages
} from "lucide-react";

import TopicList from "../../components/topics/TopicList";

export default function NiceToMeetYou() {
    const topics = [
        { title: "The Experience Begins", icon: <BookOpen />, link: "the-experience-begins" },
        { title: "Episode", icon: <Handshake />, link: "episode" },
        { title: "Nice to meet you", icon: <Smile />, link: "lesson-nice-to-meet-you" },
        { title: "Greetings", icon: <Smile />, link: "greetings" },
        { title: "Being polite", icon: <User />, link: "being-polite" },
        { title: "The alphabet", icon: <Type />, link: "the-alphabet" },
        { title: "Subject pronouns", icon: <Users />, link: "subject-pronouns" },
        { title: "Verb To be", icon: <Languages />, link: "verb-to-be" },
        { title: "Possessive adjectives", icon: <NotebookPen />, link: "possessive-adjectives" },
        { title: "Countries and nationalities", icon: <Globe />, link: "countries-and-nationalities" },
        { title: "Resumo e glossário", icon: <Flag />, link: "resumo-e-glossario" },
    ];

    return (
        <TopicList
            title="Nice to meet you 👋"
            basePath="/identificacao-e-caracterizacao-pessoal/nice-to-meet-you"
            topics={topics}
        />
    );
}
