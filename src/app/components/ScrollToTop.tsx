import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** ルート変更時にページ先頭へ戻す（長いトップから短いページへ移ると下部の画像群だけ見えてしまうため） */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
