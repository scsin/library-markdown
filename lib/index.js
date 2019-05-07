function getLinksFromMd(text){
    const regexUrl = new RegExp(/(https*?:\/\/)?(www\.)?[a-z0-9]+(\.\w{2,}){1,2}/g);
    let urls = text.match(regexUrl);
    if (urls === null){
        return '{}';
    } else {
        let arr = [];
        urls.forEach(url => {
            let obj = {href: url};
            arr.push(obj);
        });
        return arr;
    }
}

module.exports.getLinksFromMd = getLinksFromMd;
