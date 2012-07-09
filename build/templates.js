/* 
* @author Niklas von Hertzen <niklas at hertzen.com>
* @created 9.7.2012 
* @website http://hertzen.com
 */


var fs = require('fs');
var content = fs.readFileSync( 'php.js', 'utf8') ;

eval( content );

// compile interfaces
console.log("building interfaces from templates");



function template( type ) {
    var path = "templates/" + type;
    
    fs.readdir( path, function(err, files){
        if (err) throw err;
    
        files.forEach(function( file ){
            fs.readFile(path + "/" + file, "utf8", function (err, data) {
                if (err) throw err;
                console.log("- building " + file);
            
                var AST = new PHP.Parser( PHP.Lexer( data ) );
  
                var compiler = new PHP.Compiler( AST );

                var src = "/* automatically built from " + file + "*/\n";
                
                src += "PHP.VM.Class.Predefined." + file.replace(".php","") + " = function( ENV ) {\n" + compiler.src + "\n};";
            

                fs.writeFile('src/predefined/' + type +'/' + file.replace(".php",".js") , src, function (err) {
                    if (err) throw err;
                    console.log('It\'s saved!');
                });
          

            
            });
        
        
        });
    
    });
}

template("interfaces");
template("classes");


