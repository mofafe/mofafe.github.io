(function () {
    // 設定（必要に応じて調整）
    const SIZE = 28;            // 画像サイズ（px）
    const SMOOTH = 0.2;         // 追従の滑らかさ（0..1）（小さいほど遅れる）
    const OPACITY = 0.95;       // 画像の不透明度（0..1）
    const HIDE_AFTER_SECONDS = 0.15; // 無操作でカーソルを非表示にする秒数
    const IMAGE_SRC = '/img/cursor.png';

    // 要素作成（既にあれば再利用）
    let el = document.getElementById('cursor-spot');
    if (!el || el.tagName !== 'IMG') {
        if (el) el.remove();
        el = document.createElement('img');
        el.id = 'cursor-spot';
        el.src = IMAGE_SRC;
        el.alt = '';
        Object.assign(el.style, {
            position: 'fixed',
            left: '0px',
            top: '0px',
            width: SIZE + 'px',
            height: SIZE + 'px',
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)',
            zIndex: '9999',
            opacity: String(OPACITY),
            willChange: 'left, top, opacity',
            filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.28))'
        });
        document.body.appendChild(el);
    }

    // 位置管理（スムーズ追従）
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let xpos = targetX;
    let ypos = targetY;
    let hideTimer = null;
    let cursorHidden = false;

    function hideCursor() {
        if (cursorHidden) return;
        cursorHidden = true;
        document.documentElement.style.cursor = 'none';
    }

    function showCursor() {
        if (!cursorHidden) return;
        cursorHidden = false;
        document.documentElement.style.cursor = '';
    }

    function resetHideTimer() {
        showCursor();
        if (hideTimer) {
            clearTimeout(hideTimer);
        }
        hideTimer = setTimeout(hideCursor, HIDE_AFTER_SECONDS * 1000);
    }

    function onMove(e) {
        // touch と mouse の両方をサポート
        const cx = e.touches ? e.touches[0].clientX : e.clientX;
        const cy = e.touches ? e.touches[0].clientY : e.clientY;
        targetX = cx;
        targetY = cy;
        resetHideTimer();
    }

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('mousedown', resetHideTimer, { passive: true });
    window.addEventListener('keydown', resetHideTimer, { passive: true });
    window.addEventListener('touchstart', resetHideTimer, { passive: true });

    // アニメーションループ
    function tick() {
        xpos += (targetX - xpos) * SMOOTH;
        ypos += (targetY - ypos) * SMOOTH;
        el.style.left = xpos + 'px';
        el.style.top = ypos + 'px';
        requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    resetHideTimer();

    // リサイズ時の再計算が必要な場合はここに追記
    window.addEventListener('resize', () => {});
})();