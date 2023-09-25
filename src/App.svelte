<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import type { DatabaseNotion } from './types/DatabaseNotion';
  import { getUsers, getDatabases } from './NotionFetchs';
  
  //Añadimos la variable database para almacenar el id de la base de datos seleccionada
  let database = "";
  
  //Añadimos la variable databases para almacenar las bases de datos recuperadas de Notion
  let databases: DatabaseNotion[] = [];

  async function loadDatabases() {
    databases = await getDatabases();
  }

  loadDatabases();
  
</script>
  

<main>
  <div>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>AutoFill Dates</h1>

  <div class="card">
    Añadimos el combobox con las distintas base de datos recuperadas de Notion
    <select bind:value={database}>
      {#each databases as db}
        <option value={db.id}>{db.name}</option>
      {/each}
  </div>

</main>


  