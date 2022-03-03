import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId:process.env.REACT_APP_SANITY_PROJECT_ID, 
    dataset: process.env.REACT_APP_SANITY_DATASET,
    apiVersion: process.env.REACT_APP_SANITY_VERSION,
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source) 

export const credentials = ({
        usernameFog:process.env.REACT_APP_LOGIN_CRED_FOG,
        usernameClover:process.env.REACT_APP_LOGIN_CRED_CLOVER,
        pw:process.env.REACT_APP_LOGIN_PW
    })
