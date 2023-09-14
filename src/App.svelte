<script lang="ts">
  import { onMount } from 'svelte';
  import svelteLogo from './assets/svelte.svg'
  import type { DatabaseNotion } from './types/DatabaseNotion';

  //Añadimos la variable database para almacenar el id de la base de datos seleccionada
  let database = "";

  //Añadimos la variable databases para almacenar las bases de datos recuperadas de Notion
  let databases:DatabaseNotion[] = [];

  //Función que trae todas las bases de datos de Notion
  async function getDatabases() {
    const response = await fetch('http://localhost:3000/api/notion/databases');
    const data = await response.json();
    databases = data;
  }

</script>

<main>
  <div>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>AutoFill Dates</h1>

  <div class="card">
    <!--Añadimos el combobox con las distintas base de datos recuperadas de Notion-->
    <select bind:value={database} on:change={getDatabase}>
      {#each databases as db}
        <option value={db.id}>{db.title}</option>
      {/each}
  </div>

</main>