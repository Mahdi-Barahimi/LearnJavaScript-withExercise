//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// modules : export , import
// most write type="module" in the HTML file for Script Tag
// for exporting can write 'export' word before of things or write "export { 'things you want export', }"
// can export default with write "export default 'name'" and import this with write "import 'anyName' from 'address'"
// for importing write "import { 'things you want import' } from 'address'"
// for importing all of export things write "import * as 'name' from 'address'" and for use them write name.thingsName
let modulesLetDefault = 'this is a message from modulesLet in modules.js file and export with export default'
export let modulesLet = 'this is a message from modulesLet in modules.js file'

function modulesFunction (word) {
    console.log('this is a log from modulesFunction in modules.js file. you send word: \''+ word +'\'');
}

export { modulesLet, modulesFunction }
export default modulesLetDefault;