export default function createOne({ link, title = null, description = null, keywords = [], category = null }) {

    chrome.storage.local.get({
        links: []
    }, function (result) {
        var links = result.links;
        links.push({ link: link, title, description, keywords, category });
        chrome.storage.local.set({
            links: links
        }, function () {
            chrome.storage.local.get('links', function (result) {
                console.log(result.links)
            });
        });
    });

}