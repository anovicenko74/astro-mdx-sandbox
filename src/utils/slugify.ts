import GithubSlugger from "github-slugger";
import type { Frontmatter } from "src/types";
import type { MarkdownInstance } from "astro";
import getPath from "./getPath";

const slugger = GithubSlugger.slug;

export const slugifyStr = (str: string) => slugger(str);

const slugify = (post: MarkdownInstance<Frontmatter>) => slugger(post.frontmatter?.slug) || getPath(post.file);

export const slufigyAll = (arr: string[]) => arr.map((str) => slugifyStr(str));

export default slugify;
