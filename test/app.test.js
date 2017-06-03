import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/app.jsx';

describe('App (Snapshot)', () => {
  it('App renders hello world', () => {
    const component = renderer.create(<App />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
