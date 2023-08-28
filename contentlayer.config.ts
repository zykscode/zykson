// // contentlayer.config.ts
// import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files'

// const computedFields:ComputedFields<string> = {
//     slug: {
//       type: "string",
//       resolve: (doc) => `/${doc._raw.flattenedPath}`,
//     },
//     slugAsParams: {
//       type: "string",
//       resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
//     },
//   }

// export const Post = defineDocumentType(() => ({
//     name: "Post",
//     filePathPattern: `blog/**/*.mdx`,
//     contentType: "mdx",
//     fields: {
//       title: {
//         type: "string",
//         required: true,
//       },
//       description: {
//         type: "string",
//       },
//       date: {
//         type: "date",
//         required: true,
//       },
//       published: {
//         type: "boolean",
//         default: true,
//       },
//       image: {
//         type: "string",
//         required: true,
//       },
//       authors: {
//         // Reference types are not embedded.
//         // Until this is fixed, we can use a simple list.
//         // type: "reference",
//         // of: Author,
//         type: "list",
//         of: { type: "string" },
//         required: true,
//       },
//     },
//     computedFields,
//   }))

// contentlayer.config.ts

import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: {
      type: "list",
      of: { type: "string" },
      required: true,
    }, image: {
      type: "string",
    },
    summary: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })
