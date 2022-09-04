'use strict';

import axios from "axios";

class IndigoClient {
  #host;
  #port=80;
  #user;
  #pass;

  constructor(host, port, user, pass) {
    this.#host = host;
    if(port) this.#port = port;
    this.#user = user;
    this.#pass = pass;

    this.#validate();
  }

  #validate = () => {
    if(!this.#host) throw new Error('host not specified');
    if(typeof(this.#host) != 'string') throw new Error('host is not a string');
  
    if(!this.#port) throw new Error('port not specified');
    if(typeof(this.#port) != 'number') throw new Error('port is not a number');
    if(this.#port < 0 || this.#port > 65535) throw new Error('port is out of range');
  
    if(!this.#user) throw new Error('user not specified');
    if(typeof(this.#user) != 'string') throw new Error('user is not a string');
  
    if(!this.#pass) throw new Error('pass not specified');
    if(typeof(this.#pass) != 'string') throw new Error('pass is not a string');
  }

  #send = async (id, data) => {
    const uri = `http://${this.#host}/devices/${encodeURIComponent(id)}`;
    const res = await axios.put(
      uri,
      data,
      {
        auth: {
          username: this.#user,
          password: this.#pass
        }
      }
    );

    return res.data.json;
  }

  setDeviceValue = async (id, key, value) => {
		var data = {};
		data[key]=value;
		return await this.#send(this, id, data);
	}

}

export { IndigoClient };
