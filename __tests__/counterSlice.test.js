import counterReducer, { increment, decrement, incrementByAmount } from '../src/components/counterSlice';

describe('counterSlice', () => {
  it('should return the initial state', () => {
    expect(counterReducer(undefined, { type: undefined })).toEqual({
      count: 0,
      loading: false,
      error: null,
    });
  });

  it('should handle increment', () => {
    const prevState = { count: 0, loading: false, error: null };
    expect(counterReducer(prevState, increment())).toEqual({ count: 1, loading: false, error: null });
  });

  it('should handle decrement', () => {
    const prevState = { count: 1, loading: false, error: null };
    expect(counterReducer(prevState, decrement())).toEqual({ count: 0, loading: false, error: null });
  });

  it('should handle incrementByAmount', () => {
    const prevState = { count: 1, loading: false, error: null };
    expect(counterReducer(prevState, incrementByAmount(5))).toEqual({ count: 6, loading: false, error: null });
  });
});
