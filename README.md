indigo-client [![Build & Test](https://github.com/yamanote1138/indigo-client/actions/workflows/build-and-test.yml/badge.svg?branch=main)](https://github.com/yamanote1138/indigo-client/actions/workflows/build-and-test.yml)
=============

simple node client for Indigo home automation server

[![NPM](https://nodei.co/npm/indigo-client.png?compact=true)](https://nodei.co/npm/indigo-client/)

## Usage

setup, configure and connect
```javascript
'use strict';
import { IndigoClient } from 'indigo-client';

let client = new IndigoClient(
  'indigo.myhomedomain.com', // hostname
  'admin', // username
  's3cr3t', // password
  1138 // port (optional), defaults to 80
);
```

set device property to value
```javascript
client.setDeviceValue( 'living-room-switch', 'isOn', 1)
  .then((response) => {
    console.log(JSON.stringify(response));
  });
```
