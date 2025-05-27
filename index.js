//first function introduction
function introduction(name){
    return `Hi, my name is ${name}.`;
}
//intro with lang
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
//intro with lang optional
function introductionWithLanguageOptional(name, language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}