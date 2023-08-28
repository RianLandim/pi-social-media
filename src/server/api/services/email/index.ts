import { match } from "ts-pattern";
import { env } from "~/env.mjs";
import { NodeMailerService } from "./implementations/NodeMailerService";

export const emailService = match(env.NODE_ENV).with(
  "development",
  () => new NodeMailerService()
);
