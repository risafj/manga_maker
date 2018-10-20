# Manga Maker

## Purpose

This tool takes several folders containing jpg files and collates them into PDF files with the respective folder names.

## Use Instructions

1. Clone the repo
2. Create the following file structure

```
.
├── books
├── index.js
└── source
    ├── MyManga1
    └── MyManga2

```

3. Place all source files as numbered jpg pages in source/manganame. Each subfolder of source should contain the contents of a single desired PDF.
4. Run `node index.js` from the repository root.
5. Results are placed in books directory.