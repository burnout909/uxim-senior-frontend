// src/pages/admin/EditorPage.tsx
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./quill-custom.css";

export default function EditorPage() {
  const [value, setValue] = useState("");

  return (
    <div className="px-24 py-12 min-h-screen">
      <p className="text-2xl font-bold mb-4">공지사항 및 일자리 소식 작성</p>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className="bg-white h-[280px]"
      />
    </div>
  );
}
