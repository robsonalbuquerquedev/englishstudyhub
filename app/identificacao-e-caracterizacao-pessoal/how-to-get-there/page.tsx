"use client";

import TopicList from "../../components/topics/TopicList";
import {
    MapPinned,
    Navigation,
    BookOpen,
    Video,
    Ruler,
    Clock,
    Building,
    Landmark,
    HelpCircle,
    Map,
    Calendar,
    Timer,
    ArrowBigRight,
    ListOrdered,
    Volume2,
    Type,
    FileText,
    GraduationCap,
    Flag
} from "lucide-react";

export default function HowToGetThere() {
    const topics = [
        { title: "What’s the way to?", icon: <Navigation />, link: "whats-the-way-to" },
        { title: "Episode: What’s the way to?", icon: <Video />, link: "episode-whats-the-way-to" },
        { title: "Lesson — How to get there", icon: <MapPinned />, link: "lesson-how-to-get-there" },
        { title: "Episode", icon: <Video />, link: "episode" },
        { title: "Measuring distances", icon: <Ruler />, link: "measuring-distances" },
        { title: "Evening or night?", icon: <Clock />, link: "evening-or-night" },
        { title: "Places in the city (I)", icon: <Building />, link: "places-in-the-city-1" },
        { title: "Places in the city (II)", icon: <Landmark />, link: "places-in-the-city-2" },
        { title: "Question words", icon: <HelpCircle />, link: "question-words" },
        { title: "Prepositions & place expressions", icon: <Map />, link: "prepositions-and-place" },
        { title: "Days of the week", icon: <Calendar />, link: "days-of-the-week" },
        { title: "Prepositions & time expressions", icon: <Timer />, link: "prepositions-and-time" },
        { title: "Giving directions (Imperative)", icon: <ArrowBigRight />, link: "giving-directions" },
        { title: "Ordinal numbers", icon: <ListOrdered />, link: "ordinal-numbers" },
        { title: "The “th” sound", icon: <Volume2 />, link: "the-th-sound" },
        { title: "Teen vs -ty", icon: <Type />, link: "teen-vs-ty" },
        { title: "The definite article & zero article", icon: <FileText />, link: "article-zero-article" },
        { title: "The school year in the USA", icon: <GraduationCap />, link: "school-year-usa" },
        { title: "Resumo e glossário", icon: <Flag />, link: "resumo-e-glossario" },
    ];

    return (
        <TopicList
            title="How to get there 🗺️"
            basePath="/identificacao-e-caracterizacao-pessoal/how-to-get-there"
            backLink="/identificacao-e-caracterizacao-pessoal"
            topics={topics}
        />
    );
}
