import type { ChangeEvent } from 'preact/compat'
import type { Dispatch, StateUpdater } from 'preact/hooks'
import './About.css'
import AboutText from './AboutText'

interface Props {
	Text: string
	SetText: Dispatch<StateUpdater<string>>
	Editing: boolean
}

export default function About(props: Props) {
	const { Text: text, SetText: set_text, Editing: editing } = props
	const abbreviated =
		text.length >= 150 ? `${text.slice(0, 149)}...` : undefined

	return (
		<div id='profile-about'>
			{editing ? (
				<textarea
					name='about'
					onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
						set_text(e.currentTarget.value)
					}
					cols={80}
					rows={8}
				>
					{text}
				</textarea>
			) : abbreviated ? (
				<details>
					<summary>
						<AboutText About={abbreviated} />
					</summary>

					<AboutText About={text} />
				</details>
			) : (
				<AboutText About={text} />
			)}
		</div>
	)
}
