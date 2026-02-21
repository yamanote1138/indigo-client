> [!WARNING]
> **DEPRECATED — No longer maintained.**
> This package is no longer actively developed or supported. No further updates, bug fixes, or security patches will be issued. It is kept available for reference and for anyone who may find the source code useful. Use at your own risk.

indigo-client
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
