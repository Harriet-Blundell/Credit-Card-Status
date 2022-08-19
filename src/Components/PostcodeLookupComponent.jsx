import React, { useEffect, createRef } from "react";
import { PostcodeLookup } from "@ideal-postcodes/postcode-lookup";

export default function PostcodeLookupComponent(props) {
  const context = createRef();

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    PostcodeLookup.setup({
      apiKey: API_KEY,
      context: context.current,
      ...props,
    });
  }, [context, props, API_KEY]);

  return <div ref={context} className="postcode-lookup-container"></div>;
}
