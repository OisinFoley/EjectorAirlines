import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('aircraft-positions', 'Integration | Component | aircraft positions', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{aircraft-positions}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#aircraft-positions}}
      template block text
    {{/aircraft-positions}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
