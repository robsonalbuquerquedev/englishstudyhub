/**
 * Guarda a última página de estudo visitada, apenas no aparelho do usuário (localStorage).
 * Nenhum dado é enviado a servidor.
 */

export type LastVisit = {
    href: string;
    title: string;
    visitedAt: number;
};

const KEY = "esh:last-visit";
const EVENT = "esh:last-visit-change";

/** Aceita só caminhos internos, para evitar redirecionamento externo via localStorage adulterado. */
function isInternalPath(value: string): boolean {
    return value.startsWith("/") && !value.startsWith("//");
}

export function parseLastVisit(raw: string | null): LastVisit | null {
    if (!raw) return null;
    try {
        const data = JSON.parse(raw) as Partial<LastVisit>;
        if (
            typeof data.href === "string" &&
            typeof data.title === "string" &&
            typeof data.visitedAt === "number" &&
            isInternalPath(data.href)
        ) {
            return { href: data.href, title: data.title, visitedAt: data.visitedAt };
        }
    } catch {
        /* JSON inválido: ignora */
    }
    return null;
}

export function getLastVisitRaw(): string | null {
    try {
        return window.localStorage.getItem(KEY);
    } catch {
        return null;
    }
}

export function saveLastVisit(visit: LastVisit): void {
    try {
        window.localStorage.setItem(KEY, JSON.stringify(visit));
        window.dispatchEvent(new Event(EVENT));
    } catch {
        /* storage bloqueado ou cheio: segue sem salvar */
    }
}

export function clearLastVisit(): void {
    try {
        window.localStorage.removeItem(KEY);
        window.dispatchEvent(new Event(EVENT));
    } catch {
        /* ignora */
    }
}

/** Para useSyncExternalStore: avisa quando a visita muda nesta aba ou em outra. */
export function subscribeLastVisit(onChange: () => void): () => void {
    const onStorage = (e: StorageEvent) => {
        if (e.key === null || e.key === KEY) onChange();
    };
    window.addEventListener("storage", onStorage);
    window.addEventListener(EVENT, onChange);
    return () => {
        window.removeEventListener("storage", onStorage);
        window.removeEventListener(EVENT, onChange);
    };
}