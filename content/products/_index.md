+++
title = "Our Products"
+++

{{ range .Pages }}
<div class="product-summary">
  <h2><a href="{{ .RelPermalink }}">{{ .Title }}</a></h2>
  <p>Price: ${{ .Params.price }}</p>
</div>
{{ end }}
