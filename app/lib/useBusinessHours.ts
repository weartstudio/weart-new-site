import { useSyncExternalStore } from 'react';

// Kliensoldali "épp nyitva vagyunk?" jelző H–P 9–17 munkaidőre.
// useSyncExternalStore: szerveren null (semleges), kliensen a valós állapot —
// így nincs hydration-mismatch, és nem kell setState egy effektben.
const EMPTY_SUBSCRIBE = () => () => {};

function getClientSnapshot(): boolean {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  return day >= 1 && day <= 5 && hour >= 9 && hour < 17;
}

function getServerSnapshot(): boolean | null {
  return null;
}

export function useBusinessHours(): boolean | null {
  return useSyncExternalStore(EMPTY_SUBSCRIBE, getClientSnapshot, getServerSnapshot);
}
