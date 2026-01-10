import {
  lexicalEditor,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  FixedToolbarFeature,
} from "@payloadcms/richtext-lexical";
import { GlobalConfig } from "payload";

const Legacy: GlobalConfig = {
  slug: "legacy",
  label: "Legacy Notes",
  fields: [
    {
      name: "notes",
      label: "Notes",
      type: "array",
      fields: [
        {
          name: "createdAt",
          label: "Created At",
          type: "date",
          admin: {
            hidden: true,
          },
          hooks: {
            beforeChange: [
              ({ value }) => {
                // Only set once (when row is first created), not user-editable
                if (!value) {
                  return new Date().toISOString();
                }
                return value;
              },
            ],
          },
        },
        {
          name: "name",
          label: "Name",
          type: "text",
          required: true,
        },
        {
          name: "content",
          label: "Content",
          type: "richText",
          required: true,
          editor: lexicalEditor({
            features: () => [
              BoldFeature(),
              ItalicFeature(),
              UnderlineFeature(),
              FixedToolbarFeature(),
            ],
          }),
        },
      ],
    },
  ],
};

export default Legacy;
