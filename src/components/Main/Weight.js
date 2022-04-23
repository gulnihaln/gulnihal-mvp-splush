import React from 'react'

export default function Weight( {node, hasNotWeight }) {
    return (
			<div>
				{hasNotWeight ? (
					<button>Each</button>
				) : (
					<button key={node.id}>{`(${node.rating})`}</button>
				)}
			</div>
		);
}
