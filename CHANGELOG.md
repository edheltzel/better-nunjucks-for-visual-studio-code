# Change Log

All notable changes to the "vscode-nunjucks-syntax" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [v0.1.0]

- Initial Public Release

- Snippets – All the snippets are a gathered collection from other extensions, with the addition of custom snippets for front matter and all the tags from Nunjucks Docs. Most of the other snippets did not include every Nunjucks tags.
  - Snippets are available/work in `.njk`, `.nunjucks`, `.html`, and `.md` files

- Syntax highlighting support uses injection for auto detection of grammar. Any `njk` file is auto detected as `html` and adds syntax sugar for all Nunjucks built-in tags, filters, variables.
  - no need to do any `files.association` or `emmet.includeLanguage`

- Syntax highlighting is also supported for `Nunjucks` grammar selection.
  - auto detection defaults to `html` but selecting `nunjucks` will still provide the same html highlight with nunjucks tag highlighting, but you will have to include `emmet.includeLanguage` to enable emmet support, if you choose this option.


## [Unreleased]

- Initial release
