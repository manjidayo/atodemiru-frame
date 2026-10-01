(function () {
  "use strict";

  // D2: 受け取る URL の形（クエリ無し・完全一致）。合わなければ埋め込まず案内だけ出す。
  var EXEC_URL_PATTERN = /^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/;

  function show(el) {
    if (el) el.hidden = false;
  }

  try {
    // N2: decodeURIComponent はしない（不正な % で例外になり真っ白になるのを避ける）。
    // location.hash は先頭に "#" を含むため slice(1) で取り除くだけ。
    var raw = location.hash.slice(1);
    var frame = document.getElementById("frame");
    var guide = document.getElementById("guide");
    if (EXEC_URL_PATTERN.test(raw)) {
      frame.src = raw;
      show(frame);
    } else {
      show(guide);
    }
  } catch (error) {
    // 何が起きても、受け取った文字列は画面に出さない（D2）。案内だけ出す。
    show(document.getElementById("guide"));
  }
})();
