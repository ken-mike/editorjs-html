export type transforms = {
  [key: string]: any;
  delimiter(): string;
  header(block: block): string;
  paragraph(block: block): string;
  list(block: block): string;
  image(block: block): string;
  video(block: block): string;
  quote(block: block): string;
  link(block: block): string;
};

export type block = {
  type: string;
  data: {
    text?: string;
    level?: number;
    caption?: string;
    file?: {
      url?: string;
    };
    stretched?: boolean;
    withBackground?: boolean;
    withBorder?: boolean;
    items?: string[];
    style?: string;
    link?: string;
    meta?: {
      title?: string;
      description?: string;
      image?: {
        url?: string
      }
    };
  };
};

const transforms: transforms = {
  delimiter: () => {
    return `<br/>`;
  },

  header: ({ data }) => {
    return `<h${data.level}> ${data.text} </h${data.level}>`;
  },

  paragraph: ({ data }) => {
    return `<p> ${data.text} </p>`;
  },

  list: ({ data }) => {
    let style = data.style === "unordered" ? "ul" : "ol";
    let list = "";
    if (data.items) {
      list = data.items
        .map((i) => `<li> ${i} </li>`)
        .reduce((a, c) => a + c, "");
    }
    return `<${style}> ${list} </${style}>`;
  },

  image: ({ data }) => {
    let imgTag = `<img src="${data.file ? data.file.url : ""}" alt="${data.caption}" />`;

    if (data.caption !== '') imgTag += `<p class="module-image-caption">${data.caption}</p>`
    return imgTag
  },

  video: ({ data }) => {
    let videoTag = `<video controls src="${data.file ? data.file.url : ""}" alt="${data.caption}"></video>`;

    if (data.caption !== '') videoTag += `<p class="module-video-caption">${data.caption}</p>`
    return videoTag
  },

  quote: ({ data }) => {
    return `<blockquote> ${data.text} </blockquote> - ${data.caption}`;
  },

  link: ({ data }) => {
    let linkPreviewElement: string[] = [];

    if (data.meta?.image && data.meta?.image?.url) {
      linkPreviewElement.push(`<div class="link-tool__image" style="background-image: url(&quot;${data?.meta?.image?.url}&quot;);"></div>`)
    }

    if (data.meta?.title) {
      linkPreviewElement.push(`<div class=\"link-tool__title\">${data.meta?.title}</div>`)
    }

    if (data.meta?.description) {
      linkPreviewElement.push(`<p class=\"link-tool__description\">${data.meta?.description}</p>`)
    }

    return `<div class=\"link-tool\"><a class=\"link-tool__content link-tool__content--rendered\" target=\"_blank\" rel=\"nofollow noindex noreferrer\" href=\"${data.link}\">${linkPreviewElement.join('')}<span class=\"link-tool__anchor\">${data.link}</span></a></div>`
  }
};

export default transforms;
