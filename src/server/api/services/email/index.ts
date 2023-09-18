import { match } from "ts-pattern";
import { env } from "~/env.mjs";
import { NodeMailerService } from "./implementations/NodeMailerService";
import { undefined } from "zod";

export const emailService = match(env.NODE_ENV)
  .with("development", () => new NodeMailerService())
  .with("production", () => new NodeMailerService())
  .with("test", () => new NodeMailerService())
  .exhaustive();
