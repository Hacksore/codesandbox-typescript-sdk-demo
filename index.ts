import "dotenv/config";
import { CodeSandbox } from "@codesandbox/sdk";

const sdk = new CodeSandbox(process.env.API_KEY!);
const sandbox = await sdk.sandbox.open("z323zd");

const result = await sandbox.shells.js.run("console.log(1+1)");
console.log(result.output);

await sandbox.hibernate();
