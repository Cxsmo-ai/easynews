(function() {

const App = Vue.createApp({
  data() {
    const owner = 'Cxsmo-ai';
    const repo = 'easynews';
    const branch = 'main';
    const baseUrl = `https://${owner.toLowerCase()}.github.io/${repo}`;
    return {
      packageName: 'Easynews',
      vendorUrl: `${baseUrl}/vendor.json`,
      manifestUrl: `${baseUrl}/manifest.json`,
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
