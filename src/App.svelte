<script>
  import { onMount } from 'svelte';

  let memeUrl = '';
  let isLoading = true;

  async function fetchMeme() {
    isLoading = true; 
    try {
      const response = await fetch('https://meme-api.com/gimme');
      const data = await response.json();
      memeUrl = data.url; 
    } catch (error) {
      console.error('Error fetching meme:', error);
    } finally {
      isLoading = false; 
    }
  }


  onMount(() => {
    fetchMeme();
  });
</script>

<main class="meme__container">
  <article class="meme__card">
    <header>
      <h1>Random Meme Generator</h1>
    </header>
    
    {#if isLoading}
      <!-- Loading component (aria-busy="true") -->
      <div class="loading" aria-busy="true">
        Loading meme...
      </div>
    {/if}
    
    {#if !isLoading}
      <!-- Display image once meme is loaded -->
      <img src={memeUrl} alt="Random Meme" width="400" />
    {/if}

    <footer>
      <div class="button__container">
        <button on:click={fetchMeme}>Get Funny</button>
      </div>
    </footer>
  </article>
</main>

<style>
  .meme__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .button__container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .meme__card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .loading {
    font-size: 1.2rem;
    color: #333;
  }
  img {
  max-width: 80%; /* Ensures the image never exceeds the container's width */
  max-height: 80vh; /* Ensures the image fits within 80% of the viewport height */
  width: auto;      /* Maintains aspect ratio for width */
  height: auto;     /* Maintains aspect ratio for height */
  object-fit: contain; /* Ensures the entire image is visible within the bounds */
  border-radius: 0.5rem;
}
</style>
