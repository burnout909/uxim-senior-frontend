import axios from "axios";
import { Post } from "../types/post";

const API_URL = "http://localhost:3000/posts/notice";
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD; // 또는 .env에서 불러오기

export async function fetchNotices(page = 1, size = 10): Promise<Post[]> {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${ADMIN_PASSWORD}`,
      },
      params: { page, size },
    });
    console.log("📦 불러온 데이터:", response.data);
    return response.data.data;
  } catch (error) {
    console.error("❌ 공지사항 fetch 실패:", error);
    throw error;
  }
}

export async function createNotice(post: {
  title: string;
  contents: string;
}): Promise<void> {
  await axios.post(API_URL, post, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_ADMIN_PASSWORD}`,
    },
  });
}
