import { describe, expect, it, beforeEach } from '@jest/globals';
import { getShops } from "../shops.slice";
import store from '../../../../../store'
import fetchMock from 'jest-fetch-mock'

const MockShop1 = { id: '1', name: 'Shop 1', sortOrder: 3 };
const MockShop2 = { id: '2', name: 'Shop 2', sortOrder: 1 };
const MockShop3 = { id: '3', name: 'Shop 3', sortOrder: 2 };
const MockShops = [MockShop1, MockShop2, MockShop3];

fetchMock.enableMocks();

describe('Shops reducer', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should handle initial state', () => {
    const { list, isLoading, error } = store.getState().shops;
    expect(list).toEqual([]);
    expect(isLoading).toBe(false);
    expect(error).toBe('');
  });

  it('should handle getShops', async () => {
    fetchMock.mockOnce(JSON.stringify(MockShops));

    await store.dispatch(getShops());
    const { list, isLoading, error } = store.getState().shops;

    expect(list).toEqual(MockShops);
    expect(isLoading).toBe(false);
    expect(error).toBe('');
  });

  it('should handle getShops error', async () => {
    fetchMock.mockOnce('', { status: 500 });

    await store.dispatch(getShops());
    const { error, isLoading } = store.getState().shops;

    expect(error).not.toBe('');
    expect(isLoading).toBe(false);
  });
});
