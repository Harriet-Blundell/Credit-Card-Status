import React, { useEffect, createRef } from "react";
import { PostcodeLookup } from "@ideal-postcodes/postcode-lookup";
import { config } from "../config.js";

export default function PostcodeLookupComponent(props) {
  const context = createRef();

  useEffect(() => {
    PostcodeLookup.setup({
      apiKey: `${config.apiKey}`,
      context: context.current,
      ...props,
    });
  }, [context, props]);

  return <div ref={context} className="postcode-lookup-container"></div>;
}
