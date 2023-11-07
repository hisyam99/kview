import { type Handlers } from "$fresh/server.ts";
import { uniqueCount } from "kv_toolbox/keys.ts";
import { assert } from "$std/assert/assert.ts";
import {
  entryToResponse,
  getKv,
  keyCountToResponse,
  type KvValueJSON,
  pathToKey,
  toValue,
} from "$utils/kv.ts";

interface PutBody {
  value: KvValueJSON;
  expireIn?: number;
  overwrite?: boolean;
}

export const handler: Handlers = {
  async GET(req, { params: { id, path } }) {
    const prefix = pathToKey(path);
    const kv = await getKv(id);
    const url = new URL(req.url, import.meta.url);
    if (url.searchParams.has("entry")) {
      const maybeEntry = await kv.get(prefix);
      if (maybeEntry.versionstamp !== null) {
        return entryToResponse(maybeEntry);
      } else {
        return Response.json({ status: 404, statusText: "Not Found" }, {
          status: 404,
          statusText: "Not Found",
        });
      }
    } else {
      const data = await uniqueCount(kv, prefix);
      return keyCountToResponse(data);
    }
  },
  async PUT(req, { params: { id, path } }) {
    try {
      const key = pathToKey(path);
      const { value, expireIn, overwrite }: PutBody = await req.json();
      assert(typeof value === "object" && "type" in value && "value" in value);
      const kv = await getKv(id);
      let op = kv.atomic();
      if (!overwrite) {
        op = op.check({ key, versionstamp: null });
      }
      op = op.set(key, toValue(value), { expireIn });
      const res = await op.commit();
      if (res.ok) {
        return Response.json(res, { status: 200, statusText: "OK" });
      } else {
        return Response.json(res, { status: 409, statusText: "Conflict" });
      }
    } catch (err) {
      console.error(err);
      return Response.json({
        status: 400,
        statusText: "Bad Request",
        error: JSON.stringify(err),
      }, {
        status: 400,
        statusText: "Bad Request",
      });
    }
  },
};