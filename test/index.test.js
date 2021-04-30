import compiler from './compiler.js';

test('test vue file', async () => {
  const stats = await compiler('test.vue');
  const output = stats.toJson().modules[0].source;
  expect(output).toBe(undefined);
})