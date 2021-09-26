import sum from "~/utils/sum";
describe('Sum Module Test', () => {
  test('calc test', () => {
    expect(sum(1, 2)).toBe(3);
  })
})