import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Un travail est soit une mission, soit une réalisation ; sa nature est
 * affichée, jamais implicite. Voir CONTEXT.md.
 */
const travaux = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/travaux" }),
	schema: ({ image }) =>
		z.object({
			titre: z.string(),
			nature: z.enum(["Mission", "Réalisation"]),
			organisation: z.string(),
			secteur: z.string(),
			periode: z.string(),
			/** Une ligne, affichée dans la liste de la home. */
			accroche: z.string(),
			role: z.string(),
			/** La contrainte dure : ce qui rendait le travail difficile. */
			contraintes: z.array(z.object({ titre: z.string(), texte: z.string() })),
			decisions: z.array(z.object({ titre: z.string(), texte: z.string() })),
			resultat: z.string(),
			stack: z.array(z.string()),
			liens: z
				.array(z.object({ label: z.string(), url: z.string().url().or(z.literal("")), note: z.string().optional() }))
				.default([]),
			visuel: image().optional(),
			visuelAlt: z.string().optional(),
			/** Pas de capture diffusable : traitement typographique pur. */
			sansVisuel: z.string().optional(),
			/** L'ordre de la liste est le discours. Voir CONTEXT.md. */
			ordre: z.number(),
		}),
});

export const collections = { travaux };
