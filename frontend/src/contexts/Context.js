import React, { useState, useEffect } from "react";
import HeaderContext from "./header/header.context";
import SidebarContext from "./sidebar/sidebar.context";
import FooterContext from "./footer/footer.context";

export default function Context({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTopbarOpen, setIsTopbarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const toggleTopbar = () => {
    setIsTopbarOpen((prev) => !prev);
  };

  useEffect(() => {
    const html = document.documentElement;

    if (isSidebarOpen) {
      html.classList.add("nav_open");
    } else {
      html.classList.remove("nav_open");
    }

    if (isTopbarOpen) {
      html.classList.add("topbar_open");
    } else {
      html.classList.remove("topbar_open");
    }

    // Nettoyage pour éviter l'accumulation de classes si le composant est démonté
    return () => {
      html.classList.remove("nav_open", "topbar_open");
    };
  }, [isSidebarOpen, isTopbarOpen]);

  return (
    <div
      className={`wrapper ${isSidebarOpen ? "nav_open" : ""} ${
        isSidebarOpen ? "topbar_open" : ""
      }`}
    >
      <HeaderContext
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
        toggleTopbar={toggleTopbar}
        isTopbarOpen={isTopbarOpen}
      />
      <SidebarContext isSidebarOpen={isSidebarOpen} />
      <div className="main-panel">
        <div className="content"> 
          <div className="container-fluid">{children}</div>
        </div>
        <FooterContext />
      </div>
    </div>
  );
}
