"use client";

interface LessonTableProps {
    title?: string;
    headers: string[];
    rows: string[][];
}

export default function LessonTable({ title, headers, rows }: LessonTableProps) {
    return (
        <div className="mb-8 overflow-x-auto">
            {title && <h3 className="text-lg font-semibold text-blue-700 mb-2">{title}</h3>}

            <table className="w-full border border-blue-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-blue-100 text-blue-800 font-semibold">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="px-4 py-2 border border-blue-200 text-left">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={rowIndex % 2 === 0 ? "bg-white" : "bg-blue-50"}
                        >
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="px-4 py-2 border border-blue-200">
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
