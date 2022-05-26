import { OAuthConfig, OAuthUserConfig } from 'next-auth/providers'

export interface IndeedProfile extends Record<string, any> {
  id: string
  firstName: string
  lastName: string
  email: string
}

export default function IndeedProvider<P extends IndeedProfile>(
  options: OAuthUserConfig<P>
): OAuthConfig<P> {
  return {
    id: 'indeed',
    name: 'Indeed',
    type: 'oauth',
    authorization: {
      url: 'https://secure.indeed.com/oauth/v2/authorize',
      params: {
        scope: 'email+offline_access',
        state: 'employer1234',
      },
    },
    token: 'https://apis.indeed.com/oauth/v2/tokens',
    userinfo: 'https://apis.indeed.com/oauth/v2/tokens',
    profile(profile) {
      return {
        id: profile.data.id,
        firstName: profile.data.firstName,
        lastName: profile.data.lastName,
        email: profile.data.email,
      }
    },
    options,
  }
}
