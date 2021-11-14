# Contributing to ctp.apps

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to ctp.appsand its packages, which are hosted in the [CUNY Tech Prep Organization](https://github.com/CUNYTechPrep/) on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[Code of Conduct](#code-of-conduct)

[I don't want to read this whole thing, I just have a question!!!](#i-dont-want-to-read-this-whole-thing-i-just-have-a-question)

[What should I know before I get started?](#what-should-i-know-before-i-get-started)

- [Nrwl and Packages](#ctp.apps-and-packages)
- [Nrwl Design Decisions](#design-decisions)

[How Can I Contribute?](#how-can-i-contribute)

- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Your First Code Contribution](#your-first-code-contribution)
- [Pull Requests](#pull-requests)

## Code of Conduct

This project and everyone participating in it is governed by the [ctp.apps Code Of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [aem.ctp@gmail.com](mailto:aem.ctp@gmail.com).

## I don't want to read this whole thing I just have a question!!!

> **Note:** [Please don't file an issue to ask a question.]() You'll get faster results by using the resources below.

We have an official [discussion board](https://github.com/CUNYTechPrep/ctp.apps/discussions) and [slack space](https://ctpalumni.slack.com/archives/C02C7QJ5U93) where the community chimes in with helpful advice if you have questions.

## How To Contribute

### Do you like to code?

- Find an open issue to tackle, [like @dianjin did for Leaflet](https://github.com/Leaflet/Leaflet/issues/4528#issuecomment-216520560)
- Ask if you can help write a new feature
- Automate project setup
- Improve tooling and testing

### Do you like helping people?

- Answer questions about the project on e.g., Stack Overflow ([like this Postgres example](https://stackoverflow.com/questions/18664074/getting-error-peer-authentication-failed-for-user-postgres-when-trying-to-ge)) or Reddit
- Answer questions for people on open issues
- Help moderate the discussion boards or conversation channels

### Do you like organizing?

- Link to duplicate issues, and suggest new issue labels, to keep things organized
- Go through open issues and suggest closing old ones, [like @nzakas did for ESLint](https://github.com/eslint/eslint/issues/6765)
- Ask clarifying questions on recently opened issues to move the discussion forward

### Do you like to write?

- Write and improve the project's documentation
- Curate a folder of examples showing how the project is used
- Start a newsletter for the project, or curate highlights from the mailing list
- Write tutorials for the project, [like PyPA's contributors did](https://github.com/pypa/python-packaging-user-guide/issues/194)
- Write a translation for the project's documentation

### Do you like to design?

- Restructure layouts to improve the project's usability
- Conduct user research to reorganize and refine the project's navigation or menus, [like Drupal suggests](https://www.drupal.org/community-initiatives/drupal-core/usability)
- Put together a style guide to help the project have a consistent visual design
- Create art for t-shirts or a new logo, [like hapi.js's contributors did](https://github.com/hapijs/contrib/issues/68)

### Do you like helping others code?

- Review code on other people's submissions
- Write tutorials for how a project can be used
- Offer to mentor another contributor, [like @ereichert did for @bronzdoc on Rust](https://github.com/rust-lang/book/issues/123#issuecomment-238049666)

## What should I know before I get started

- [Why Monorepos
  ](https://nx.dev/latest/react/core-concepts/why-monorepos)

- [Using Nx at Enterprises
  ](https://nx.dev/latest/react/guides/monorepo-nx-enterprise)

## How Can I Contribute?

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@ctp.apps/mylib`.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Reporting Bugs

This section guides you through submitting a bug report for ctp.apps. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](https://github.com/ctp.apps/.github/blob/master/.github/ISSUE_TEMPLATE/bug_report.md), the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined #packages your bug is related to, create an issue on that repository and provide the following information by filling in [the template](/ISSUE_TEMPLATE/bug_report.md).

Explain the problem and include additional details to help maintainers reproduce the problem:

- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by explaining how you started ctp.apps, e.g. which command exactly you used in the terminal, or how you started ctp.apps otherwise. When listing steps, **don't just say what you did, but explain how you did it**. For example, if you moved the cursor to the end of a line, explain if you used the mouse, or a keyboard shortcut or an ctp.apps command, and if so which one?
- **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
- **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
- **Explain which behavior you expected to see instead and why.**
- **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem. If you use the keyboard while following the steps, **record the GIF with the [Keybinding Resolver](https://github.com/ctp.apps/keybinding-resolver) shown**. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
- **If Chrome's developer tools pane is shown without you triggering it**, that normally means that you have a syntax error in one of your themes or in your `styles.less`. Try running in [Safe Mode](https://flight-manual.ctp.apps.io/hacking-ctp.apps/sections/debugging/#using-safe-mode) and using a different theme or comment out the contents of your `styles.less` to see if that fixes the problem.
- **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and share more information using the guidelines below.

Provide more context by answering these questions:

- **Can you reproduce the problem in [safe mode](https://flight-manual.ctp.apps.io/hacking-ctp.apps/sections/debugging/#diagnose-runtime-performance-problems-with-the-dev-tools-cpu-profiler)?**
- **Did the problem start happening recently** (e.g. after updating to a new version of ctp.apps) or was this always a problem?
- If the problem started happening recently, **can you reproduce the problem in an older version of ctp.apps?** What's the most recent version in which the problem doesn't happen? You can download older versions of ctp.apps from [the releases page](https://github.com/ctp.apps/ctp.apps/releases).
- **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.
- If the problem is related to working with files (e.g. opening and editing files), **does the problem happen for all files and projects or only some?** Does the problem happen only when working with local or remote files (e.g. on network drives), with files of a specific type (e.g. only JavaScript or Python files), with large files or files with very long lines, or with files in a specific encoding? Is there anything else special about the files you are using?

## Project Governance

Individuals making significant and valuable contributions are given commit-access to the
project to contribute as they see fit. This project is more like an open wiki than a
standard guarded open source project.

### Rules

There are a few basic ground-rules for contributors:

1. **No `--force` pushes** or modifying the Git history in any way.
2. **Non-master branches** should be used for ongoing work.
3. **Significant modifications** like API changes should be subject to a **pull request**
   to solicit feedback from other contributors.
4. **Pull requests** are _encouraged_ for all contributions to solicit feedback, but left to
   the discretion of the contributor.

### Releases

Declaring formal releases remains the prerogative of the project maintainer.

### Changes to this arrangement

This is an experiment and feedback is welcome! This document may also be subject to pull-
requests or changes by contributors where you believe you have something valuable to add
or change.

## Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

- (a) The contribution was created in whole or in part by me and I have the right to
  submit it under the open source license indicated in the file; or

- (b) The contribution is based upon previous work that, to the best of my knowledge, is
  covered under an appropriate open source license and I have the right under that license
  to submit that work with modifications, whether created in whole or in part by me, under
  the same open source license (unless I am permitted to submit under a different
  license), as indicated in the file; or

- (c) The contribution was provided directly to me by some other person who certified
  (a), (b) or (c) and I have not modified it.

- (d) I understand and agree that this project and the contribution are public and that a
  record of the contribution (including all personal information I submit with it,
  including my sign-off) is maintained indefinitely and may be redistributed consistent
  with this project or the open source license(s) involved.
