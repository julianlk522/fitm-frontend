interface Props {
	LikeCount: number
	EarliestLikers: string
}

export default function StaticLikeCount(props: Props) {
	const { LikeCount: like_count, EarliestLikers: earliest_likers } = props

	return (
		<div
			title={`${like_count} ${like_count === 1 ? 'like' : 'likes'}${like_count > 0 ? `: ${earliest_likers}` : ''}`}
			class='same-user-like-count'
		>
			{/* https://icon-sets.iconify.design/solar/like-outline/ */}
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='18'
				height='18'
				viewBox='0 0 24 24'
			>
				<path
					fill='currentColor'
					fill-rule='evenodd'
					d='M12.438 2.778a.596.596 0 0 0-.438.03a.515.515 0 0 0-.28.33l-.476 1.834a8.378 8.378 0 0 1-.72 1.844c-.485.907-1.218 1.604-1.898 2.19l-1.438 1.24a.918.918 0 0 0-.315.774l.812 9.393a.916.916 0 0 0 .911.837h4.649c3.136 0 5.779-2.182 6.286-5.113l.705-4.08a.916.916 0 0 0-.901-1.073h-5.181c-.977 0-1.72-.876-1.562-1.84l.663-4.044a4.03 4.03 0 0 0-.076-1.664a.885.885 0 0 0-.596-.611zl.23-.714zm-1.09-1.321a2.096 2.096 0 0 1 1.549-.107l.145.047l-.23.714l.23-.714c.777.25 1.383.87 1.589 1.662c.193.746.229 1.524.104 2.284l-.663 4.044a.083.083 0 0 0 .082.097h5.18c1.5 0 2.636 1.352 2.38 2.829l-.705 4.08c-.638 3.688-3.938 6.357-7.764 6.357H8.596a2.416 2.416 0 0 1-2.405-2.208l-.813-9.393a2.418 2.418 0 0 1 .83-2.04l1.44-1.24c.655-.564 1.206-1.111 1.552-1.76a6.83 6.83 0 0 0 .592-1.514l.476-1.833a2.014 2.014 0 0 1 1.08-1.305m-8.38 8.028a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.75'
					clip-rule='evenodd'
				/>
			</svg>{' '}
			{like_count}
		</div>
	)
}
