<section 
  id="footer"
  class="
    footer
    flex
    py-12
    bg-black
    bg-opacity-80
    w-full"
>
  <div class="container m-auto flex justify-between">
    <p>&copy; {year} Ted Waller</p>


    <div class="grid grid-cols-2 gap-8">
      <span>
        See this code on
        <a class="underline hover:text-cyan-300" href="https://github.com/tbwiii/">
          GitHub
        </a>
      </span>
      <span>
        Get in touch on
        <a class="underline hover:text-cyan-300" href="https://www.linkedin.com/in/tbwiii/">
          LinkedIn
        </a>
      </span>
    </div>
  </div>
</section>

<script>
  const year = new Date().getFullYear();
</script>

<style>
  .footer {
    font-family: "Exo";
  }

</style>