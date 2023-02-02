export const decode = (value: string): string =>
  Buffer.from(value, "base64").toString("binary");

export const encode = (value: string): string =>
  Buffer.from(value, "binary").toString("base64");
