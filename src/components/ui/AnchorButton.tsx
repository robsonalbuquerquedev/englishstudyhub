import Link from "next/link";

interface AnchorButtonProps {
    href: string;
    children: React.ReactNode;
}

export default function AnchorButton({ href, children }: AnchorButtonProps) {
    return (
        <Link
            href={href}
            className="
        inline-flex items-center justify-center
        rounded-xl
        bg-blue-600
        px-6 py-3
        text-base font-semibold text-white
        shadow-md
        transition-all duration-300
        hover:bg-blue-700 hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
      "
        >
            {children}
        </Link>
    );
}
