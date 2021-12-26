export default function createOne({ link, title = null, description = null, keywords = [], category = null }) {

    chrome.storage.local.get({
        links: []
    }, function (result) {
        const newLinks = [{ link: link, title, description, keywords, category }, ...result.links,];
        chrome.storage.local.set({
            links: newLinks
        }, function () {
            chrome.storage.local.get('links', function (result) {
                console.log(result.links)
            });
        });
    });

}