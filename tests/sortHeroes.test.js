import { sortHeroes } from '/src/sortHeroes';

test('сортируем героев по убыванию здоровья', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(sortHeroes(heroes)).toEqual(expected);
});