import { defineEventHandler, readBody } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/h3/dist/index.mjs';

const file_type = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const response = await fetch(body.file_url);
  const headers = await response.headers;
  let fileType = headers.get("Content-Type");
  return fileType;
});

export { file_type as default };
//# sourceMappingURL=file_type.mjs.map
