// Click-to-play video facade. The panel shows a static poster until the visitor
// asks for the video, so the page never loads YouTube's player code up front.
// Markup contract: [data-video="<youtube id>"] wraps a [data-video-play] button.

export function initVideo() {
  document.querySelectorAll('[data-video]').forEach((panel) => {
    const btn = panel.querySelector('[data-video-play]');
    if (!btn) return;
    btn.addEventListener(
      'click',
      () => {
        const iframe = document.createElement('iframe');
        iframe.className = 'va-video__frame';
        iframe.src = `https://www.youtube.com/embed/${panel.dataset.video}?autoplay=1&rel=0`;
        iframe.title = panel.dataset.videoTitle || 'Video';
        iframe.allow =
          'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.allowFullscreen = true;
        panel.replaceChildren(iframe);
        panel.classList.add('va-video--playing');
      },
      { once: true }
    );
  });
}
