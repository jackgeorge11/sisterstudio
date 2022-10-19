import Link from "next/link";
import React from "react";

export default function Layout() {
  return (
    <div className="layout">
      <div className="header">sister stu</div>
      <nav>
        <Link href="/" passHref={true}>
          <a href="">
            <span>WORK</span>
          </a>
        </Link>
        <Link href="/" passHref={true}>
          <a href="">
            <span>MISSION</span>
          </a>
        </Link>
        <Link href="/" passHref={true}>
          <a href="">
            <span>CONNECT</span>
          </a>
        </Link>
      </nav>
    </div>
  );
}
