function  firstLetterUpperCase(name: string) {
    let firstLetter = name.charArt(0).toUpperCase();
    return firstLetter+name.subString(1);
}
firstLetterUpperCase('vinicius')