---
layout: doc
---
CxtTemplate

<script setup lang="ts">
import { ref } from "vue";
import { useData } from "vitepress";

const { theme, page, frontmatter } = useData();

console.log(theme);
console.log(page);
console.log(frontmatter);

</script>
