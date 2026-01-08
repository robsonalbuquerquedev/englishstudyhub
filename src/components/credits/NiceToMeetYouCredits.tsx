"use client";

import { motion } from "framer-motion";
import { BookOpenText } from "lucide-react";

export default function NiceToMeetYouCredits() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 text-sm text-gray-600 text-center border-t border-blue-200 pt-6"
        >
            <div className="flex items-center justify-center gap-2 mb-2">
                <BookOpenText className="w-6 h-6 text-blue-600" />
                <h4 className="font-semibold text-blue-700">Créditos</h4>
            </div>

            <p className="max-w-xl mx-auto leading-relaxed text-gray-700">
                Este material foi baseado em:<br />
                MOREIRA, Helton Bezerra; PAULO, Juciana Maria; FILHO, Lourival Soares de Aquino;
                LIMA, Júlio César Ferreira. <em>English.</em> Instituto Federal Sul-riograndense / Rede e-Tec Brasil, Pelotas: 2015.
            </p>
        </motion.div>
    );
}
