export default {
  async getChangels(){
    let resp = await fetch("/x/web-interface/web/channel/category/list");
    let data = await resp.json()
    return data.data.categories
  }
}