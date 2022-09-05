indigo-client 
[![Build](https://github.com/yamanote1138/indigo-client/actions/workflows/build-and-test.yml/badge.svg?branch=main)](https://github.com/yamanote1138/indigo-client/actions/workflows/build-and-test.yml)
![License](https://img.shields.io/npm/l/indigo-client)
![NPM Version](https://img.shields.io/npm/v/indigo-client)
=============

simple node client for Indigo home automation server

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
