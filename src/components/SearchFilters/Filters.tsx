import { useState } from 'preact/hooks'
import type { Period, SortMetric } from '../../types'
import SearchCats from './Cats'
import './Filters.css'
import SearchNSFW from './NSFW'
import SearchPeriod from './Period'
import SearchSortBy from './SortBy'

interface Props {
	Endpoint?: '/search' | '/more'
	InitialPeriod: Period
	InitialSortBy?: SortMetric
	InitialNSFW?: boolean
	InitialCats: string[]
}

export default function SearchFilters(props: Props) {
	const {
		InitialPeriod: initial_period,
		InitialCats: initial_cats,
		InitialSortBy: initial_sort_by,
		InitialNSFW: initial_nsfw,
	} = props

	const [period, set_period] = useState<Period>(initial_period)
	const [cats, set_cats] = useState<string[]>(initial_cats)

	// only for links (/search)
	const [sort_by, set_sort_by] = useState<SortMetric>(
		initial_sort_by ?? 'rating'
	)
	const [nsfw, set_nsfw] = useState<boolean>(initial_nsfw ?? false)

	// set search URL based on period and cats
	let endpoint = props.Endpoint ?? '/search'
	const base_URL = endpoint ?? '/search'
	let search_URL = base_URL

	if (cats.length) {
		// encode reserved chars
		const encoded_cats = cats
			.map((cat) => encodeURIComponent(cat))
			.join(',')
		search_URL += `?cats=${encoded_cats}`
	}
	if (period !== 'all') {
		if (cats.length) {
			search_URL += `&period=${period}`
		} else {
			search_URL += `?period=${period}`
		}
	}

	// /search page endpoint only
	if (sort_by && sort_by !== 'rating') {
		if (cats.length || period !== 'all') {
			search_URL += `&sort_by=${sort_by}`
		} else {
			search_URL += `?sort_by=${sort_by}`
		}
	}
	if (nsfw) {
		if (cats.length || period !== 'all' || sort_by !== 'rating') {
			search_URL += `&nsfw=true`
		} else {
			search_URL += `?nsfw=true`
		}
	}

	const has_changed_cats =
		cats.length !== initial_cats.length ||
		cats.some((cat) => !initial_cats.includes(cat))
	const has_changed_filters =
		endpoint === '/more'
			? has_changed_cats || period !== initial_period
			: has_changed_cats ||
				period !== initial_period ||
				sort_by !== initial_sort_by ||
				nsfw !== initial_nsfw

	return (
		<section id='search-filters'>
			<form>
				<h2>Filters</h2>

				<SearchCats SelectedCats={cats} SetSelectedCats={set_cats} />

				<SearchPeriod Period={period} SetPeriod={set_period} />

				{endpoint === '/search' ? (
					<>
						<SearchSortBy
							SortBy={sort_by}
							SetSortBy={set_sort_by}
						/>
						<SearchNSFW NSFW={nsfw} SetNSFW={set_nsfw} />
					</>
				) : null}

				<a
					id='search-from-filters'
					title={
						has_changed_filters
							? ''
							: 'Filters unchanged: scroll down to see returned links'
					}
					class={has_changed_filters ? 'filters-changed' : ''}
					href={search_URL}
				>
					Scour The Treasure Map
				</a>
			</form>
		</section>
	)
}
