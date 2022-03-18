strings = ['this', 'is', 'an', 'array', 'of', 'strings', 'a', 'way', 'to', 'test'];

for (const string of strings) {
    if(string.length < 2){
        console.log('')
    }else{
        console.log(string.substring(0,2) + string.substring(string.length-2));
    }
}