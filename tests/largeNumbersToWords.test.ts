import {
  toLargeOneDigitNumberWords,
  toLargeThreeDigitNumberWords,
  toLargeTwoDigitNumberWords
} from '../src/toLargeNumbersWords';
import { LargeNumbersOrder } from '../types';

describe('Tests for the functions that process large numbers', () => {
  it('should return single digit large numbers: from 1 - 9', () => {
    expect(toLargeOneDigitNumberWords(0, LargeNumbersOrder.Millions)).toBe(
      'нула милиони'
    );
    expect(
      toLargeOneDigitNumberWords(1, LargeNumbersOrder.Thousands, {
        isLargestNumberOrderPart: true
      })
    ).toBe('илјада');
    expect(toLargeOneDigitNumberWords(2, LargeNumbersOrder.Thousands)).toBe(
      'две илјади'
    );
    expect(
      toLargeOneDigitNumberWords(1, LargeNumbersOrder.Millions, {
        isLargestNumberOrderPart: true
      })
    ).toBe('милион');
    expect(toLargeOneDigitNumberWords(2, LargeNumbersOrder.Millions)).toBe(
      'два милиони'
    );
    expect(toLargeOneDigitNumberWords(1, LargeNumbersOrder.Billions)).toBe(
      'една милијарда'
    );
    expect(toLargeOneDigitNumberWords(2, LargeNumbersOrder.Billions)).toBe(
      'две милијарди'
    );
  });

  it('should return two digit large numbers: from 10 - 99', () => {
    expect(toLargeTwoDigitNumberWords(10, LargeNumbersOrder.Thousands)).toBe(
      'десет илјади'
    );
    expect(toLargeTwoDigitNumberWords(12, LargeNumbersOrder.Thousands)).toBe(
      'дванаесет илјади'
    );
    expect(toLargeTwoDigitNumberWords(32, LargeNumbersOrder.Millions)).toBe(
      'триесет и два милиони'
    );
    expect(toLargeTwoDigitNumberWords(65, LargeNumbersOrder.Millions)).toBe(
      'шеесет и пет милиони'
    );
    expect(toLargeTwoDigitNumberWords(99, LargeNumbersOrder.Billions)).toBe(
      'деведесет и девет милијарди'
    );
    expect(toLargeTwoDigitNumberWords(80, LargeNumbersOrder.Billions)).toBe(
      'осумдесет милијарди'
    );
    expect(toLargeTwoDigitNumberWords(87, LargeNumbersOrder.Billions)).toBe(
      'осумдесет и седум милијарди'
    );
  });

  it('should return single digit large numbers: from 100 - 999', () => {
    expect(toLargeThreeDigitNumberWords(100, LargeNumbersOrder.Thousands)).toBe(
      'сто илјади'
    );
    expect(toLargeThreeDigitNumberWords(120, LargeNumbersOrder.Thousands)).toBe(
      'сто и дваесет илјади'
    );
    expect(toLargeThreeDigitNumberWords(121, LargeNumbersOrder.Millions)).toBe(
      'сто дваесет и еден милион'
    );
    expect(toLargeThreeDigitNumberWords(122, LargeNumbersOrder.Millions)).toBe(
      'сто дваесет и два милиони'
    );
    expect(toLargeThreeDigitNumberWords(322, LargeNumbersOrder.Billions)).toBe(
      'триста дваесет и две милијарди'
    );
    expect(toLargeThreeDigitNumberWords(632, LargeNumbersOrder.Billions)).toBe(
      'шестотини триесет и две милијарди'
    );
    expect(toLargeThreeDigitNumberWords(905, LargeNumbersOrder.Billions)).toBe(
      'деветстотини и пет милијарди'
    );
  });
});
