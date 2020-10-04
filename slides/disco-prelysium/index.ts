import Reveal from "reveal.js"
import RevealHighlight from "../../js/highlight/highlight"
import RevealMarkdown from "../../js/markdown/markdown"
import RevealNotes from "../../js/notes/notes"

// More info about initialization & config:
// - https://revealjs.com/initialization/
// - https://revealjs.com/config/
Reveal.initialize({
    hash: true,

    // Learn about plugins: https://revealjs.com/plugins/
    plugins: [RevealMarkdown, RevealHighlight, RevealNotes]
});