<section id="footer" class="footer">
  <div class="container m-auto flex justify-between">
    <p>&copy; {year} Ted Waller</p>


    <div class="grid grid-cols-2 gap-8">
      <span>
        See this code on
        <a class="footer-link" href="https://github.com/tbwiii/">
          GitHub
        </a>
      </span>
      <span>
        Get in touch on
        <a class="footer-link" href="https://www.linkedin.com/in/tbwiii/">
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
    @apply
      flex
      py-12
      bg-black
      bg-opacity-80
      w-full;

    font-family: "Exo";
  }

  .footer-link {
    @apply
      underline;

      &:hover {
        @apply
          text-cyan-700
          text-cyan-300;
      }
  }
</style>