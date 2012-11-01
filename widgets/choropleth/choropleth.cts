.usa-choropleth {
  template: http://www.treesheets.org/widgets/choropleth/choropleth.html#usa;
  template-proxy: http://people.csail.mit.edu/eob/cts-util/fragment-proxy.php;
  data: .;
  with: choropleth;
}

.usa-choropleth .properties {
  with: properties;
}


.usa-choropleth .height {
  value: height;
}

.usa-choropleth .width {
  value: width;
}

.usa-choropleth table.states tbody {
  repeat: states;
}

.usa-choropleth table.states tbody td:nth-child(1) {
  value: state;
}

.usa-choropleth table.states tbody td:nth-child(2) {
  value: value;
}

.usa-choropleth table.states tbody td:nth-child(3) {
  value: description;
}
