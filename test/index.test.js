import compiler from './compiler.js';

test('test vue file', async () => {
  const stats = await compiler('test.vue');
  const output = stats.toJson({ source: true }).modules[0].source;
  expect(output.indexOf('px')).toBe(-1);
})