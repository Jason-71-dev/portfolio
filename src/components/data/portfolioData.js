/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de l'image
 * @property {string} title titre de l'image
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '/public/assets/crypto.png',
		title: 'Crypto-Watcher',
		skills: ['NodeJs', 'CSS'],
		descripcion:
			'Un petit projet sur les cryptomonnaie, je devais récupérer les prix de quelques crypto sur une api et les mettres a jour en temps réel',
			repoURL: 'https://github.com/Jason-71-dev',
		anim: 'fade-right',
	},
	{
		imgSrc: '/public/assets/lucien.png',
		title: 'Vert & Nature',
		skills: ['Html', 'Bootstrap'],
		descripcion:
			'Landing-page Bootstrap',
		
		repoURL: 'https://github.com/Jason-71-dev',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/public/assets/loopstudios.png',
		title: 'loopstudios',
		skills: ['Html', 'CSS'],
		descripcion:
			"Projet d'intégration avec menu burger",
		
		repoURL: 'https://github.com/Jason-71-dev',
		anim: 'fade-left',
	},
	{
		imgSrc: '/public/assets/Eterball.png',
		title: 'Eterball',
		skills: ['React', 'Sass'],
		descripcion:
			'Mon projet personnel pour le titre de DWWM',
		
		repoURL: 'https://github.com/Jason-71-dev',
		anim: 'fade-left',
	},
	
];

const skillIcons = {
	NodeJs: 'vscode-icons:file-type-node',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
	Html: 'skill-icons:html'
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
