<template>
  <main>
    <info-aside />
    <article>
      <h1>Page d'accueil</h1>

      <section>
        <h2>À propos de moi</h2>
        <p>
          Je m'appelle Mathieu Camus, actuellement étudiant en 3e année du BUT Informatique, spécialité
          <i>Réalisation d'applications : conception, développement, validation</i>, à l'IUT2 de Grenoble.
          Je suis admis à l'Esisar Valence (école d'ingénieurs de Grenoble INP) où je poursuivrai mes études en
          alternance chez STMicroelectronics Grenoble.
        </p>
        <p>
          J'ai découvert les systèmes embarqués lors de mon alternance chez Elyxoft, où j'ai développé des outils pour
          piloter et tester des équipements physiques connectés (via Zigbee ou Thread).
          Ce qui m'a immédiatement plu dans ce domaine, c'est sa proximité avec le monde réel.
          Les systèmes embarqués interagissent avec leur environnement, que ce soit via des LEDs, des capteurs, des
          actionneurs ou à travers des communications réseau fondées sur des principes physiques.
        </p>
        <p>
          Aujourd'hui, après avoir travaillé sur les couches logicielles qui interagissent avec l'embarqué, j'aspire à
          plonger plus bas dans la pile, pour me rapprocher du matériel, comprendre ses contraintes et contribuer à des
          solutions efficaces et robustes.
        </p>
        <p>
          Je suis une personne polyvalente, autonome et rigoureuse, toujours motivée à apprendre et à m'adapter.
        </p>
      </section>

      <section>
        <h2>Ce que je recherche</h2>
        <p>
          Je suis encore en exploration des domaines applicatifs autour de l'embarqué (automobile, santé, domotique,
          temps réel…).
          Ce qui m'intéresse avant tout, c'est comprendre les problématiques propres à un système donné et concevoir des
          solutions adaptées, tout en tenant compte des contraintes techniques et physiques.
        </p>
      </section>

      <section>
        <h2>Mes compétences</h2>
        <section id="sect-competences">
          <div>
            <h3>Techniques</h3>
            <ul>
              <li>
                Langages de programmation:
                <ul class="langages">
                  <li>C++</li>
                  <li>C</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>PHP</li>
                </ul>
              </li>
              <li>
                base de données:
                <ul class="langages">
                  <li>SQL (PostgreSQL)</li>
                  <li> MongoDB</li>
                  <li> Neo4J</li>
                  <li>ElasticSearch</li>
                </ul>
              </li>
              <li>
                développement Web:
                <ul class="langages">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Angular</li>
                </ul>
              </li>
              <li>
                Outils de développement :
                <ul class="langages">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>Visual Paradigm</li>
                  <li>PlantUML</li>
                </ul>
              </li>
              <li>
                Frameworks:
                <ul class="langages">
                  <li>Flutter</li>
                  <li>JavaFX</li>
                  <li>Qt</li>
                </ul>
              </li>
              <li>
                Tests:
                <ul class="langages">
                  <li>Mocha</li>
                  <li>Cypress</li>
                </ul>
              </li>
              <li>
                Matériel et systèmes embarqués :
                <ul class="langages">
                  <li>OpenThread, Zigbee, BLE</li>
                  <li>Raspberry Pi, ESP32</li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <h3>Transversales</h3>
            <ul>
              <li>Organisé</li>
              <li>Autonome</li>
              <li>Polyvalent</li>
              <li>Persévérant</li>
            </ul>
          </div>
        </section>
      </section>

      <section>
        <h2>En savoir plus</h2>
        <p>
          Vous souhaitez en savoir plus sur mon parcours, mes compétences et
          mes projets ? Je vous invite à explorer les autres sections de mon
          Portfolio pour découvrir mes réalisations et mon travail.
        </p>
      </section>

    </article>
  </main>
</template>

<script setup>
import InfoAside from '../components/InfoAside.vue';
</script>
