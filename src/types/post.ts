// src/types/post.ts
export type PostType =
  | "notice"
  | "job"
  | "product"
  | "free"
  | "photo"
  | "video";

export interface Post {
  id: number;
  type: PostType;
  title: string;
  contents: string;
  fileName?: string;
  fileUrl?: string;
  thumbnailUrl?: string;
  createdAt: string;
  updatedAt: string;
  views: number; // ✅ 조회수 필드 추가
}
