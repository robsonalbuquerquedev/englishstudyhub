"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function ContatoPage() {
    const [status, setStatus] = useState<
        "idle" | "enviando" | "success" | "error"
    >("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("enviando");

        const form = e.currentTarget; // 👈 salva o form aqui
        const formData = new FormData(form);

        const res = await fetch(
            "https://formsubmit.co/ajax/00e62b2eb50670b440cf470c86da243f",
            {
                method: "POST",
                body: formData,
            }
        );

        if (res.ok) {
            setStatus("success");
            form.reset();
        } else {
            setStatus("error");
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-6 py-20">
            <section
                className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-xl border border-blue-100 p-10"
                aria-labelledby="contact-title"
            >
                {/* LEFT SIDE – HERO CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                >
                    <Mail className="w-14 h-14 text-blue-700" />

                    <h1
                        id="contact-title"
                        className="text-4xl font-bold text-blue-800 leading-tight"
                    >
                        Vamos conversar?
                    </h1>

                    <p className="text-gray-600 text-lg">
                        Dúvidas, sugestões ou ideias são sempre bem-vindas.
                        Preencha o formulário e eu responderei o mais breve possível.
                    </p>

                    <p className="text-sm text-gray-500">
                        EnglishStudyHub · Comunicação aberta e transparente
                    </p>
                </motion.div>

                {/* RIGHT SIDE – FORM */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="grid gap-5"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Seu nome"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Seu email"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                    />

                    <textarea
                        name="message"
                        placeholder="Sua message"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:border-blue-600 focus:outline-none"
                    />

                    {/* Hidden FormSubmit Config */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input
                        type="hidden"
                        name="_subject"
                        value="New message from EnglishStudyHub"
                    />

                    <button
                        type="submit"
                        disabled={status === "enviando"}
                        className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition disabled:opacity-60 cursor-pointer"
                    >
                        {status === "enviando" ? (
                            "enviando..."
                        ) : (
                            <>
                                Enviar Menssagem <Send className="w-5 h-5" />
                            </>
                        )}
                    </button>

                    {status === "success" && (
                        <p className="text-green-600 font-medium">
                            ✅ Mensagem enviada com sucesso! Obrigado.
                        </p>
                    )}

                    {status === "error" && (
                        <p className="text-red-600 font-medium">
                            ❌ Algo deu errado. Por favor, tente novamente mais tarde.
                        </p>
                    )}
                </motion.form>
            </section>
        </main>
    );
}
