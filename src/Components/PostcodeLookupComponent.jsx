import React, { useEffect, createRef } from "react";
import { PostcodeLookup } from "@ideal-postcodes/postcode-lookup";

export default function PostcodeLookupComponent(props) {
  const context = createRef();

  useEffect(() => {
    PostcodeLookup.setup({
      apiKey: "ak_l6xsf4ej6WotCVfzPX8STZKjELBaE",
      context: context.current,
      ...props,
    });
  }, [context, props]);

  return <div ref={context} className="postcode-lookup-container"></div>;
}
