import Link from "next/link";

interface ModuleLinkProps {
    href: string;
    children: React.ReactNode;
}

export default function ModuleLink({ href, children }: ModuleLinkProps) {
    return (
        <Link
            href={href}
            className="
        block
        h-full
        rounded-xl
        focus:outline-none
        focus:ring-2
        focus:ring-blue-400
        focus:ring-offset-2
      "
        >
            {children}
        </Link>
    );
}
