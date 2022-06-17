import React from "react";

const Layout = (props) => {
  return <main className="bg-slate-100 min-h-[100vh]">{props.children}</main>;
};

export default Layout;
