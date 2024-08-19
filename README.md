<div align="center">
<h1>Better Nunjucks for Visual Studio Code<br><span style="font-size:1rem">with Snippets</span></h1>

[![release](https://img.shields.io/github/release/edheltzel/better-nunjucks-for-visual-studio-code.svg?style=for-the-badge&logo=github&logoColor=white&colorA=101119&colorB=6D57EF)](https://github.com/edheltzel/better-nunjucks-for-visual-studio-code/releases/latest) [![license](https://img.shields.io/badge/License-MIT-373277.svg?style=for-the-badge&l&logoColor=white&colorA=101119&colorB=42557B)](https://github.com/edheltzel/flightdeck/blob/master/LICENSE)
</div>

<details open>
  <summary>📔 Table of Contents</summary>
  <ol>
    <li><a href="#syntax-highlighting">Syntax Highlighting</a></li>
    <li><a href="#snippets">Snippets</a></li>
    <li><a href="#known-issues">Known Issues</a></li>
    <li><a href="#todo">TODO</a></li>
  </ol>
</details>

<h2 id="syntax-highlighting">Syntax Highlighting:</h2>

For `.njk`, `.html`, and `.md` files the grammar is auto-detected.
All `.njk` files will default to `html` and provide syntax highlighting for Nunjucks tags, filers, and variables which are injected into the default `html` grammar. This attempts to keep the developer experience (DX) as simple as possible, without having to configure global or workspace settings with `files.association`. Hopefully this will provide the least amount of friction between other extensions that support Markdown or HTML.
<br>
<br>

| ![nunjucks-snippets-in-markdown](https://user-images.githubusercontent.com/402910/156658780-99618c38-6cc6-4162-9716-c8ab0a69e961.png) |
| :-----------------------------------------------------------------------------------------------------------------------------------: |
|                                  <strong>Nunjucks inside of Markdown + frontmatter support</strong>                                   |

| ![nunjucks-complex-page](https://user-images.githubusercontent.com/402910/156658807-af533204-1ad0-49cb-b361-6339b0e9cb34.png) |
| :---------------------------------------------------------------------------------------------------------------------------: |
|                       <strong>Complex example of Nunjucks inside of HTML + frontmatter support</strong>                       |

| ![nunjucks-in-html](https://user-images.githubusercontent.com/402910/156658892-40e2995a-6386-4391-a0c7-d75043d969c4.png) |
| :----------------------------------------------------------------------------------------------------------------------: |
|                              <strong>Nunjucks inside of HTML + frontmatter support</strong>                              |

| ![nunjucks-with-11ty](https://user-images.githubusercontent.com/402910/156658922-e2afb26d-ed2f-453a-a744-541d13bc339d.png) |
| :------------------------------------------------------------------------------------------------------------------------: |
|                            <strong>Using Nunjucks with Eleventy + frontmatter support</strong>                             |

| ![nunjucks-grammar](https://user-images.githubusercontent.com/402910/156658952-e3c1f67d-70e6-4042-b30f-b4d6dfcc3cca.png) |
| :----------------------------------------------------------------------------------------------------------------------: |
|                  <strong>Using the Nunjucks grammar also support highlighting and frontmatter</strong>                   |

<h2 id="snippets">Snippets:</h2>

The snippets are a combined fork of other Nunjucks snippet extensions but is extended to include all of Nunjucks built-in tags and provide support for multiple file extensions – `.njk`, `.html`, & `.md`

The reason for the fork is to avoid conflicts and behavior issues when editing `njk`, `html`, and/or `md` files or when altering `files.association`

> Note: If you would rather not use the snippets provided in this extension, no worries - I highly recommend installing [Control Snippets](https://marketplace.visualstudio.com/items?itemName=svipas.control-snippets) to enable or disable VS Code's built-in or manually installed snippets.

<br>
<br>

| ![nunjucks-snippets-in-markdown](https://user-images.githubusercontent.com/402910/156658997-f1db75da-a276-4428-9acb-ab8f21e84cc3.png) |
| :-----------------------------------------------------------------------------------------------------------------------------------: |
|                                           <strong>Nunjucks Snippets in Markdown 😍</strong>                                           |

| ![nunjucks-snippets-in-html](https://user-images.githubusercontent.com/402910/156658994-b2c229dc-c047-4eb0-92f3-cec90d5f82e5.png) |
| :-------------------------------------------------------------------------------------------------------------------------------: |
|                                           <strong>Nunjucks Snippets in HTML 😍</strong>                                           |

| ![nunjucks-snippets-in-nunjucks](https://user-images.githubusercontent.com/402910/156659001-d372cf57-5983-48e6-a28a-d7a438374871.png) |
| :-----------------------------------------------------------------------------------------------------------------------------------: |
|                                           <strong>Nunjucks Snippets in Nunjucks 😊</strong>                                           |

<h2 id="known-issues">Known Issues</h2>

There are a few "gotchas" or work arounds to enable some of the creature comforts with Visual Studio Code.

### Emmet Support
One "gotcha" is when selecting the `nunjucks` grammar, enabling support for Emmet is provided though the editor or the workspace settings:

```json
  //"_comment": "add this to your Global or Workspace settings.json"
  "emmet.includeLanguages": {
    "md": "html",
    "nunjucks": "html",
  },
  "emmet.syntaxProfiles": {
    "md": "html",
    "nunjucks": "html",
  }
```

Another is when trying to use HTML comments. With [PR 18](https://github.com/edheltzel/nunjucks-for-visual-studio-code/pull/18) using the keyboard shortcut `cmd+/` or `ctrl+/` will add a NJK comment block.

If you need to add HTML comments, the extension provides a couple of options to support this behavior.
- Use the `hcomm` snippet to add an HTML comment block
- Use the `commenthtml` snippet to add an HTML comment line
- Use Emmet to add an HTML comment block (I set use `ctrl+alt+/` as the shortcut).

![Emmet: Toggle Comment](https://raw.githubusercontent.com/edheltzel/better-nunjucks-for-visual-studio-code/main/images/emmet-toggle-comment.png)

### Code Folding

Another "gotcha" is code folding support. You will need to include the below to enable code folding for Nunjucks tags:

```json
//"_comment": "add this to your Global or Workspace settings.json"
"editor.foldingStrategy": "indentation"
```

![nunjucks-code-folding](https://user-images.githubusercontent.com/402910/156659091-7edf009c-ef0a-4815-af4c-f7c413629e1d.gif)


<h2 id="todo">TODO</h2>

- [x] ~~Document how code folding works~~
- [x] ~~Write about syntax injection with Auto detect~~
- [x] ~~Setting `nunjucks` grammar and changes from auto-detect~~
- [x] ~~Need images of syntax~~
- [x] ~~Nunjucks Style Comments – [Issue #1](https://github.com/edheltzel/nunjucks-for-visual-studio-code/issues/1)~~
- [x] ~~Add more support for custom tags and filter (syntax)~~
- [x] ~~Add all built-in filers to snippets~~  If I missed some, please create a PR.
- [x] ~~Add built-in variables to snippets~~
- [ ] Add support of [Eleventy](https://www.11ty.dev/)
  - [ ] detect if `.eleventy.js` is available 🤷idk if this is even possible
- [ ] Add custom settings options to enable/disable snippets
- [ ] Add custom settings options to enable/disable nunjucks comments with `cmd+/` or `ctrl+/`
- [ ] Add support for additional grammars for embedded languages - see [issue 11](https://github.com/edheltzel/better-nunjucks-for-visual-studio-code/issues/11)
