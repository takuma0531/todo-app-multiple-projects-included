import multer from "multer";

export const upload = (dest: string) => multer({
    dest,
  });
