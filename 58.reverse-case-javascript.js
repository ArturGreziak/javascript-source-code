var str = 'sPoNtAnEoUs';

function reverseCase(str){
    var output = '';
    var code = '';
    
    for(var i=0,len=str.length-1; i<=len; i++){
        code = str.charCodeAt(i);
        if(code >= 65 && code <= 90){
            output+=str.charAt(i).toLowerCase();
        }else if(code >=97 && code <= 122){
            output+=str.charAt(i).toUpperCase();
        }else{
            output+=str.charAt(i);
        }
    }
    return output;
}
console.log(reverseCase(str))
// alert(reverseCase(source));
