alert('hi');
var contentful = require('contentful'); 


var client = contentful.createClient({
    space: 'sqzdd6o0iz0g',
    accessToken: 'x9jae8sbU24uh4UX_IpBp9Y8Tg2KT2FEe7M-ngM6pqk',
});

client.getEntries({

    'content_type': 'staticText'
})
    .then(texts => {
        alert('DONE');
        console.log('texts', texts);

    });