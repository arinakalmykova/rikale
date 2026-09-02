"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.9.1",
    "engineVersion": "e922089b7d7502aff4249d5da3420f6fa55fc6ad",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider     = \"prisma-client\"\n  output       = \"../src/generated/prisma\"\n  moduleFormat = \"cjs\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel Project {\n  id          Int      @id @default(autoincrement())\n  title       String\n  description String\n  steps       String[]\n  link        String\n  image       String\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n}\n\nmodel ContactRequest {\n  id        Int      @id @default(autoincrement())\n  name      String\n  contact   String\n  message   String\n  createdAt DateTime @default(now())\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"Project\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"steps\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"link\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"image\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"ContactRequest\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"contact\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"message\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"Project.findUnique\",\"Project.findUniqueOrThrow\",\"orderBy\",\"cursor\",\"Project.findFirst\",\"Project.findFirstOrThrow\",\"Project.findMany\",\"data\",\"Project.createOne\",\"Project.createMany\",\"Project.createManyAndReturn\",\"Project.updateOne\",\"Project.updateMany\",\"Project.updateManyAndReturn\",\"create\",\"update\",\"Project.upsertOne\",\"Project.deleteOne\",\"Project.deleteMany\",\"having\",\"_count\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"Project.groupBy\",\"Project.aggregate\",\"ContactRequest.findUnique\",\"ContactRequest.findUniqueOrThrow\",\"ContactRequest.findFirst\",\"ContactRequest.findFirstOrThrow\",\"ContactRequest.findMany\",\"ContactRequest.createOne\",\"ContactRequest.createMany\",\"ContactRequest.createManyAndReturn\",\"ContactRequest.updateOne\",\"ContactRequest.updateMany\",\"ContactRequest.updateManyAndReturn\",\"ContactRequest.upsertOne\",\"ContactRequest.deleteOne\",\"ContactRequest.deleteMany\",\"ContactRequest.groupBy\",\"ContactRequest.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"name\",\"contact\",\"message\",\"createdAt\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"title\",\"description\",\"steps\",\"link\",\"image\",\"updatedAt\",\"has\",\"hasEvery\",\"hasSome\",\"set\",\"push\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "UxUgCywAAEQAMC0AAAQAEC4AAEQAMC8CAAAAATNAAEEAIT8BAEAAIUABAEAAIUEAAEMAIEIBAEAAIUMBAEAAIURAAEEAIQEAAAABACABAAAAAQAgCywAAEQAMC0AAAQAEC4AAEQAMC8CAD8AITNAAEEAIT8BAEAAIUABAEAAIUEAAEMAIEIBAEAAIUMBAEAAIURAAEEAIQADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIAMAAAAEACADAAAFADAEAAABACAILwIAAAABM0AAAAABPwEAAAABQAEAAAABQQAAUwAgQgEAAAABQwEAAAABREAAAAABAQgAAAkAIAgvAgAAAAEzQAAAAAE_AQAAAAFAAQAAAAFBAABTACBCAQAAAAFDAQAAAAFEQAAAAAEBCAAACwAwAQgAAAsAMAgvAgBMACEzQABLACE_AQBKACFAAQBKACFBAABSACBCAQBKACFDAQBKACFEQABLACECAAAAAQAgCAAADgAgCC8CAEwAITNAAEsAIT8BAEoAIUABAEoAIUEAAFIAIEIBAEoAIUMBAEoAIURAAEsAIQIAAAAEACAIAAAQACACAAAABAAgCAAAEAAgAwAAAAEAIA8AAAkAIBAAAA4AIAEAAAABACABAAAABAAgBRUAAE0AIBYAAE4AIBcAAFEAIBgAAFAAIBkAAE8AIAssAABCADAtAAAXABAuAABCADAvAgA0ACEzQAA2ACE_AQA1ACFAAQA1ACFBAABDACBCAQA1ACFDAQA1ACFEQAA2ACEDAAAABAAgAwAAFgAwFAAAFwAgAwAAAAQAIAMAAAUAMAQAAAEAIAgsAAA-ADAtAAAdABAuAAA-ADAvAgAAAAEwAQBAACExAQBAACEyAQBAACEzQABBACEBAAAAGgAgAQAAABoAIAgsAAA-ADAtAAAdABAuAAA-ADAvAgA_ACEwAQBAACExAQBAACEyAQBAACEzQABBACEAAwAAAB0AIAMAAB4AMAQAABoAIAMAAAAdACADAAAeADAEAAAaACADAAAAHQAgAwAAHgAwBAAAGgAgBS8CAAAAATABAAAAATEBAAAAATIBAAAAATNAAAAAAQEIAAAiACAFLwIAAAABMAEAAAABMQEAAAABMgEAAAABM0AAAAABAQgAACQAMAEIAAAkADAFLwIATAAhMAEASgAhMQEASgAhMgEASgAhM0AASwAhAgAAABoAIAgAACcAIAUvAgBMACEwAQBKACExAQBKACEyAQBKACEzQABLACECAAAAHQAgCAAAKQAgAgAAAB0AIAgAACkAIAMAAAAaACAPAAAiACAQAAAnACABAAAAGgAgAQAAAB0AIAUVAABFACAWAABGACAXAABJACAYAABIACAZAABHACAILAAAMwAwLQAAMAAQLgAAMwAwLwIANAAhMAEANQAhMQEANQAhMgEANQAhM0AANgAhAwAAAB0AIAMAAC8AMBQAADAAIAMAAAAdACADAAAeADAEAAAaACAILAAAMwAwLQAAMAAQLgAAMwAwLwIANAAhMAEANQAhMQEANQAhMgEANQAhM0AANgAhDRUAADgAIBYAAD0AIBcAADgAIBgAADgAIBkAADgAIDQCAAAAATUCAAAABDYCAAAABDcCAAAAATgCAAAAATkCAAAAAToCAAAAATsCADwAIQ4VAAA4ACAYAAA7ACAZAAA7ACA0AQAAAAE1AQAAAAQ2AQAAAAQ3AQAAAAE4AQAAAAE5AQAAAAE6AQAAAAE7AQA6ACE8AQAAAAE9AQAAAAE-AQAAAAELFQAAOAAgGAAAOQAgGQAAOQAgNEAAAAABNUAAAAAENkAAAAAEN0AAAAABOEAAAAABOUAAAAABOkAAAAABO0AANwAhCxUAADgAIBgAADkAIBkAADkAIDRAAAAAATVAAAAABDZAAAAABDdAAAAAAThAAAAAATlAAAAAATpAAAAAATtAADcAIQg0AgAAAAE1AgAAAAQ2AgAAAAQ3AgAAAAE4AgAAAAE5AgAAAAE6AgAAAAE7AgA4ACEINEAAAAABNUAAAAAENkAAAAAEN0AAAAABOEAAAAABOUAAAAABOkAAAAABO0AAOQAhDhUAADgAIBgAADsAIBkAADsAIDQBAAAAATUBAAAABDYBAAAABDcBAAAAATgBAAAAATkBAAAAAToBAAAAATsBADoAITwBAAAAAT0BAAAAAT4BAAAAAQs0AQAAAAE1AQAAAAQ2AQAAAAQ3AQAAAAE4AQAAAAE5AQAAAAE6AQAAAAE7AQA7ACE8AQAAAAE9AQAAAAE-AQAAAAENFQAAOAAgFgAAPQAgFwAAOAAgGAAAOAAgGQAAOAAgNAIAAAABNQIAAAAENgIAAAAENwIAAAABOAIAAAABOQIAAAABOgIAAAABOwIAPAAhCDQIAAAAATUIAAAABDYIAAAABDcIAAAAATgIAAAAATkIAAAAAToIAAAAATsIAD0AIQgsAAA-ADAtAAAdABAuAAA-ADAvAgA_ACEwAQBAACExAQBAACEyAQBAACEzQABBACEINAIAAAABNQIAAAAENgIAAAAENwIAAAABOAIAAAABOQIAAAABOgIAAAABOwIAOAAhCzQBAAAAATUBAAAABDYBAAAABDcBAAAAATgBAAAAATkBAAAAAToBAAAAATsBADsAITwBAAAAAT0BAAAAAT4BAAAAAQg0QAAAAAE1QAAAAAQ2QAAAAAQ3QAAAAAE4QAAAAAE5QAAAAAE6QAAAAAE7QAA5ACELLAAAQgAwLQAAFwAQLgAAQgAwLwIANAAhM0AANgAhPwEANQAhQAEANQAhQQAAQwAgQgEANQAhQwEANQAhREAANgAhBDQBAAAABUUBAAAAAUYBAAAABEcBAAAABAssAABEADAtAAAEABAuAABEADAvAgA_ACEzQABBACE_AQBAACFAAQBAACFBAABDACBCAQBAACFDAQBAACFEQABBACEAAAAAAAFIAQAAAAEBSEAAAAABBUgCAAAAAUoCAAAAAUsCAAAAAUwCAAAAAU0CAAAAAQAAAAAAAkgBAAAABEkBAAAABQFIAQAAAAQAAAAABRUABhYABxcACBgACRkACgAAAAAABRUABhYABxcACBgACRkACgAAAAUVABAWABEXABIYABMZABQAAAAAAAUVABAWABEXABIYABMZABQBAgECAwEFBgEGBwEHCAEJCgEKDAILDQMMDwENEQIOEgQREwESFAETFQIaGAUbGQscGwwdHAweHwwfIAwgIQwhIwwiJQIjJg0kKAwlKgImKw4nLAwoLQwpLgIqMQ8rMhU"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map