'use client';

import React, { createContext, useContext, useSyncExternalStore } from 'react';
import { Currency, CURRENCY_SYMBOLS } from '@/data/packages';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (prices: Record<Currency, number>) => string;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: 'EUR',
  setCurrency: () => {},
  formatPrice: (prices) => `€${prices.EUR}`,
});

const STORAGE_KEY = 'ibra_sahara_currency';
const CURRENCY_EVENT = 'ibra_sahara_currency_change';

function subscribeCurrency(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('storage', callback);
  window.addEventListener(CURRENCY_EVENT, callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(CURRENCY_EVENT, callback);
  };
}

function getCurrencySnapshot(): Currency {
  if (typeof window === 'undefined') return 'EUR';
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Currency | null;
    if (saved === 'EUR' || saved === 'USD' || saved === 'TND') {
      return saved;
    }
  } catch {
    // ignore
  }
  return 'EUR';
}

function getServerSnapshot(): Currency {
  return 'EUR';
}

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const currency = useSyncExternalStore(
    subscribeCurrency,
    getCurrencySnapshot,
    getServerSnapshot
  );

  const setCurrency = (c: Currency) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, c);
      window.dispatchEvent(new Event(CURRENCY_EVENT));
    } catch {
      // ignore
    }
  };

  const formatPrice = (prices: Record<Currency, number>) => {
    const amount = prices[currency];
    if (currency === 'EUR') return `€${amount}`;
    if (currency === 'USD') return `$${amount}`;
    return `${amount} ${CURRENCY_SYMBOLS.TND}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
