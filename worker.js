export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request)
    if (response.status === 404) {
      const url = new URL(request.url)
      url.pathname = '/index.html'
      return env.ASSETS.fetch(url.toString())
    }
    return response
  },
}
