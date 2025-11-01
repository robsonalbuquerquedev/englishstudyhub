"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function ContatoPage() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setStatus("sending");

        const formData = new FormData(e.target);

        const res = await fetch("https://formsubmit.co/ajax/00e62b2eb50670b440cf470c86da243f", {
            method: "POST",
            body: formData
        });

        if (res.ok) {
            setStatus("success");
            e.target.reset();
        } else {
            setStatus("error");
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-6">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-10 border border-blue-100">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-10"
                >
                    <Mail className="mx-auto w-12 h-12 text-blue-700 mb-3" />
                    <h1 className="text-3xl font-bold text-blue-800">
                        Fale Conosco
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Tem alguma dúvida, sugestão ou quer compartilhar sua experiência?
                        Envie sua mensagem! 😊
                    </p>
                </motion.div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="grid gap-5">
                    <input
                        type="text"
                        name="name"
                        placeholder="Seu nome"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Seu e-mail"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Sua mensagem"
                        className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:border-blue-500 focus:outline-none"
                        required
                    />

                    {/* Hidden FormSubmit Config */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_subject" value="Nova mensagem do StudyEnglishHub!" />

                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition disabled:opacity-60 cursor-pointer"
                    >
                        {status === "sending" ? (
                            "Enviando..."
                        ) : (
                            <>
                                Enviar Mensagem <Send className="w-5 h-5" />
                            </>
                        )}
                    </button>

                    {status === "success" && (
                        <p className="text-green-600 font-medium mt-2">
                            ✅ Mensagem enviada com sucesso! Obrigado por entrar em contato. 🙂
                        </p>
                    )}

                    {status === "error" && (
                        <p className="text-red-600 font-medium mt-2">
                            ❌ Ocorreu um erro. Tente novamente mais tarde.
                        </p>
                    )}
                </form>
            </div>
        </main>
    );
}
