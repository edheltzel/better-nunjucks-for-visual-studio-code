# Change Log

All notable changes to the "vscode-nunjucks-syntax" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [v0.2.8]

- Resolves [issue #21](https://github.com/edheltzel/nunjucks-for-visual-studio-code/issues/21) - fix front-matter pattern naming and improve syntax highlighting in nunjucks.tmLanguage.json

Thank you to:
- [ReduxFlakes](https://github.com/ReduxFlakes) for reporting this issue.
- [gasatrya](https://github.com/gasatrya) for confirming the issue.
- [RedCMD](https://github.com/RedCMD) for pointing out the solution.


## [v0.2.72]

- fixes description for 11ty Image snippet

## [v0.2.71]

- Snippet update - adds `{% verbatim %}` which was missed previously. See [Nunjucks Docs - Verbatim](https://mozilla.github.io/nunjucks/templating.html#verbatim) for more info.

## [v0.2.7]

- Fixes [issue #19](https://github.com/edheltzel/nunjucks-for-visual-studio-code/issues/19) by adding `\A` to assert the start of the file for frontmatter, this ensures that only the frontmatter block at the top of the file is highlighted.

## [v0.2.6]

- Adds comment block support to markdown files thanks to PR [#18](https://github.com/edheltzel/nunjucks-for-visual-studio-code/pull/18) from [cypressSap](https://github.com/cypressSap) -- Thanks! 👍

## [v0.2.5]

- Adds an empty `[]` value on colorizedBracketPairs to override bracket pair highlighting. To keep coloring of nunjucks tags consistent from theme to theme.

## [v0.2.4]

- Fixes [issue #12](https://github.com/edheltzel/nunjucks-for-visual-studio-code/issues/12).

## [v0.2.3]

- Adds snippets for Eleventy i18n plugins filters - two additional filters.

## [v0.2.2]

- Adds snippets for Nunjucks filters - missed some in the beginning.
- Adds snippets for Eleventy/11ty custom tags/shortcodes from plugins (if I missed any please submit a ticket or PR)
  - Plugins are generally the core plugins of 11ty.
- Changes `hcomm` to `commenthtml` so that html comments are available in Nunjucks when typing `comment`
- Changes `cblock` to `commentblock` so that html comments are available in Nunjucks when typing `comment`

## [v0.2.1]

- Adds support for 11ty's Custom Frontmatter and Fixes [Issue #4](https://github.com/edheltzel/nunjucks-for-visual-studio-code/issues/4)

## [v0.2.0]

- Adds Nunjucks comment when pressing the keybinding `ctrl+/` or `cmd+/` inside of Nunjucks or HTML files
- Adds `hcomm` to snippets to includes HTML comments in the event that a users wants to add an HTML style comment.

## [v0.0.2]

- fixes broken images on marketplace.

## [v0.0.1]

- Initial Public Release

- Snippets – All the snippets are a gathered collection from other extensions, with the addition of custom snippets for front matter and all the tags from Nunjucks Docs. Most of the other snippets did not include every Nunjucks tags.

  - Snippets are available/work in `.njk`, `.nunjucks`, `.html`, and `.md` files

- Syntax highlighting support uses injection for auto detection of grammar. Any `njk` file is auto detected as `html` and adds syntax sugar for all Nunjucks built-in tags, filters, variables.

  - no need to do any `files.association` or `emmet.includeLanguage`

- Syntax highlighting is also supported for `Nunjucks` grammar selection.
  - auto detection defaults to `html` but selecting `nunjucks` will still provide the same html highlight with nunjucks tag highlighting, but you will have to include `emmet.includeLanguage` to enable emmet support, if you choose this option.

## [Unreleased]

- Initial release
