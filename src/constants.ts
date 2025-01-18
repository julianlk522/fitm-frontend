// API ENDPOINTS
const API_URL = 'https://api.fitm.online:1999'
// const API_URL = 'http://localhost:1999'

const SIGNUP_ENDPOINT = API_URL + '/signup'
const LOGIN_ENDPOINT = API_URL + '/login'

const LINKS_ENDPOINT = API_URL + '/links'
const CATS_ENDPOINT = API_URL + '/cats'
const CONTRIBUTORS_ENDPOINT = API_URL + '/contributors'
const SUMMARIES_ENDPOINT = API_URL + '/summaries'
const TAGS_ENDPOINT = API_URL + '/tags'
const CLICKS_ENDPOINT = API_URL + '/click'
const TOTALS_ENDPOINT = API_URL + '/totals'

const TMAP_ENDPOINT = API_URL + '/map'
const TMAP_PFP_ENDPOINT = API_URL + '/pic'
const TMAP_ABOUT_ENDPOINT = API_URL + '/about'
const TMAP_EMAIL_ENDPOINT = API_URL + '/email'

// PAGE LIMITS
const LINKS_PAGE_LIMIT = 20

export {
	API_URL,
	CATS_ENDPOINT,
	CLICKS_ENDPOINT,
	CONTRIBUTORS_ENDPOINT,
	LINKS_ENDPOINT,
	LINKS_PAGE_LIMIT,
	LOGIN_ENDPOINT,
	SIGNUP_ENDPOINT,
	SUMMARIES_ENDPOINT,
	TAGS_ENDPOINT,
	TMAP_ABOUT_ENDPOINT,
	TMAP_EMAIL_ENDPOINT,
	TMAP_ENDPOINT,
	TMAP_PFP_ENDPOINT,
	TOTALS_ENDPOINT,
}
