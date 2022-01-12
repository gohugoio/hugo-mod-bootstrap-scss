[![Netlify Status](https://api.netlify.com/api/v1/badges/1afd337b-0273-4c6e-aa6f-e08bdde9833b/deploy-status)](https://app.netlify.com/sites/hugo-mod-bootstrap-scss/deploys)
&nbsp;&nbsp;[Test Site](https://hugo-mod-bootstrap-scss.netlify.app/)

This is a [Hugo module](https://gohugo.io/hugo-modules/) that packages the [Bootstrap v4](https://getbootstrap.com/docs/4.6/getting-started/introduction/) SCSS source ready to be used in Hugo.

You need the Hugo extended version and [Go](https://golang.org/dl/) to use this component.

## Use

Add the component to your Hugo site's config:

```toml
[module]
[[module.imports]]
path = "github.com/gohugoio/hugo-mod-bootstrap-scss/v5"
```

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

## Versions

This repository will be versioned following https://github.com/bep/semverpair


