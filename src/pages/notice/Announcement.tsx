import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import { fetchNotices } from "../../apis/notice";
import { Post } from "../../types/post";

export default function Announcement() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("isAdmin");
    setIsAdmin(token === "true");

    fetchNotices()
      .then((data) => setPosts(data))
      .catch((err) => {
        console.error("공지사항 불러오기 실패:", err);
      });
  }, []);

  const handleDelete = (id: number) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      // 실제 API 요청 필요
      console.log("삭제 요청:", id);
    }
  };

  return (
    <div className="flex w-full">
      <main className="flex-1 p-0">
        <div className="flex items-center justify-between px-4">
          <Title text="공지사항" />
          <div className="flex gap-2">
            {/* 관리자 로그인 버튼 */}
            <button
              onClick={() => navigate("/admin/login")}
              className="text-sm px-3 py-1 border rounded hover:bg-gray-100"
            >
              🔒
            </button>

            {/* 관리자 인증 시에만 작성 버튼 표시 */}
            {isAdmin && (
              <button
                onClick={() => navigate("/admin")}
                className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
              >
                ➕
              </button>
            )}
          </div>
        </div>

        <table className="w-full mt-6 text-sm border-t">
          <thead>
            <tr className="border-b text-left bg-gray-50">
              <th className="w-[60px] py-2 px-3">번호</th>
              <th className="flex-1 py-2 px-3">제목</th>
              <th className="w-[80px] py-2 px-3">이름</th>
              <th className="w-[100px] py-2 px-3">날짜</th>
              <th className="w-[60px] py-2 px-3">조회</th>
              {isAdmin && (
                <th className="w-[80px] py-2 px-3 text-center">관리</th>
              )}
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr
                key={post.id}
                className="border-b hover:bg-gray-50 transition-all"
              >
                <td className="py-2 px-3 text-center">{post.id}</td>
                <td
                  className="py-2 px-3 text-blue-700 font-medium hover:underline cursor-pointer"
                  onClick={() => navigate(`/notice/${post.id}`)}
                >
                  {post.title}
                </td>
                <td className="py-2 px-3">관리자</td>
                <td className="py-2 px-3 text-center">
                  {new Date(post.createdAt).toLocaleDateString("ko-KR", {
                    year: "2-digit",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </td>
                <td className="py-2 px-3 text-center">{post.views}</td>
                {isAdmin && (
                  <td className="py-2 px-3 text-center">
                    <button
                      className="mr-2 text-xs hover:text-blue-600"
                      onClick={() => navigate(`/admin/edit/${post.id}`)}
                    >
                      ✏
                    </button>
                    <button
                      className="text-xs hover:text-red-600"
                      onClick={() => handleDelete(post.id)}
                    >
                      🗑
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
