export default class ChatService {
  _apiBase = "https://api.myjson.com";

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} received ${res.status}`);
    }

    return await res.json();
  };

  getAllMessages = async () => {
    const res = await this.getResource("/bins/1hiqin");
    return res;
  };
}
