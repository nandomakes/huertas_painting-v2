// Animated <details> accordion — the same motion as Mario's Tint Shop FAQ:
// the answer grows from 0 with opacity + blur (blur masks the height reflow
// so it reads as one smooth motion), closes with a quicker ease-in, and only
// one item per [data-accordion] group is open at a time.
// Keeps native <details> semantics, so without JS everything still works.
// Fires a bubbling `accordion:open` event (detail = the <details>) so a
// section can react, e.g. ServicesSplit swapping its photo.

const EASE_OUT = 'cubic-bezier(0.23, 1, 0.32, 1)';
const EASE_IN = 'cubic-bezier(0.4, 0, 0.6, 1)';

export function initAccordions() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll<HTMLElement>('[data-accordion]').forEach((group) => {
    if (group.dataset.accordionReady) return;
    group.dataset.accordionReady = '1';

    const items = Array.from(group.querySelectorAll<HTMLDetailsElement>('details.acc'));
    const closers = new Map<HTMLDetailsElement, () => void>();

    items.forEach((d) => {
      const summary = d.querySelector<HTMLElement>('summary')!;
      const content = d.querySelector<HTMLElement>('.acc-content')!;
      let anim: Animation | null = null;

      const close = () => {
        if (!d.open) return;
        anim?.cancel();
        if (reduce) {
          d.open = false;
          return;
        }
        const h = content.offsetHeight;
        anim = content.animate(
          [
            { height: `${h}px`, opacity: 1, filter: 'blur(0px)' },
            { height: '0px', opacity: 0, filter: 'blur(6px)' },
          ],
          { duration: 260, easing: EASE_IN }
        );
        anim.onfinish = () => {
          d.open = false;
          anim = null;
        };
      };
      closers.set(d, close);

      summary.addEventListener('click', (e) => {
        e.preventDefault();
        anim?.cancel();
        if (d.open) {
          close();
          return;
        }
        // Only one open at a time — collapse the others first.
        closers.forEach((fn, other) => {
          if (other !== d && other.open) fn();
        });
        d.open = true;
        d.dispatchEvent(new CustomEvent('accordion:open', { bubbles: true, detail: d }));
        if (reduce) return;
        const h = content.offsetHeight;
        anim = content.animate(
          [
            { height: '0px', opacity: 0, filter: 'blur(6px)' },
            { height: `${h}px`, opacity: 1, filter: 'blur(0px)' },
          ],
          { duration: 320, easing: EASE_OUT }
        );
        anim.onfinish = () => {
          anim = null;
        };
      });
    });
  });
}
