---
title: 'JavaScript : Tutoriel Menu hamburger'
description: 'Je suis un post récent'
pubDate: 'Apr 30 2024'
heroImage: '../img/monachina2.jpg'
---

## JavaScript : Explorer les Fonctions et Comprendre les Variables

![javascript image](/img/monachina2.jpg)

Dans cette deuxième partie de notre guide pratique sur JavaScript, nous allons plonger dans l’univers fascinant des fonctions et explorer les subtilités entre `var`, `let` et `const`. Prépare-toi à démêler ces concepts essentiels dans ton parcours de développement web.

## Fonctions en JavaScript

Les fonctions sont des blocs de code réutilisables qui réalisent une tâche précise. Créer une fonction implique deux étapes fondamentales : la déclaration et l’exécution.

### Déclaration de Fonctions

```javascript
function saluer(nom) {
	console.log(`Bonjour, ${nom} !`);
}
```

Ici, `saluer` est le nom de la fonction, et `(nom)` sont les paramètres qu’elle peut accepter.

### Exécution de Fonctions

```javascript
saluer('Jean');
// Sortie : Bonjour, Jean !
```

Al llamar a la función `saludar` con el argumento `"Juan"`, ejecutamos el código dentro de la función y obtenemos la salida esperada.

### Tipos de Funciones

#### Funciones con Valor de Retorno

```javascript
function addition(a, b) {
	return a + b;
}

let resultat = addition(3, 5);
// resultat: 8
```

#### Fonction anonyme

```javascript
let saluer = function (nombre) {
	console.log(`Salut, ${nombre}`);
};

saluer('Ana');
// Saluer: Salut, Ana
```

#### Fonctions flecher

```javascript
let multiplication = (a, b) => a * b;

let product = multiplication(4, 6);
// product: 24
```

Les fonctions fléchées (`arrow functions`) sont une forme plus concise d’écrire des fonctions.

## Variables : var, let et const

### `var`

```javascript
function exempleVar() {
	if (true) {
		var x = 10;
	}
	console.log(x);
}

exempleVar();
// Sortie : 10
```

`var` a une portée de fonction, ce qui signifie que sa déclaration est remontée au niveau supérieur de son contexte d’exécution.

### `let`

```javascript
function exempleLet() {
	if (true) {
		let y = 20;
	}
	console.log(y); // Erreur
}

exempleLet();
```

`let` a une portée de bloc, ce qui signifie qu’il est limité au bloc de code le plus proche.

### `const`

```javascript
function exempleConst() {
	const PI = 3.14;
	console.log(PI);
}

exempleConst();
// Sortie: 3.14
```

Dans cet exemple, `const` est utilisé pour déclarer une constante `PI` et on lui assigne la valeur `3.14`. Bien qu’il soit possible d’assigner une valeur à `const` une seule fois, garde à l’esprit que cela n’empêche pas le contenu de l’objet auquel il se réfère de changer s’il s’agit d’un objet mutable.

## Scope en JavaScript

Le scope fait référence à l’accessibilité et à la visibilité des variables dans différentes parties du code.

### Scope Global

```javascript
let globalVar = 'Je suis global';

function exempleScopeGlobal() {
	console.log(globalVar);
}

exempleScopeGlobal();
// Sortie: Je suis global
```

### Scope Local

```javascript
function exempleScopeLocal() {
	let localVar = 'Je suis local';
	console.log(localVar);
}

ejemploScopeLocal();
// Sortie: Je suis local

console.log(localVar); // Erreur
```

Les variables déclarés avec `let` et `const` ont une portée de bloc, ce qui limite leur accessibilité au bloc dans lequel elles sont déclarées.

## Conclusion

Dans cette partie de notre guide JavaScript, nous avons exploré comment créer et exécuter des fonctions, ainsi que les différences entre `var`, `let` et `const`. Comprendre ces concepts est essentiel pour construire des applications solides et comprendre comment les variables influencent le flux et la structure de ton code. Dans la prochaine partie, nous plongerons dans des concepts plus avancés et nous te proposerons des exercices pratiques pour consolider tes connaissances. Continue à explorer et libère le potentiel de JavaScript dans tes projets web ! 🚀✨
