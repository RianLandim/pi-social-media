import { S3 } from "@aws-sdk/client-s3";
import { IObjectStorageService, PresignedPost } from "./IObjectStorage";
import { env } from "~/env.mjs";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";

export class ObjectStorageService implements IObjectStorageService {
  private readonly s3Client: S3;
  constructor() {
    this.s3Client = new S3({
      endpoint: env.MINIO_URL,
      region: env.AWS_REGION,
      credentials: {
        accessKeyId: env.AWS_ACCESS_KEY_ID,
        secretAccessKey: env.AWS_SECRET_ACCESS_KEY_ID,
      },
      forcePathStyle: !!env.MINIO_URL,
    });
  }

  async getUploadUrl(key: string): Promise<PresignedPost> {
    const presignedPost = await createPresignedPost(this.s3Client, {
      Bucket: env.AWS_BUCKET_NAME ?? "",
      Key: key,
      Fields: {
        acl: "public-read",
      },
      Conditions: [
        { acl: "public-read" },
        { bucket: env.AWS_BUCKET_NAME ?? "" },
        ["content-length-range", 0, 10485760],
      ],
      Expires: 15 * 60,
    });

    return presignedPost;
  }

  async getFileUrl(key: string): Promise<string> {
    if (env.MINIO_URL) {
      return Promise.resolve(`${env.MINIO_URL}/${env.AWS_BUCKET_NAME}/${key}`);
    }

    return Promise.resolve(
      `https://${env.AWS_BUCKET_NAME}.s3.${
        env.AWS_REGION ?? ""
      }.amazonaws.com/${key}`
    );
  }
}
