import type { AppStore } from '@/app/store';
import { makeStore } from '@/app/store';
import type { CounterSliceState } from './counterSlice';
import {
  counterSlice,
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from './counterSlice';

describe('counter reducer', () => {
  let store: AppStore; // Выносим store в область видимости describe

  beforeEach(() => {
    const initialState: CounterSliceState = {
      value: 3,
      status: 'idle',
    };

    store = makeStore({ counter: initialState }); // Инициализируем store перед каждым тестом
  });

  it('should handle initial state', () => {
    expect(counterSlice.reducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  it('should handle increment', () => {
    expect(selectCount(store.getState())).toBe(3);
    store.dispatch(increment());
    expect(selectCount(store.getState())).toBe(4);
  });

  it('should handle decrement', () => {
    expect(selectCount(store.getState())).toBe(3);
    store.dispatch(decrement());
    expect(selectCount(store.getState())).toBe(2);
  });

  it('should handle incrementByAmount', () => {
    expect(selectCount(store.getState())).toBe(3);
    store.dispatch(incrementByAmount(2));
    expect(selectCount(store.getState())).toBe(5);
  });
});