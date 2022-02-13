[![Netlify Status](https://api.netlify.com/api/v1/badges/1afd337b-0273-4c6e-aa6f-e08bdde9833b/deploy-status)](https://app.netlify.com/sites/hugo-mod-bootstrap-scss/deploys)
&nbsp;&nbsp;[Test Site](https://hugo-mod-bootstrap-scss.netlify.app/)

This is a [Hugo module](https://gohugo.io/hugo-modules/) that packages the [Bootstrap v5](https://getbootstrap.com/) SCSS and JavaScript source ready to be used in Hugo.

For Bootstrap v4, see [the v4 branch](https://github.com/gohugoio/hugo-mod-bootstrap-scss/tree/v4).

You need the Hugo extended version and [Go](https://golang.org/dl/) to use this component.

## Use

Add the component to your Hugo site's config:

```toml
[module]
[[module.imports]]
path = "github.com/gohugoio/hugo-mod-bootstrap-scss/v5"
```

### SCSS

The Bootstrap SCSS will be mounted in `assets/scss/bootstrap`, so you can then import either all:

```scss
@import "bootstrap/bootstrap";
```

Or only what you need:

```scss
// Configuration
@import "bootstrap/functions";
@import "bootstrap/variables";
@import "bootstrap/mixins";
@import "bootstrap/utilities";

// Layout & components
@import "bootstrap/root";
@import "bootstrap/reboot";
@import "bootstrap/type";
@import "bootstrap/images";
@import "bootstrap/containers";
@import "bootstrap/grid";
@import "bootstrap/tables";
@import "bootstrap/forms";
@import "bootstrap/buttons";
@import "bootstrap/transitions";
@import "bootstrap/dropdown";
@import "bootstrap/button-group";
@import "bootstrap/nav";
@import "bootstrap/navbar";
@import "bootstrap/card";
@import "bootstrap/accordion";
@import "bootstrap/breadcrumb";
@import "bootstrap/pagination";
@import "bootstrap/badge";
@import "bootstrap/alert";
@import "bootstrap/progress";
@import "bootstrap/list-group";
@import "bootstrap/close";
@import "bootstrap/toasts";
@import "bootstrap/modal";
@import "bootstrap/tooltip";
@import "bootstrap/popover";
@import "bootstrap/carousel";
@import "bootstrap/spinners";
@import "bootstrap/offcanvas";

// Helpers
@import "bootstrap/helpers";

// Utilities
@import "bootstrap/utilities/api";
```

### JavaScript

See the [Example Site](./exampleSite).

## Versions

This repository will be versioned following https://github.com/bep/semverpair

## How to Upgrade Bootstrap

1. Checkout the relevant branch (`main`=latest=Bootstrap 5, `v4`=Bootstrap 4)
1. Create a PR branch
1. Run `hugo mod get -u github.com/twbs/bootstrap`
1. Verify that `go.mod` is updated with correct version (run `hugo mod graph`).
1. Do `cd exampleSite` and run `hugo server` and make sure it works (and that `github.com/twbs/bootstrap` version is as expected in the table).
1. Create a Pull Request and verify that it builds and that the Netlify preview works.
