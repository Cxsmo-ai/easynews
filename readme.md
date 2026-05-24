# Easynews Syncler Vendor

Syncler vendor copied from JakedUp's repo layout and switched to the Easynews provider config from the supplied PrivateBin.

## Install

Use this Syncler v2 vendor URL:

```
https://cxsmo-ai.github.io/easynews/vendor.json
```

The vendor points Syncler to this package manifest:

```
https://cxsmo-ai.github.io/easynews/manifest.json
```

The package manifest points Syncler to this package data:

```
https://cxsmo-ai.github.io/easynews/package.json
```

You need an Easynews account in Syncler because the package uses the `managedAccounts.easynews` username/password placeholders.

## Files

- `vendor.json` - Syncler v2 vendor URL to add in Syncler.
- `manifest.json` - Syncler express package manifest.
- `package.json` - Syncler express package data.
- `@config/` - lightweight install page based on the JakedUp repo structure.
