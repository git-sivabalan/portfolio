import React from "react";
import { LinkPreview } from "@/components/link-preview";

const LinkPreviewDemo = () => {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
    
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-2xl max-w-3xl mx-auto mb-10">
        Reach me to find a solution for your problem. Connect with me on{" "}
        <LinkPreview
          url="https://github.com/git-sivabalan"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          GitHub
        </LinkPreview>
        , follow me on{" "}
        <LinkPreview
          url="https://www.linkedin.com/in/sivabalan-k-174141229"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          LinkedIn
        </LinkPreview>
        , check out my{" "}
        <LinkPreview
          url="https://www.instagram.com/siva__156?igsh=NTc4MTIwNjQ2YQ=="
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Instagram
        </LinkPreview>
        , and like my page on{" "}
        <LinkPreview
          url="https://www.facebook.com/yourfacebookpage"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Facebook
        </LinkPreview>
        .
      </p>
    </div>
  );
};

export default LinkPreviewDemo;
