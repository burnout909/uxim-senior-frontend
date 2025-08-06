import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { createNotice } from "../../apis/createNotice";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!title.trim() || !contents.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    try {
      await createNotice({ title, contents });
      alert("공지사항이 등록되었습니다.");
      navigate("/notice/announcement");
    } catch (err) {
      console.error("공지사항 등록 실패:", err);
      alert("공지사항 등록에 실패했습니다.");
    }
  };

  return (
    <div className="px-24 py-12 min-h-screen">
      <p className="text-2xl font-bold mb-4">공지사항 작성</p>

      <input
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-gray-300 p-2 mb-4"
      />

      <ReactQuill
        theme="snow"
        value={contents}
        onChange={setContents}
        className="bg-white h-[280px] mb-6"
      />

      {/* 버튼을 완전히 분리된 div에 위치 */}
      <div className="relative z-10 mt-15 flex justify-center">
        <button
          onClick={handleSubmit}
          className="px-6 py-2 !text-white !bg-blue-500 hover:bg-blue-700 rounded font-semibold shadow"
        >
          submit
        </button>
      </div>
    </div>
  );
}
