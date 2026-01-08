"use client";

import { motion } from "framer-motion";

interface DialogueLine {
    speaker: string;
    text: string;
}

interface DialogueBoxProps {
    title?: string;
    lines: DialogueLine[];
}

export default function DialogueBox({ title = "Dialogue", lines }: DialogueBoxProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow mb-10"
        >
            <h2 className="text-lg font-semibold text-blue-700 mb-3">{title}</h2>

            <div className="space-y-2 text-gray-800 font-medium">
                {lines.map((line, index) => (
                    <p key={index}>
                        <span className="text-blue-700 font-semibold">{line.speaker}:</span>{" "}
                        {line.text}
                    </p>
                ))}
            </div>
        </motion.div>
    );
}
