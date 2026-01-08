import TopicList from "@/components/topics/TopicList";

interface Topic {
    title: string;
    icon: React.ReactNode;
    link: string;
}

interface ModuleTopicsProps {
    title: string;
    basePath: string;
    topics: Topic[];
}

export default function ModuleTopics({
    title,
    basePath,
    topics,
}: ModuleTopicsProps) {
    return (
        <TopicList
            title={title}
            basePath={basePath}
            topics={topics}
        />
    );
}
