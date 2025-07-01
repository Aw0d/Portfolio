<script setup>
import { ref, onMounted } from 'vue';

const grouped = ref([]);

onMounted(async () => {
  try {
    const base = import.meta.env.BASE_URL;
    const resp = await fetch(`${base}data/projects.json`);
    const json = await resp.json();
    // json is now a flat array of projects
    const catMap = {};
    json.forEach((p) => {
      if (!catMap[p.category]) catMap[p.category] = {};
      if (!catMap[p.category][p.year]) catMap[p.category][p.year] = [];
      // ensure img path present
      const img = p.img ? (p.img.startsWith('http') ? p.img : `${base}img/${p.img.replace(/^.*[\\/]/,'')}`)
                        : `${base}img/${p.slug}.jpg`;
      catMap[p.category][p.year].push({ ...p, img });
    });
    grouped.value = Object.keys(catMap).map(label => ({
      label,
      years: Object.keys(catMap[label]).sort((a,b)=>b.localeCompare(a)).map(year=>({
        year,
        items: catMap[label][year]
      }))
    }));
  } catch (err) {
    console.error('Failed to load projects.json', err);
  }
});
</script>

<template>
  <section v-for="(cat, idx) in grouped" :key="idx">
    <h2>{{ cat.label }}</h2>
    <section v-for="sect in cat.years" :key="sect.year">
      <h3>{{ sect.year }}</h3>
      <div class="sae-projets">
        <RouterLink v-for="proj in sect.items" :key="proj.link" :to="{ name: 'project', params: { slug: proj.slug } }">
          <div>
            <figure>
              <img :src="proj.img" :alt="proj.title" class="miniature" />
              <span class="badge">{{ proj.badge }}</span>
            </figure>
          </div>
        </RouterLink>
      </div>
    </section>
  </section>
</template>
