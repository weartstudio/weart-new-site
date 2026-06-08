export type FounderId = 'balazs' | 'fanni';

export const FOUNDER_SELECT_EVENT = 'founder-select';

export function selectFounder(id: FounderId, options?: { scroll?: boolean }) {
  if (typeof window === 'undefined') return;

  const scroll = options?.scroll ?? true;
  const url = `${window.location.pathname}${window.location.search}#${id}`;
  history.replaceState(null, '', url);
  window.dispatchEvent(
    new CustomEvent<FounderId>(FOUNDER_SELECT_EVENT, { detail: id }),
  );

  if (scroll) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
