import TrackList from './TrackList';
import { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// shallow.configure({ adapter: new Adapter() });

describe('TrackList', () => {

  it('shows two tracks', () => {
    const props = {
      tracks: [{ id: 1, title: 'foo' }, { id: 2, title: 'bar' }]
    };
    const element = shallow(<TrackList {...props} />);

    expect(element.find('div>div')).to.have.length(2);
  });

});