(function () {
    // 設定（必要に応じて調整）
    const SIZE = 300;           // 円の直径（px）
    const SMOOTH = 0.18;        // 追従の滑らかさ（0..1）（小さいほど遅れる） — 滑らかに動かす
    const OPACITY = 1.0;        // 中心の不透明度（0..1）

    // 要素作成（既にあれば再利用）
    let el = document.getElementById('cursor-spot');
    if (!el) {
        el = document.createElement('div');
        el.id = 'cursor-spot';
        Object.assign(el.style, {
            position: 'fixed',
            left: '0px',
            top: '0px',
            width: SIZE + 'px',
            height: SIZE + 'px',
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            zIndex: '9999',
            willChange: 'transform, opacity',
            // 中心30%は完全黒、外側は段階的にやさしくフェードアウトするようにストップを増やす
            background: `radial-gradient(circle at 50% 50%,
                rgba(0,0,0,1) 50%,
                rgba(0,0,0,1) 60%,
                rgba(0,0,0,0.92) 70%,
                rgba(0,0,0,0.78) 80%,
                rgba(0,0,0,0.48) 90%,
                rgba(0,0,0,0) 100%)`
        });
        document.body.appendChild(el);
    }

    // 位置管理（スムーズ追従）
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let xpos = targetX;
    let ypos = targetY;

    function onMove(e) {
        // touch と mouse の両方をサポート
        const cx = e.touches ? e.touches[0].clientX : e.clientX;
        const cy = e.touches ? e.touches[0].clientY : e.clientY;
        targetX = cx;
        targetY = cy;
    }

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });

    // アニメーションループ
    function tick() {
        xpos += (targetX - xpos) * SMOOTH;
        ypos += (targetY - ypos) * SMOOTH;
        el.style.left = xpos + 'px';
        el.style.top = ypos + 'px';
        requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    // ウィンドウサイズ変更で要素サイズを更新したいときはここを編集
    window.addEventListener('resize', () => {
        // 例: SIZE を画面幅に応じて変えたい場合に対応可能
    });
})();