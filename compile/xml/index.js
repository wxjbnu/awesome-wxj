var DOMParser = require('xmldom').DOMParser;
var DOMImplementation = require('xmldom').DOMImplementation;
var fs = require('fs')
// var doc = new DOMParser().parseFromString(
//     '<xml xmlns="a" xmlns:c="./lite">\n'+
//         '\t<child>test</child>\n'+
//         '\t<child></child>\n'+
//         '\t<child/>\n'+
//     '</xml>'
//     ,'text/xml');
// doc.documentElement.setAttribute('x','y');
// doc.documentElement.setAttributeNS('./lite','c:x','y2');
// var nsAttr = doc.documentElement.getAttributeNS('./lite','x')
// console.info(nsAttr)
// console.info(doc)

function getTemplate (content) {
    content = `<template>${content}</template>`;
    let doc = new DOMImplementation().createDocument();
    let node = new DOMParser().parseFromString(content);
    let template = [].slice.call(node.childNodes || []).filter((n) => n.nodeName === 'template');
    [].slice.call(template[0].childNodes || []).forEach((n) => {
        doc.appendChild(n);
    });
    // https://github.com/jindw/xmldom/blob/master/dom.js#L585
    // https://github.com/jindw/xmldom/blob/master/dom.js#L919
    // if childNode is only one Text, then will get an error in doc.toString
    if (doc.documentElement === null && doc.nodeType === 9) { // DOCUMENT_NODE
        doc.nodeType = 11; // change to DOCUMENT_FRAGMENT_NODE
    }
    return doc;
}

var content = `<template>
  <div style="height:100%;display:flex;justify-content: center;align-items: center;">
    <input type="text"> <br>
    <p>{{token}}</p>
    <p>{{userData}}</p>
  </div>
</template>`

// fs.writeFile('123.js', getTemplate(content), function (err) {
//   if (err) throw err;
//   console.log('写入完成');
// });

console.log(getTemplate(content))