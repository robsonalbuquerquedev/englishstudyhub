"use client";

import { useEffect, useRef } from "react";

declare global {
    interface Window {
        adsbygoogle?: unknown[];
    }
}

/**
 * Cada nome de posição aponta para o ID do bloco de anúncio criado no AdSense.
 * As variáveis NEXT_PUBLIC_* precisam ser referenciadas assim, de forma estática,
 * para o Next.js substituí-las no build.
 */
const AD_SLOTS = {
    "home-after-modules": process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME_1,
    "home-after-featured": process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME_2,
} as const;

const AD_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT; // ex.: "ca-pub-0000000000000000"

export type AdSlotName = keyof typeof AD_SLOTS;

export default function AdSlot({ slot }: { slot: AdSlotName }) {
    const pushed = useRef(false);
    const slotId = AD_SLOTS[slot];
    const enabled = Boolean(AD_CLIENT && slotId);

    useEffect(() => {
        if (!enabled || pushed.current) return;
        pushed.current = true;
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch {
            /* script bloqueado (adblock) ou ainda não carregado: ignora */
        }
    }, [enabled]);

    if (!enabled) {
        // Em desenvolvimento mostra onde o anúncio ficará; em produção não ocupa espaço.
        if (process.env.NODE_ENV !== "production") {
            return (
                <div className="max-w-7xl mx-auto mt-16 px-4">
                    <div className="flex min-h-[120px] items-center justify-center rounded-xl border-2 border-dashed border-gray-300 text-sm text-gray-400">
                        Espaço de anúncio: {slot}
                    </div>
                </div>
            );
        }
        return null;
    }

    return (
        <aside
            aria-label="Publicidade"
            className="max-w-7xl mx-auto mt-16 px-4"
        >
            <p className="mb-1 text-center text-[11px] uppercase tracking-wide text-gray-400">
                Publicidade
            </p>
            {/* min-height reserva espaço e evita layout shift quando o anúncio carrega */}
            <div className="min-h-[280px]">
                <ins
                    className="adsbygoogle"
                    style={{ display: "block" }}
                    data-ad-client={AD_CLIENT}
                    data-ad-slot={slotId}
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                />
            </div>
        </aside>
    );
}