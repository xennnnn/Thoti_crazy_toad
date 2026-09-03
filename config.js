/* ============================================================
   CONFIG — C'EST ICI QUE TU REMPLIS TOUT
   ============================================================
   1) pseudo / bio : tes infos, affichées au centre et en haut
   2) branches : les 8 pétales (7 domaines de la permaculture +
      Éthique & Principes), chacun avec ses sous-branches
   3) chaque élément peut avoir un tableau "enfants" qui contient
      d'autres éléments EXACTEMENT au même format : nom, icone,
      couleur, description, lien, enfants. Tu peux imbriquer
      autant de niveaux que tu veux (testé jusqu'à 10+).
   4) "couleur" est optionnelle sur les sous-branches : si tu la
      laisses vide, elles héritent de la couleur du pétale parent.
   ============================================================ */

window.CONFIG = {
  pseudo: "TON_PSEUDO",
  bio: "Ta courte bio arrive ici — deux ou trois phrases qui te présentent.",

  branches: [

    {
      nom: "Soins à la Nature et à la Terre",
      icone: "🌱",
      couleur: "#5fb583",
      description: "Le domaine historique de la permaculture : entretenir le sol, les forêts et l'eau, à l'origine de tous les autres domaines.",
      enfants: [
        { nom: "Agriculture biologique", icone: "🌾", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Agroforesterie", icone: "🌳", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        {
          nom: "Jardin-forêts", icone: "🌲",
          description: "Un système cultivé qui imite la structure d'une forêt naturelle, avec plusieurs strates de végétation.",
          enfants: [
            {
              nom: "Strate arborée", icone: "🌳",
              description: "Exemple de sous-branche de niveau 3 — remplace par tes propres notes.",
              enfants: [
                {
                  nom: "Espèce ou variété", icone: "🍃",
                  description: "Niveau 4 — ajoute ici une essence précise que tu cultives ou que tu aimerais planter.",
                  enfants: [
                    {
                      nom: "Détail technique", icone: "📋",
                      description: "Niveau 5 — par exemple : exposition, sol, association favorable.",
                      enfants: [
                        {
                          nom: "Astuce personnelle", icone: "💡",
                          description: "Niveau 6 — un conseil ou un retour d'expérience que tu veux garder.",
                          enfants: [
                            {
                              nom: "Suivi / journal", icone: "📆",
                              description: "Niveau 7 — une observation datée, un suivi de croissance.",
                              enfants: [
                                {
                                  nom: "Note complémentaire", icone: "📝",
                                  description: "Niveau 8 — tout ce que tu veux ajouter en complément.",
                                  enfants: [
                                    {
                                      nom: "Ressource liée", icone: "🔗",
                                      description: "Niveau 9 — une source, un livre, une vidéo qui t'a aidé.",
                                      enfants: [
                                        {
                                          nom: "Contact / projet", icone: "🤝",
                                          description: "Niveau 10 — la démonstration s'arrête ici, mais tu peux continuer à imbriquer si besoin.",
                                          lien: ""
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        { nom: "Gestion holistique des pâturages", icone: "🐐", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Approche Keyline (collecte des eaux)", icone: "💧", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Aquaculture", icone: "🐟", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Jardinage bio-intensif", icone: "🥕", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Cueillette et savoirs sauvages", icone: "🍄", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Collecte de graines", icone: "🌻", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Réseaux WWOOF", icone: "🚜", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." }
      ]
    },

    {
      nom: "Habitat",
      icone: "🏡",
      couleur: "#c9885a",
      description: "Construire et habiter en cohérence avec le lieu : matériaux naturels, sobriété énergétique, autoconstruction.",
      enfants: [
        { nom: "Maisons passives", icone: "☀️", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Autoconstruction", icone: "🔨", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Matériaux naturels", icone: "🪵", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Collecte et réutilisation de l'eau", icone: "🚿", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Prise en compte des risques naturels", icone: "⚠️", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." }
      ]
    },

    {
      nom: "Outils & Technologie",
      icone: "🛠️",
      couleur: "#4fd8e0",
      description: "Choisir des outils à l'échelle humaine, sobres en énergie, réparables et réutilisables.",
      enfants: [
        { nom: "Outils à main", icone: "🔧", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Vélos et vélos électriques", icone: "🚲", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Recyclage et réemploi inventif", icone: "♻️", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Micro-turbines et micro-éoliennes", icone: "💨", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." }
      ]
    },

    {
      nom: "Enseignement & Culture",
      icone: "📖",
      couleur: "#a78bd9",
      description: "Transmettre et apprendre autrement : par la pratique, le lien social et la créativité.",
      enfants: [
        { nom: "Enseignement à domicile", icone: "🏠", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Écoles Waldorf", icone: "🎨", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Musique et création participative", icone: "🎵", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Écologie sociale", icone: "🤝", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Apprentissage « en faisant »", icone: "🖐️", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." }
      ]
    },

    {
      nom: "Santé & Bien-être",
      icone: "🌿",
      couleur: "#e08fd0",
      description: "Prendre soin du corps et de l'esprit avec des approches douces et enracinées dans le vivant.",
      enfants: [
        { nom: "Accouchement à domicile, allaitement", icone: "🤱", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Médecines complémentaires", icone: "🌾", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Yoga, Tai Chi", icone: "🧘", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Dignité dans la mort", icone: "🕊️", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Sens du lieu, cultures indigènes", icone: "🪶", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." }
      ]
    },

    {
      nom: "Finance & Économie",
      icone: "💠",
      couleur: "#d9b872",
      description: "Réorganiser l'échange et la valeur autour de la communauté locale plutôt que des marchés globaux.",
      enfants: [
        { nom: "Monnaies locales et régionales", icone: "💱", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Covoiturage, voitures partagées", icone: "🚗", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Épargne solidaire, commerce équitable", icone: "🤲", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Bilan carbone, cycle de vie", icone: "📊", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Quotas d'émission négociables", icone: "📉", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." }
      ]
    },

    {
      nom: "Foncier & Gouvernance",
      icone: "🏘️",
      couleur: "#7ea8ff",
      description: "Comment se répartir la terre et décider ensemble : habitat collectif, consensus, coopératives.",
      enfants: [
        { nom: "Habitat collectif, éco-villages", icone: "🏘️", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Écoute et consensus en réunion", icone: "🗣️", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Coopératives et associations", icone: "🧑‍🤝‍🧑", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." },
        { nom: "Droits d'usage traditionnels", icone: "📜", description: "Remplace ce texte par ta propre pratique ou ton lien avec ce sujet." }
      ]
    },

    {
      nom: "Éthique & Principes de conception",
      icone: "✴️",
      couleur: "#eecf7a",
      description: "Le socle de la démarche permaculturelle, d'où partent les sept autres domaines, selon David Holmgren.",
      enfants: [
        { nom: "Prendre soin de la terre", icone: "🌍", description: "Préserver et régénérer les sols, les forêts et l'eau, comme fondement de tout le reste." },
        { nom: "Prendre soin de l'humain", icone: "❤️", description: "Veiller sur soi-même, ses proches et sa communauté." },
        { nom: "Partager équitablement", icone: "⚖️", description: "Limiter sa consommation et redistribuer les surplus plutôt que les accumuler." },
        {
          nom: "Les 12 principes de conception", icone: "🌀",
          description: "Douze repères formulés par David Holmgren pour guider les choix de conception, du plus concret au plus systémique.",
          enfants: [
            { nom: "1. Observer et interagir", icone: "👁️", description: "« La beauté est dans les yeux de celui qui regarde. » Prendre le temps de regarder et d'échanger avec son environnement avant d'agir." },
            { nom: "2. Collecter et stocker l'énergie", icone: "🔋", description: "« Faites les foins tant qu'il fait beau. » Profiter des périodes d'abondance pour constituer des réserves durables." },
            { nom: "3. Créer une production", icone: "🌾", description: "« On ne peut pas travailler l'estomac vide. » S'assurer que chaque système produit un résultat utile dès maintenant." },
            { nom: "4. Appliquer l'auto-régulation", icone: "🔁", description: "« Les fautes des pères rejailliront sur les enfants. » Construire des systèmes capables de s'ajuster grâce aux signaux qu'ils reçoivent." },
            { nom: "5. Valoriser les ressources renouvelables", icone: "☀️", description: "« Laissons faire la nature. » Privilégier ce que la nature offre gratuitement plutôt que des solutions coûteuses en énergie." },
            { nom: "6. Ne pas produire de déchets", icone: "♻️", description: "« Pas de gaspillage, pas de manque. » Considérer chaque déchet comme une ressource mal placée." },
            { nom: "7. Des structures d'ensemble aux détails", icone: "🗺️", description: "« C'est l'arbre qui cache la forêt. » Comprendre la vue d'ensemble avant de se plonger dans les détails." },
            { nom: "8. Intégrer plutôt que séparer", icone: "🔗", description: "« Plus on est nombreux, moins le travail est dur. » Faire en sorte que les éléments d'un système se soutiennent mutuellement." },
            { nom: "9. Petite échelle et patience", icone: "🐢", description: "« Rien ne sert de courir, il faut partir à point. » Préférer des systèmes à taille humaine, faciles à ajuster." },
            { nom: "10. Valoriser la diversité", icone: "🌈", description: "« Ne mettez pas tous vos œufs dans le même panier. » La variété rend un système plus résilient face aux aléas." },
            { nom: "11. Valoriser les bordures", icone: "🌊", description: "« La bonne route n'est pas toujours la plus fréquentée. » Les zones de rencontre entre deux milieux sont souvent les plus riches." },
            { nom: "12. Utiliser le changement avec créativité", icone: "🦋", description: "« La vision ne consiste pas à voir les choses comme elles sont, mais comme elles seront. » Accueillir le changement comme une occasion d'évoluer." }
          ]
        }
      ]
    }

  ]
};
