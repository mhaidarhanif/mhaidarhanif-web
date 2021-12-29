# mhaidarhanif-web

[![MIT License][license-badge]][license]

<!-- prettier-ignore-start -->
[license-badge]: https://img.shields.io/badge/license-MIT-cyan.svg?style=flat-square
[license]: https://github.com/mhaidarhanif/mhaidarhanif-web/blob/main/LICENSE
<!-- prettier-ignore-end -->

M Haidar Hanif's personal website with React, Remix, Stitches, Radix UI, and deployed to Vercel.

Current repo is at [mhaidarhanif-web](https://github.com/mhaidarhanif/mhaidarhanif-web) on [GitHub](https://github.com/mhaidarhanif).

## Tech Stack

- React
  - HTML
  - CSS
  - JavaScript
  - TypeScript
- Remix
  - React Router
- Stitches
- Radix UI
  - Radix Colors
- Framer Motion
- Splitbee
- Vercel
- Cloudflare DNS

## Variants

The website has been rebuilt a lot of times. Some of them are still in here:

- [mhaidarhanif-web-remix-fly](https://github.com/mhaidarhanif/mhaidarhanif-web-remix-fly)
- [mhaidarhanif-web-nx-monorepo](https://github.com/mhaidarhanif/mhaidarhanif-web-nx-monorepo)
- [mhaidarhanif-web-gatsby](https://github.com/mhaidarhanif/mhaidarhanif-web-gatsby)

## Development

Read [Remix Docs](https://remix.run/docs).

To run this Remix app locally, make sure the project's local dependencies are installed:

```sh
npm install
```

It will also do `postinstall`, which run `remix setup node`.

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.

To make sure everything fine, we can also build:

```sh
npm run build
```

## Deployment

This repo is being generated with `create-remix` command and selected "Vercel" as a deployment target. So we only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed. How easy is that?

If you'd like test this but avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).
