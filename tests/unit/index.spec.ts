jest.mock("node-fetch");

import { IndigoClient } from '../../src/index'

describe('Constructor', () => {
  fit('when host is empty', () => {
    expect(() => {new IndigoClient('', 'user', 'pass');}).toThrow('host is empty');
  });
});