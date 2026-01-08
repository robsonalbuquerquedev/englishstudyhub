"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem("cookieConsent");
        if (!accepted) {
            setVisible(true);
        }
    }, []);

    function acceptCookies() {
        localStorage.setItem("cookieConsent", "true");
        setVisible(false);
    }

    if (!visible) return null;

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[600px] bg-white shadow-xl border rounded-xl p-5 z-50 backdrop-blur-md">

            <p className="text-gray-700 text-sm leading-relaxed">
                Usamos cookies para melhorar sua experiência e analisar o tráfego do site.
                Ao continuar navegando, você concorda com nossa{" "}
                <Link href="/politica-de-cookies" className="text-blue-700 font-medium underline">
                    Política de Cookies
                </Link>.
            </p>

            <div className="flex justify-end gap-3 mt-4">
                <button
                    onClick={acceptCookies}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer"
                >
                    OK, Entendi 👍
                </button>
            </div>
        </div>
    );
}
