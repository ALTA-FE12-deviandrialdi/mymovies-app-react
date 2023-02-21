import React, { Component } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

class Layout extends Component<LayoutProps> {
  render() {
    const { children } = this.props;

    return (
      <div className="w-full layout-container h-screen bg-gray-200 dark:bg-gray-800 flex flex-col overflow-auto">
        <Navbar />
        <div className="h-full overflow-auto p-3">{children}</div>
      </div>
    );
  }
}

export default Layout;
