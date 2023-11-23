<script>
  import { Project } from "$lib";

  let projects = [
    {
      title: "MuscleWiki",
      url: "https://musclewiki.com/",
      image: "/projects/musclewiki.png",
      tool: {
        name: "React",
        image: "/tools/react.png",
      },
      tech: ["Figma", "Django", "Scss", "React", "Docker"],
      desc: "MuscleWiki is the ultimate gym companion. Select a muscle group and exercise type and get step-by-step and video instructions for relevant exercises.",
      role: "Clean up and consolidate front end. Assist in converting from Django to React. Impliment and assist with designs.",
    },
    {
      title: "OinkChing",
      url: "https://oinkching.com",
      image: "/projects/oinkching.png",
      tool: {
        name: "VueJS",
        image: "/tools/vue.png",
      },
      tech: ["VueJS", "Nuxt", "PostgreSQL", "Vercel", "AWS", "Heroku"],
      desc: "OinkChing is all about financial literacy. Courses are available for purchase and the Simulator is a free sponsored tool to help teach young adults how to think about money.",
      role: "Everything. Design, planning, front end, back end, deploys, monitoring, database management, etc.",
    },
    {
      title: "Do It Now!",
      url: "https://itshoid.itch.io/do-it-now",
      image: "/projects/doitnow.png",
      tool: {
        name: "Godot",
        image: "/tools/godot.png",
      },
      tech: ["Godot", "GDScript", "Aseprite"],
      desc: `Do It Now! Was a 1-week game jam project. The theme, "Gameshow", was revelaed when the timer started. Warning: The browser version takes a a mintute or two to load.`,
      role: "Concept, design, programming, and art",
    }
  ]
</script>

<h2 class="h2 alt mt-20">
  Projects
</h2>

{#each projects as {title, tool, url, image, desc, role, tech}}
  <Project
    title={title}
    tool={tool}
    url={url}
    image={image}
    desc={desc}
    role={role}
    tech={tech}
  />
{/each}