jest.mock("node-fetch");

import { IndigoClient } from '../../src/index'

describe('Constructor', () => {
  describe('when well-formed parameters are given', () => {
    it('should not throw an error', () => {
      expect(() => {new IndigoClient('192.168.1.138', 'user', 'pass');}).not.toThrowError();
      expect(() => {new IndigoClient('192.168.1.138', 'user', 'pass', 1138);}).not.toThrowError();
    });
  });
  describe('when the host is empty', () => {
    it('should throw an error', () => {
      expect(() => {new IndigoClient('', 'user', 'pass');}).toThrow('host is empty');
    });
  });
  describe('when user is empty', () => {
    it('should throw an error', () => {
      expect(() => {new IndigoClient('192.168.1.138', '', 'pass');}).toThrow('user is empty');
    });
  });
  describe('when pass is empty', () => {
    it('should throw an error', () => {
      expect(() => {new IndigoClient('192.168.1.138', 'user', '');}).toThrow('pass is empty');
    });
  });
  describe('when port is out of range', () => {
    it('should throw an error', () => {
      expect(() => {new IndigoClient('192.168.1.138', 'user', 'pass', -1);}).toThrow('port is out of range');
      expect(() => {new IndigoClient('192.168.1.138', 'user', 'pass', 65536);}).toThrow('port is out of range');
    });
  });
});