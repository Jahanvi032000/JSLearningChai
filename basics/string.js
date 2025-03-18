const name = "Jahanvi"
const repoCount = 24

console.log(`My name is ${name} and repo count is ${repoCount}`);

/*-----------------------------------------------------------------------------------------*/


const gameName = new String("Rapidfire");

console.log(gameName.charAt(0));
console.log(gameName.length);
console.log(gameName.indexOf('a'));
console.log(gameName.substring(0,3)); //It ignores negative value
console.log(gameName.slice(-9,5)); //It can take negative value as well

// to trim the extra spaces
const ngameName = new String("   jhjghghh    ");
console.log(ngameName.trim());

// to replace the value with another value
const url = new String("jsjhdhjghg%20@gmail.com")
console.log(url.replace("%20", "-"));

// to convert the string to array
const gamenameUp = new String("jhjhjj-hgghg-ggg");
console.log(gamenameUp.split("-", 1));
