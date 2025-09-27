import React from "react";
import "./index.css";

/**
 * 全局底部栏组件
 * @constructor
 */
export default function GlobalFooter() {
  // 使用固定年份避免服务器端和客户端时差导致的hydration问题
  // 如果需要动态年份，可以考虑使用useEffect在客户端更新
  const currentYear = 2024;

  return (
    <div className="global-footer">
      <div>© {currentYear} 面试刷题平台</div>
      <div>
        <a href="https://www.code-nav.cn" target="_blank">
          作者：编程导航 - 程序员大鸟
        </a>
      </div>
    </div>
  );
}
