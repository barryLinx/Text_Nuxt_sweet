(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{182:function(e,t,r){"use strict";var a=r(13),s=r.n(a),o=r(14),i={popps:[],computed:s()({},Object(o.b)("cartModules",["vxCart","vxCartList","vxOrderSummary"]),{cartlist:function(){return this.$store.getters["cartModules/CalcCartItem"]},ordersummary:function(){return this.$store.getters["cartModules/Calctotalsubtotal"]}})},n=r(12),l=Object(n.a)(i,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"order-info"},[r("h3",[e._v("訂單摘要")]),e._v(" "),r("div",{staticClass:"order-body"},[r("div",[r("span",[e._v("小計")]),e._v(" "),r("span",[e._v("NT$ "+e._s(e.ordersummary.subtotal))])]),e._v(" "),r("div",[r("span",[e._v("運費")]),e._v(" "),r("span",[e._v("NT$ "+e._s(e.ordersummary.tran))])])]),e._v(" "),r("div",{staticClass:"order-footer"},[r("span",[e._v("總計")]),e._v(" "),r("span",[e._v("NT$ "+e._s(e.ordersummary.Total))])])]),e._v(" "),r("div",{staticClass:"cart-list"},[r("h3",[e._v("購物清單")]),e._v(" "),r("div",{staticClass:"cart-overflow"},e._l(e.cartlist,function(t,a){return r("div",{key:a,staticClass:"cart-card"},[r("div",{staticClass:"img",style:{"background-image":"url(./image/"+t.imgname+".jpg)"}}),e._v(" "),r("div",{},[r("p",[e._v(" \r\n                    "+e._s(t.title)+"（"+e._s(t.len)+" )\r\n                  ")]),e._v(" "),r("p",[e._v("\r\n                      NT$ "+e._s(t.price)+"\r\n                    ")])])])}),0)])])},[],!1,null,null,null);l.options.__file="SummaryList.vue";t.a=l.exports},201:function(e,t,r){"use strict";r.r(t);var a={components:{summarylist:r(182).a},data:function(){return{from:{transfrom:{username:"",name:"",county:"",area:"",address:""}}}},methods:{validateBeforeSubmit:function(){var e=this,t=this;this.$validator.validateAll().then(function(r){if(r)return e.$toast.success("填寫成功!!",{position:"top-center",theme:"outline",duration:3e3,icon:{name:"check",after:!1}}),void t.$router.push("/checkout/checkout_2");e.$toast.error("請填入資訊!!",{position:"top-center",theme:"outline",duration:2e3,icon:{name:"error",after:!1}})})}}},s=r(12),o=Object(s.a)(a,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"checkout-userdata"},[r("div",{staticClass:" checkout-page"},[r("div",{staticClass:"checkout-form"},[e._m(0),e._v(" "),r("form",{staticClass:"checkout-body",attrs:{action:""}},[r("div",{staticClass:"form-row form-mr-4"},[r("div",{staticClass:"col-6 validate-tooltip"},[r("label",{attrs:{for:""}},[e._v("名字")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.from.transfrom.username,expression:"from.transfrom.username"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"text",name:"名字",placeholder:"小明"},domProps:{value:e.from.transfrom.username},on:{input:function(t){t.target.composing||e.$set(e.from.transfrom,"username",t.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("名字"),expression:"errors.has('名字')"}],staticClass:"tooltip-text left",class:{"is-invalid":e.errors.has("名字")}},[e._v("\n               "+e._s(e.errors.first("名字"))+"\n               ")])]),e._v(" "),r("div",{staticClass:"col-6 validate-tooltip"},[r("label",{attrs:{for:""}},[e._v("姓氏")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.from.transfrom.name,expression:"from.transfrom.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"姓氏",type:"text",placeholder:"王"},domProps:{value:e.from.transfrom.name},on:{input:function(t){t.target.composing||e.$set(e.from.transfrom,"name",t.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("姓氏"),expression:"errors.has('姓氏')"}],staticClass:"tooltip-text right",class:{"is-invalid":e.errors.has("姓氏")}},[e._v("\n               "+e._s(e.errors.first("姓氏"))+"\n               ")])])]),e._v(" "),r("div",{staticClass:"form-row validate-tooltip"},[r("div",{staticClass:"col-12"},[r("label",{attrs:{for:"tel"}},[e._v("電話")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.from.transfrom.tel,expression:"from.transfrom.tel"},{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],attrs:{type:"tel",name:"電話",placeholder:"0912-345-678"},domProps:{value:e.from.transfrom.tel},on:{input:function(t){t.target.composing||e.$set(e.from.transfrom,"tel",t.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("電話"),expression:"errors.has('電話')"}],staticClass:"tooltip-text left",class:{"is-invalid":e.errors.has("電話")}},[e._v("\n               "+e._s(e.errors.first("電話"))+"\n               ")])])]),e._v(" "),r("label",{attrs:{for:""}},[e._v("地址")]),e._v(" "),r("div",{staticClass:"form-row form-mr-4"},[r("div",{staticClass:"col-6 validate-tooltip"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.from.transfrom.county,expression:"from.transfrom.county"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"城市"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.from.transfrom,"county",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("請選擇")]),e._v(" "),r("option",{attrs:{value:"新竹市"}},[e._v("新竹市")]),e._v(" "),r("option",{attrs:{value:"嘉義市"}},[e._v("嘉義市")]),e._v(" "),r("option",{attrs:{value:"台南市"}},[e._v("台南市")]),e._v(" "),r("option",{attrs:{value:"台南市"}},[e._v("台南市")])]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("城市"),expression:"errors.has('城市')"}],staticClass:"tooltip-text left",class:{"is-invalid":e.errors.has("城市")}},[e._v("\n               "+e._s(e.errors.first("城市"))+"\n               ")])]),e._v(" "),r("div",{staticClass:"col-6 validate-tooltip"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.from.transfrom.area,expression:"from.transfrom.area"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"區域"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.from.transfrom,"area",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("請選擇")]),e._v(" "),r("option",{attrs:{value:"新興區"}},[e._v("新興區")]),e._v(" "),r("option",{attrs:{value:"彌陀區"}},[e._v("彌陀區")]),e._v(" "),r("option",{attrs:{value:"岡山區"}},[e._v("岡山區")]),e._v(" "),r("option",{attrs:{value:"三民區"}},[e._v("三民區")])]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("區域"),expression:"errors.has('區域')"}],staticClass:"tooltip-text right",class:{"is-invalid":e.errors.has("區域")}},[e._v("\n               "+e._s(e.errors.first("區域"))+"\n               ")])])]),e._v(" "),r("div",{staticClass:"form-row validate-tooltip"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.from.transfrom.address,expression:"from.transfrom.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"地址",value:"",placeholder:"幸福路 520 號"},domProps:{value:e.from.transfrom.address},on:{input:function(t){t.target.composing||e.$set(e.from.transfrom,"address",t.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("地址"),expression:"errors.has('地址')"}],staticClass:"tooltip-text left",class:{"is-invalid":e.errors.has("地址")}},[e._v("\n               "+e._s(e.errors.first("地址"))+"\n               ")])])])]),e._v(" "),r("div",{staticClass:"checkout-footer"},[r("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.validateBeforeSubmit(t)}}},[e._v("下一步")])])]),e._v(" "),r("div",{staticClass:" Summary-list"},[r("summarylist")],1)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"checkout-header"},[t("div",{staticClass:"title"},[this._v("\n           運送\n         ")]),this._v(" "),t("ul",{staticClass:"progressbar"},[t("li",{staticClass:"active"}),this._v(" "),t("li"),this._v(" "),t("li")])])}],!1,null,null,null);o.options.__file="index.vue";t.default=o.exports}}]);