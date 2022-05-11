
import { createClient } from "contentful";

const client = createClient({
  space: "sqzdd6o0iz0g",
  accessToken: "x9jae8sbU24uh4UX_IpBp9Y8Tg2KT2FEe7M-ngM6pqk",
});


var strValue = "";



export const getBlogs = async () => {
  try {
    // Pagination
    const response = await client.getEntries({
      content_type: "databaseData",
    });
    console.log(response);
    console.log(response.items[0].fields.helloWorld);
    strValue = response.items[0].fields.helloWorld;
    let blogs = response.items;
    blogs = blogs.map((item) => {
      const { id, createdAt } = item.sys;
      const { title, slug, authorName, category } = item.fields;
      const thumbnail = item.fields.thumbnail.fields.file.url;
      const authorImage = item.fields.authorImage.fields.file.url;
      return {
        id,
        name,
        title,
        thumbnail,
        slug,
        authorName,
        authorImage,
        createdAt,
        category,
      };
    });
    return blogs;
  } catch (err) {
    console.log(err);
  }
};


export const getBlog = async (slug) => {
  try {
    const response = await client.getEntries({
      content_type: "blog",
      "fields.slug": slug,
    });
    let blogdetails = response.items;
    blogdetails = blogdetails.map((item) => {
      const { id, createdAt } = item.sys;
      const { title, authorName, category } = item.fields;
      const details = item.fields.details;
      const featuredImage = item.fields.featuredImage.fields.file.url;
      return {
        id,
        title,
        featuredImage,
        details,
        authorName,
        createdAt,
        category,
      };
    });
    return blogdetails;
  } catch (err) {
    console.log(err);
  }
};
