(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['game_card'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"info game-card\">\r\n    <div class=\"game-thumb game-card\">\r\n        <img id=\"thumbnail-img\" alt=\"Nome_Do_Post\" src=\""
    + alias2(alias1((depth0 != null ? depth0.img : depth0), depth0))
    + "\" width=\"100%\" height=\"100%\">\r\n        <a class=\"post-link\" data-title=\""
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "\">\r\n            <div class=\"gradient game-card\"></div>\r\n        </a>\r\n    </div>\r\n    <div class=\"info-data\">\r\n        <span id=\"data\"><i class=\"far fa-calendar-alt\"></i>"
    + alias2(alias1((depth0 != null ? depth0.date : depth0), depth0))
    + "</span>\r\n    </div>\r\n    <a class=\"post-link\" data-title=\""
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "\">\r\n        <h2 id=\"name\" class=\"info-title\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</h2>\r\n    </a>\r\n    <div id=\"categories\" class=\"info-category\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "        <span class=\"category "
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</span>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.games : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"placeholder game-card\">\r\n    \r\n</div>\r\n<div class=\"placeholder game-card\">\r\n\r\n</div>";
},"useData":true});
templates['pagination'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <button class=\"page_button\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.previous || (depth0 != null ? depth0.previous : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"previous","hash":{},"data":data}) : helper)))
    + "\" onclick=\"pageHandler(this)\"><</button>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <button class=\"page_button\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.previous || (depth0 != null ? depth0.previous : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"previous","hash":{},"data":data}) : helper)))
    + "\" onclick=\"pageHandler(this)\" disabled><</button>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "    <button class=\"page_button\" value=\""
    + alias2(alias1((depth0 != null ? depth0.value : depth0), depth0))
    + "\" onclick=\"pageHandler(this)\">"
    + alias2(alias1((depth0 != null ? depth0.value : depth0), depth0))
    + "</button>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <button class=\"page_button\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.next || (depth0 != null ? depth0.next : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"next","hash":{},"data":data}) : helper)))
    + "\" onclick=\"pageHandler(this)\">></button>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <button class=\"page_button\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.next || (depth0 != null ? depth0.next : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"next","hash":{},"data":data}) : helper)))
    + "\" onclick=\"pageHandler(this)\" disabled>></button>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.previous : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.next : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
})();