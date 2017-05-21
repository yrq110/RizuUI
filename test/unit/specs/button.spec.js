/* eslint-disable */
import { createTest, createVue, destroyVM } from '../util';
import Button from '../../../src/components/button';
describe('Button', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Button, {
      type: 'gh'
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('rz-btn-gh')).to.be.true;
  });

});
