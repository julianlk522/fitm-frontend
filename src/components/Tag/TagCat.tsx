interface Props {
	Cat: string
	Count?: number
	Addable?: boolean
	Removable?: boolean
	AddedSignal?: Signal<string | undefined>
	DeletedSignal?: Signal<string | undefined>
}

import type { Signal } from '@preact/signals'
import { useEffect, useRef } from 'preact/hooks'
import './TagCat.css'

export default function TagCat(props: Props) {
	const { Cat: cat, Addable: addable, Removable: removable } = props
	const add_btn_ref = useRef<HTMLButtonElement>(null)
	const delete_btn_ref = useRef<HTMLButtonElement>(null)

	async function handle_add(e: MouseEvent) {
		e.preventDefault()

		if (!props.AddedSignal) return
		props.AddedSignal.value = cat
	}

	async function handle_delete(e: MouseEvent) {
		e.preventDefault()

		if (!props.DeletedSignal) return
		props.DeletedSignal.value = cat
	}

	useEffect(() => {
		add_btn_ref.current?.addEventListener('click', handle_add)
		delete_btn_ref.current?.addEventListener('click', handle_delete)

		return () => {
			add_btn_ref.current?.removeEventListener('click', handle_add)
			delete_btn_ref.current?.removeEventListener('click', handle_delete)
		}
	}, [props.DeletedSignal])

	return (
		<li
			title={addable ? `Add cat '${cat}'` : ''}
			class={`cat${addable ? ' addable' : ''}`}
		>
			<p>
				{props.Cat}
				{props.Count ? ` (${props.Count})` : ''}
			</p>
			{removable && props.DeletedSignal ? (
				<button ref={delete_btn_ref} title='Remove cat' class='img-btn'>
					<img src='../../../delete.svg' height={20} width={20} />
				</button>
			) : addable && props.AddedSignal ? (
				<button
					ref={add_btn_ref}
					title='Add cat'
					class='img-btn plus-btn'
				>
					<img src='../../../add.svg' height={20} width={20} />
				</button>
			) : null}
		</li>
	)
}
