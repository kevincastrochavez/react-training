import React, { useState } from 'react'

function PlayGround() {
    const [count, setCount] = useState(0);
	return (
		<div>
			{count}
			<button onClick={() => setCount((currentCount) => currentCount - 1)}>
				-
			</button>
			<button onClick={() => setCount((currentCount) => currentCount + 1)}>
				+
			</button>
		</div>
	);
}

export default PlayGround