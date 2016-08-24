Reveal.initialize(

  {
    minScale:0.2,
    maxScale:1,

    previewLinks:true,
    slideNumber:true,
    history:true,
    dependencies: [
            // Cross-browser shim that fully implements classList - https://github.com/eligrey/classList.js/
          { src: '/reveal/lib/js/classList.js', condition: function() { return !document.body.classList; } },

          // Interpret Markdown in <section> elements
          { src: '/reveal/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
          { src: '/reveal/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },

          // Zoom in and out with Alt+click
          { src: '/reveal/plugin/zoom-js/zoom.js', async: true },

          // Speaker notes
          { src: '/reveal/plugin/notes/notes.js', async: true },

          // MathJax
          { src: '/reveal/plugin/math/math.js', async: true },

          {
            src: '/reveal/plugin/highlight/highlight.js',
            async: true,
            callback: function () {
              hljs.initHighlightingOnLoad();
            }
          }
      ]
  }

  )
