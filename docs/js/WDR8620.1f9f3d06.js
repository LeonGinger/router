(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["WDR8620"],{"81f0":function(e,t,a){"use strict";a("a745")},a745:function(e,t,a){},d9a5:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("div",{staticClass:"item"},[a("input",{ref:"upload",attrs:{type:"file",name:"请上传原版编程器固件"}})]),a("div",{staticClass:"item"},[a("button",{on:{click:e.calc}},[e._v("生成EEPROM")])]),a("div",{staticClass:"item"},[e._v(" 提取到的LAN MAC为:"+e._s(e.maclan)+" ")]),a("ol",{staticClass:"item"},[a("li",[e._v(" 点击 选择文件 按钮，选择"+e._s(e.$options.name)+"的原版编程器固件上传 ")]),a("li",[e._v(" 点击 生成EEPROM 按钮，自动生成并下载eeprom.bin ")]),a("li",[e._v(" 请校验提取的MAC地址是否和路由器自身MAC一致 ")]),a("li",[e._v("不支持IE浏览器，尽量使用Chrome、edge、火狐最新版本浏览器操作")]),e._m(0)])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[e._v("参考教程: "),a("a",{attrs:{target:"_blank",href:"https://www.right.com.cn/forum/thread-3753329-1-1.html"}},[e._v("制作一个MAC2600R（WDR8620)的padavan的eeprom")]),a("a",{attrs:{href:"https://www.right.com.cn/forum/thread-4033282-1-1.html"}},[e._v("制作一个水星MAC2600R（双7615,4*4）的padavan的eeprom（恢复原厂MAC）")])])}],n=(a("907a"),a("219c"),{name:"WDR8620",components:{},data(){return{maclan:""}},methods:{calc(){let e=this.$refs.upload.files[0];if(!e)return void alert("请上传原版编程器固件!");this.maclan="";let t=new FileReader;t.onloadend=()=>{let e=t.result,a=new Uint8Array(65536).fill(255),r=new Uint8Array(e.slice(11776,193536));r.forEach((e,t)=>{a[t]=e});let i=new Uint8Array(a.slice(4096,5119));i.forEach((e,t)=>{a[32768+t]=e});let n=new Uint8Array(e.slice(186381,186387)),l=n.slice();l[5]+=1;let c=n.slice();c[5]+=2;let s=n.slice();s[5]+=3,c.forEach((e,t)=>{a[4+t]=e}),s.forEach((e,t)=>{a[32772+t]=e}),n.forEach((e,t)=>{this.maclan+=Number(e).toString(16).padStart(2,"0"),a[57344+t]=e}),l.forEach((e,t)=>{a[57350+t]=e}),this.saveFile(a.buffer)},t.readAsArrayBuffer(e)},saveFile(e){let t=new Blob([e],{type:"application/octet-stream"}),a=document.createElement("a");a.setAttribute("download",this.$options.name+"-eeprom.bin"),a.target="_blank",a.href=URL.createObjectURL(t),document.body.appendChild(a),a.click(),URL.revokeObjectURL(a.href)}}}),l=n,c=(a("81f0"),a("2877")),s=Object(c["a"])(l,r,i,!1,null,"b9a94af6",null);t["default"]=s.exports}}]);