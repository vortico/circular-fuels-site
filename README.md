# Circular Fuels Site

This is the Circular Fuels project website.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the website.

## Adding a News entry

News entries are MDX files in `content/news/`. Create one named `YYYY-MM-DD-Title.mdx`, where the date is the
publication date and the title is written in `Kebab-Case`:

```
content/news/2026-07-15-First-Staff-Exchange.mdx
```

The date prefix sets the publication date shown on the page and orders the entries on `/news/` (newest first), so it is
required and must use the full `YYYY-MM-DD` form. The rest of the file name becomes the URL, lowercased: the example
above is published at `/news/first-staff-exchange/`.

Every entry starts with a frontmatter block:

```mdx
---
title: First Staff Exchange
description: A short summary, shown under the title and in the news listing.
authors:
  - name: 'Circular Fuels'
    url: 'https://circular-fuels.eu/'
wip: false
---

The body is written in Markdown, starting after the frontmatter block.
```

`title`, `description` and `authors` are all required, and `authors` accepts several entries. The `url` of an author is
optional; without it the name is rendered as plain text instead of a link. `wip` is accepted but nothing reads it yet.

### Adding images to a News entry

Put the images in a folder named after the MDX file, so they stay easy to match up:

```
public/images/news/2026-07-15-First-Staff-Exchange/1.jpeg
```

Images must be added with an `<img>` tag that includes the real pixel `width` and `height` of the file. Inside MDX, `img`
is rendered by `next/image`, which needs the dimensions up front to reserve space while the image loads. The Markdown
`![alt](src)` syntax cannot provide them and fails the whole page with `Image with src "..." is missing required "width"
property`.

Wrap each image in a `<figure>` to give it a caption. Note that the `src` is the path inside `public/`, without the
`public` prefix:

```mdx
<figure>
  <img
    src="/images/news/2026-07-15-First-Staff-Exchange/1.jpeg"
    alt="Describes the image for screen readers, and is shown if the image fails to load"
    width={2048}
    height={1536}
  />
  <figcaption>Shown centred and in italics under the image.</figcaption>
</figure>
```

Spacing around images and captions is handled by `src/styles/prose.css`, so no margin classes are needed. Tall
(portrait) images are worth placing side by side, since on their own they push the rest of the entry far down the page.
Tailwind classes work in MDX, so a two column grid that collapses on small screens is enough:

```mdx
<figure className="grid grid-cols-1 gap-4 sm:grid-cols-2">
  <img
    src="/images/news/2026-07-15-First-Staff-Exchange/2.jpeg"
    alt="..."
    width={1536}
    height={2048}
    className="w-full"
  />
  <img
    src="/images/news/2026-07-15-First-Staff-Exchange/3.jpeg"
    alt="..."
    width={1536}
    height={2048}
    className="w-full"
  />
  <figcaption className="sm:col-span-2">One caption for both images.</figcaption>
</figure>
```

## Adding a Secondment

Secondments are not MDX files. Add an entry to the `secondments` array in `src/app/(home)/secondments/page.tsx`:

```tsx
const secondments: TSecondment[] = [
  {
    image: '/images/secondments/2026-07-15.jpeg',
    from: 'Universidad de Sevilla',
    secondment: 'GreenX Technology Ltd',
    researcher: 'Tomás Ramírez Reina',
    start: new Date('2026-07-15'),
    end: new Date('2026-07-15'),
  },
]
```

All six fields are required: `researcher` is the person travelling, `from` their home organisation, and `secondment` the
organisation hosting them. The list is sorted by `start`, so entries can be added in any order.

The `image` lives in `public/images/secondments/` and is named after the start date. It is rendered at a fixed 200×80,
so prepare a wide crop; a 4:3 photo used as-is will look squashed.

## Adding a Deliverable

Deliverables are a TypeScript array too. Add an entry to `deliverables` in `src/app/(home)/deliverables/page.tsx`:

```tsx
const deliverables: TDeliverable[] = [
  {
    name: 'Launch and Maintenance of the CIRCULAR FUELS Website',
    date: new Date('2026-03-31'),
    link: '/documents/deliverables/D_9_1.pdf',
    description: 'A paragraph summarising what the deliverable covers.',
  },
]
```

The `date` is the due date, shown next to the name as `DD/MM/YYYY`, and the list is sorted by it, so entries can be added
in any order.

`link` is required but may be `null`, which is how a deliverable is listed before its document is public: the name is
then plain text instead of a link. Once the document is available, put the PDF in `public/documents/deliverables/`, named
after the deliverable number (`D_9_1.pdf` for D9.1), and reference it without the `public` prefix as in the example
above. Links open in a new tab.
