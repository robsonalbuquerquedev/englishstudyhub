import type { GlossaryEntry } from "@/type/glossaryType";
import { introducingYourself } from "./basic/introducing-yourself";

/**
 * Registro único de glossários.
 * Para cada aula migrada: crie o arquivo de dados e adicione-o a esta lista.
 * A ordem aqui é a ordem em que aparecem dentro de cada módulo no hub.
 */
export const glossaries: GlossaryEntry[] = [
    introducingYourself,
    // TODO: adicionar os glossários das demais aulas
];

/** Falha de propósito no build se o id não existir, em vez de publicar uma aula sem glossário. */
export function getGlossary(id: string): GlossaryEntry {
    const entry = glossaries.find((g) => g.id === id);
    if (!entry) {
        throw new Error(
            `Glossário "${id}" não encontrado. Registre-o em src/data/glossaries/index.ts.`
        );
    }
    return entry;
}