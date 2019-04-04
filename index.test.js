var postcss = require('postcss');
var plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ])
        .process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('flex-x', function () {
    return run(
        '.a { display: flex-x }',
        '.a { display: flex }'
    );
});

it('flex-wbc', function () {
    return run(
        '.a { display: flex-wb }',
        '.a { display: flex; flex-wrap: wrap; justify-content: space-between }'
    );
});

it('flex-xcc', function () {
    return run(
        '.a { display: flex-xcc }',
        '.a { display: flex; justify-content: center; align-items: center }'
    );
});
