(function() {

const App = Vue.createApp({
  data() {
    const owner = 'Cxsmo-ai';
    const repo = 'easynews';
    const branch = 'main';
    const baseUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}`;
    return {
      packageName: 'Easynews',
      vendorUrl: `${baseUrl}/manifest.json`,
      packageUrl: `${baseUrl}/package.json`
    };
  },
  methods: {
    copy(value) {
      navigator.clipboard && navigator.clipboard.writeText(value);
    }
  }
});

App.mount('.c-app');
window.App = App;

}());
