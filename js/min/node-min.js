if("undefined"!=typeof process){var path="./",fs=require("fs");fs.watch(path,function(){location&&location.reload()});var openFile=function(e,i){var a=$(e);a.change(function(e){var a=$(this).val();fs.readFile(a,"utf-8",function(e,a){var n=JSON.parse(a);i.loadNodes(n)}),$(this).val("")})},saveFile=function(e,i){var a=$(e);a.change(function(e){filename=$(this).val(),fs.writeFile(filename,JSON.stringify(i.saveNodes()),function(e){e&&alert("error")}),$(this).val("")})};openFile("#fileOpenDialog",nodeCollection),saveFile("#fileSaveDialog",nodeCollection)}