<script setup>
import { ref, onMounted } from 'vue';
import InfoAside from '../components/InfoAside.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const project = ref(null);
const base = import.meta.env.BASE_URL;
const withBase = (url) => url.startsWith('http') ? url : base + url;

onMounted(async () => {
  try {
    const base = import.meta.env.BASE_URL;
    const resp = await fetch(`${base}data/projects.json`);
    const json = await resp.json();
    project.value = json.find(p => p.slug === route.params.slug);
  } catch (e) {
    console.error('Failed to load project details', e);
  }
});
</script>

<template>
  <main v-if="project">
    <InfoAside />
    <article class="projet-detail">
      <h1>{{ project.title }}</h1>
      <section v-for="(sect, idx) in project.sections" :key="idx">
        <h2>{{ sect.title }}</h2>
        <template v-for="(para, pIdx) in sect.content" :key="pIdx">
          <!-- simple string paragraph -->
          <p v-if="typeof para === 'string'">{{ para }}</p>

          <!-- paragraph stored as link object { text, link:{href,text} } -->
          <p v-else-if="para.text && para.link">
            {{ para.text }}
            <a :href="withBase(para.link.href)" target="_blank" rel="noopener">{{ para.link.text }}</a>
          </p>

          <!-- paragraph represented as array of mixed parts (string | {text,link}) -->
          <p v-else-if="Array.isArray(para)">
            <span v-for="(part,i) in para" :key="i">
              <template v-if="typeof part === 'string'">{{ part }}</template>
              <template v-else><a :href="withBase(part.link.href)" target="_blank" rel="noopener">{{ part.link.text }}</a></template>
            </span>
          </p>

          <!-- subsection object with title & content -->
          <div v-else>
            <h3>{{ para.title }}</h3>
            <p v-for="(t, tIdx) in para.content" :key="tIdx">
              <template v-if="typeof t === 'string'">{{ t }}</template>
              <template v-else-if="t.text && t.link">
                {{ t.text }} <a :href="withBase(t.link.href)" target="_blank" rel="noopener">{{ t.link.text }}</a>
              </template>
              <template v-else-if="Array.isArray(t)">
                <span v-for="(part,i) in t" :key="i">
                  <template v-if="typeof part==='string'">{{ part }}</template>
                  <template v-else><a :href="withBase(part.link.href)" target="_blank" rel="noopener">{{ part.link.text }}</a></template>
                </span>
              </template>
            </p>
          </div>
        </template>
      </section>
    </article>
  </main>
  <p v-else>Chargement…</p>
</template>
