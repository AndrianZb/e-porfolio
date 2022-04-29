

import { createClient } from 'contentful'

export async function getStaticProps() ({
    space: sqzdd6o0iz0g,
    accessToken: x9jae8sbU24uh4UX_IpBp9Y8Tg2KT2FEe7M - ngM6pqk
})

const res = await client.getEntires({ content_type: 'recipe' })

return {
    props: {
        recipes: res.items
    }
}