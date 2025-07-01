<template>
  <main>
    <info-aside />
    <article>
      <h1>Page d'accueil</h1>
      <p>
        Bienvenue sur mon Portfolio ! Je suis Mathieu Camus, un étudiant en
        BUT Informatique passionné par la programmation. Je m'efforce d'allier
        mes connaissances techniques à ma créativité pour apporter des
        solutions uniques aux problèmes rencontrés.
      </p>

      <section>
        <h2>Qui-suis-je ?</h2>
        <p>
          Je suis un étudiant passionné qui cherche constamment à élargir mes
          horizons dans le domaine de l'informatique. Mon parcours en BUT
          Informatique me permet d'acquérir une solide base de connaissances
          et de compétences techniques, notamment dans les langages de
          programmation tels que Java, C, C++, HTML, CSS, JavaScript, Python, SQL.
          Ce qui me motive, c'est la possibilité de créer des solutions qui
          facilitent la vie des utilisateurs et qui résolvent des problèmes concrets.
          J'adore explorer de nouvelles technologies et j'aime me tenir au
          courant des dernières tendances de l'industrie. Ma volonté d'apprendre
          me permet de m'adapter rapidement aux nouveaux défis et de trouver des
          solutions efficaces.
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
                </ul>
              </li>
              <li>
                Langages Web:
                <ul class="langages">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>PHP</li>
                </ul>
              </li>
              <li>
                Base de données:
                <ul class="langages">
                  <li>PostgreSQL</li>
                </ul>
              </li>
              <li>
                Création d'IHM:
                <ul class="langages">
                  <li>JavaFX</li>
                  <li>Qt</li>
                </ul>
              </li>
              <li>
                Gestion de projet:
                <ul class="langages">
                  <li>Git</li>
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
              <li>Esprit critique</li>
            </ul>
          </div>
        </section>
        <p>
          N'hésitez pas à explorer davantage mes compétences techniques dans
          la section "Mes Projets" où je décris en détail comment j'ai utilisé
          ces compétences pour réaliser des projets concrets.
        </p>
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
