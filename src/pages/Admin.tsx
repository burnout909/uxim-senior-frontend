// src/pages/admin/EditorPage.tsx
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./quill-custom.css";

export default function EditorPage() {
  const [value, setValue] = useState("");

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">마크다운 에디터</h2>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className="bg-white"
      />
    </div>
  );
}
