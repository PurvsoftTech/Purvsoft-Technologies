import React from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function BlogEditor({ value, onChange }) {
  return (
    <Editor
      apiKey="jbkrbmas1gujlzqss35uteb55rh7tmnssenuiesv2uwrtgtw" // ✅ tumhara dusre wale ka API key
      value={value || ""}
      onEditorChange={(newValue) => onChange(newValue)}
      init={{
        plugins: [
          "anchor",
          "autolink",
          "charmap",
          "codesample",
          "emoticons",
          "link",
          "lists",
          "media",
          "searchreplace",
          "table",
          "visualblocks",
          "wordcount",
          "checklist",
          "mediaembed",
          "casechange",
          "formatpainter",
          "pageembed",
          "a11ychecker",
          "tinymcespellchecker",
          "permanentpen",
          "powerpaste",
          "advtable",
          "advcode",
          "advtemplate",
          "ai",
          "uploadcare",
          "mentions",
          "tinycomments",
          "tableofcontents",
          "footnotes",
          "mergetags",
          "autocorrect",
          "typography",
          "inlinecss",
          "markdown",
          "importword",
          "exportword",
          "exportpdf",
        ],
        toolbar:
          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | " +
          "link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | " +
          "align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
        tinycomments_mode: "embedded",
        tinycomments_author: "Admin",
        mergetags_list: [
          { value: "First.Name", title: "First Name" },
          { value: "Email", title: "Email" },
        ],
        ai_request: (request, respondWith) =>
          respondWith.string(() =>
            Promise.reject("See docs to implement AI Assistant")
          ),
        uploadcare_public_key: "14de58d0909677dbe35c", // ✅ dusre wale ka key
      }}
    />
  );
}
