/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="deno.ns" />
/// <reference lib="esnext" />

import manifest from "./live.gen.ts";
import { $live } from "$live/mod.ts";
import { start } from "$fresh/server.ts";
import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";
import prefetchPlugin from "prefetch";
import partytownPlugin from "partytown/mod.ts";
import site from "./site.json" assert { type: "json" };

await start($live(manifest, site), {
  plugins: [
    prefetchPlugin(),
    partytownPlugin(),
    twindPlugin({
      selfURL: new URL("./twind.config.ts", import.meta.url).href,
      ...twindConfig,
    }),
  ],
});
