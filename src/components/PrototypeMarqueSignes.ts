/*
 * PROTOTYPE — à jeter. Ticket « Choix de la marque »
 * (.scratch/identite-sans-monogramme/issues/04-choix-de-la-marque.md).
 *
 * Les signes candidats, en lignes médianes : chaque trait est un `stroke`,
 * donc chacun peut se tracer (stroke-dashoffset sur pathLength=1).
 * Règle droit + arc : segments droits et arcs d'un seul rayon par signe.
 * Les deux traits de « coins » et de « cadre » partent de germes images
 * l'un de l'autre par rotation à 180°, comme le tracé actuel (ADR-0005).
 */
export interface Signe {
	cle: string;
	nom: string;
	viewBox: string;
	/** largeur / hauteur */
	ratio: number;
	trait: number;
	cap: "butt" | "square";
	paths: string[];
}

export const SIGNES: Signe[] = [
	{
		// (a) Le rayon diagonal comme signe, ouvert : les deux seuls coins
		// arrondis, sans les coins vifs.
		cle: "coins",
		nom: "(a) rayon diagonal, coins",
		viewBox: "0 0 24 24",
		ratio: 1,
		trait: 2.6,
		cap: "butt",
		paths: ["M2 15V10A8 8 0 0 1 10 2H15", "M22 9V14A8 8 0 0 1 14 22H9"],
	},
	{
		// (a) Le rayon diagonal comme signe, fermé : le cadre d'un panneau.
		cle: "cadre",
		nom: "(a) rayon diagonal, cadre",
		viewBox: "0 0 24 24",
		ratio: 1,
		trait: 2.6,
		cap: "square",
		paths: ["M2 22V10A8 8 0 0 1 10 2H22", "M22 2V14A8 8 0 0 1 14 22H2"],
	},
	{
		// (b) SR monoline : droites et arcs d'un rayon unique (r = 5 pour une
		// hauteur de 20). Le R reprend la boucle basse du S pour sa jambe.
		cle: "sr",
		nom: "(b) SR construit",
		viewBox: "-1.5 -1.5 31 23",
		ratio: 31 / 23,
		trait: 2.6,
		cap: "butt",
		paths: [
			"M12 0H5A5 5 0 0 0 0 5A5 5 0 0 0 5 10H7A5 5 0 0 1 12 15A5 5 0 0 1 7 20H0",
			"M16 20V0H23A5 5 0 0 1 28 5A5 5 0 0 1 23 10H16",
			"M23 10A5 5 0 0 1 28 15V20",
		],
	},
];

export function svgSigne(s: Signe, couleur = "currentColor", extra = ""): string {
	const p = s.paths.map((d) => `<path d="${d}" pathLength="1"/>`).join("");
	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${s.viewBox}" fill="none" stroke="${couleur}" stroke-width="${s.trait}" stroke-linecap="${s.cap}" stroke-linejoin="miter" ${extra}>${p}</svg>`;
}
