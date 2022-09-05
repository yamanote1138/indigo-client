'use strict';

import fetch from "node-fetch";

class IndigoClient {
  protected readonly _host:string;
  protected readonly _port:number = 80;
  protected readonly _user:string;
  protected readonly _pass:string;

  constructor(host: string, user: string, pass:string, port?: number) {
    this._host = host;
    if (port !== undefined) this._port = port;
    this._user = user;
    this._pass = pass;

    this._validate();
  }

  protected _validate = () => {
    if(!this._host) throw new Error('host is empty');
    if(!this._user) throw new Error('user is empty');
    if(!this._pass) throw new Error('pass is empty');
    if(this._port < 0 || this._port > 65535) throw new Error('port is out of range');
  };

  protected _send = async (id:number, data:object) => {
    const uri = `http://${this._host}/devices/${encodeURIComponent(id)}`;
    const auth = Buffer.from(`${this._user}:${this._pass}`, 'binary').toString('base64');
    const response = await fetch(
      uri,
      {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          authorization: `Basic ${auth}`
        }
      }
    );
    return await response.json();
  }


  setDeviceValue = async (id:number, key:string, value:string) => {
    var data: {[k: string]: any} = {};
		data[key]=value;
		return await this._send(id, data);
	}

}

export { IndigoClient };
