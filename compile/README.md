### 说明

* 引用为包
    * modulemap
    * xmldom
    * fs
    * child_process
    * hash-sum
    * module
    * colors

#### 需要用到的包
- import path from 'path';
- import fs from 'fs';
- import {DOMParser} from 'xmldom';

```javascript
"dependencies": {
    "chokidar": "^1.6.1",
    "colors": "^1.1.2",
    "commander": "^2.9.0",
    "compare-versions": "^3.0.0",
    "hash-sum": "^1.0.2",
    "ignore": "^3.2.0",
    "js-base64": "^2.1.9",
    "mkdirp": "^0.5.1",
    "postcss": "^5.2.16",
    "postcss-selector-parser": "^2.2.3",
    "update-notifier": "^1.0.2",
    "xmldom": "^0.1.22"
  }

```


#### 文件内容
- compile-template,将.wxj后缀的文件里面的style,script,template部分内容分别编译到新的文件（例如编译成.vue文件，则对应style->style,script->script,template->template，如果是小程序那么style则需要单独生成一个wxss文件，script也需要单独生成一个js文件，template也需要生成一个wxml文件）