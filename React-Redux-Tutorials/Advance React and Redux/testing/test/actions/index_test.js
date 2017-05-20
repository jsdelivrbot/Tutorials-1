//Note we do not import renderComponent because we arent rendering any components
import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions'; //we dont have to put ../actions/index, index is default

describe('actions', () => {
  describe('saveComment', () => {

    it('has the correct type', () => {
      const action = saveComment();
      expect(action.type).to.equal(SAVE_COMMENT);
    });

    it('has the correct payload', () => {
      const action = saveComment('new comment');
      expect(action.payload).to.equal('new comment');
    });

  });
});
