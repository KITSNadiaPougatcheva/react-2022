import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const withParams = function (Component: any) {
  return (props: any) => (
    <Component
      {...props}
      params={useParams()}
      location={useLocation()}
      navigate={useNavigate()}
    />
  );
};

export const getSearchQuery = () => {
  const queryParams = new URLSearchParams(window.location.search);
  return queryParams.get("searchQuery") || "";
};
