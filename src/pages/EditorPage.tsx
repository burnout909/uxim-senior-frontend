import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function EditorPage() {
  const [value, setValue] = useState(`# 제목

- 일반 항목
- [x] 체크됨
- [ ] 체크 안됨

**굵은 글씨**
`);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-xl font-bold mb-4">📝 마크다운 에디터</h1>

      <textarea
        className="w-full h-64 border p-4 mb-8 rounded"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <div className="border p-4 rounded bg-white">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {value}
        </ReactMarkdown>
      </div>
    </div>
  );
}
