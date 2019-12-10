const postcss = require('postcss')

const plugin = require('./')

async function run (input, output, opts) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('flex-x', async () => {
  await run(
    '.a { display: flex-x }',
    '.a { display: flex }'
  )
})

it('flex-wbc', async () => {
  await run(
    '.a { display: flex-wb }',
    '.a { display: flex; flex-wrap: wrap; justify-content: space-between }'
  )
})

it('flex-xcc', async () => {
  await run(
    '.a { display: flex-xcc }',
    '.a { display: flex; justify-content: center; align-items: center }'
  )
})
