import { ServerRequest, status } from "../deps.ts";

export async function invalidId(req: ServerRequest): Promise<void> {
  return req.respond({ status: status.BAD_REQUEST, body: "Invalid id" });
}

export async function invalidExt(req: ServerRequest): Promise<void> {
  return req.respond({ status: status.BAD_REQUEST, body: "Invalid extension" });
}

export async function fileTooLarge(req: ServerRequest): Promise<void> {
  return req.respond({ status: status.BAD_REQUEST, body: "File too large" });
}

export async function badFileFormat(req: ServerRequest): Promise<void> {
  return req.respond({ status: status.BAD_REQUEST, body: "Bad file format" });
}

export async function fileNotFound(req: ServerRequest): Promise<void> {
  return req.respond({ status: status.NOT_FOUND, body: "File not found" });
}
