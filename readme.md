# Easynews Syncler Vendor

Syncler vendor manifest copied from JakedUp's package repo layout and switched to the Easynews provider config from the supplied PrivateBin.

## Install

Use this Syncler v2 vendor manifest URL:

```
https://raw.githubusercontent.com/Cxsmo-ai/easynews/main/manifest.json
```

The manifest points Syncler to:

```
https://raw.githubusercontent.com/Cxsmo-ai/easynews/main/package.json
```

You need an Easynews account in Syncler because the package uses the `managedAccounts.easynews` username/password placeholders.

## Files

- `manifest.json` - Syncler v2 vendor manifest.
- `package.json` - Syncler express package config.
- `@config/` - lightweight install page based on the JakedUp repo structure.
