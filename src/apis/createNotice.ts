import axios from "axios";

const API_URL = "http://localhost:3000/posts/notice";
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

export async function createNotice(post: {
  title: string;
  contents: string;
}): Promise<void> {
  try {
    await axios.post(API_URL, post, {
      headers: {
        Authorization: `Bearer ${ADMIN_PASSWORD}`,
      },
    });
  } catch (error) {
    console.error("❌ 공지사항 등록 실패:", error);
    throw error;
  }
}
