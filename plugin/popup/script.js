var element = document.getElementById('scriptonglet');

element.addEventListener('click', function() {

  chrome.tabs.query({'title': 'La Fabrique à Innovations | Donnez vie à vos idées !'}, tabs => {
    if (tabs.length === 0)
    {
      // There is no catgif tab!
      chrome.tabs.create({'url': 'http://lafabriqueainnovations.com/', 'active': true});
    }
    else
    {
      // Do something here…
      chrome.tabs.query({'title': 'La Fabrique à Innovations | Donnez vie à vos idées !', 'active': true}, active => {
        if (active.length === 0)
        {
          chrome.tabs.update(tabs[0].id, {'active': true});
        }
      });
    }
  });

}, false);
