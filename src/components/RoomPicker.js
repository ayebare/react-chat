import React from 'react'
import { getRooms } from '../helpers';
import { Link } from 'react-router';

const allRooms = getRooms();

const displayRoom = (data) => (
	<li key={data.id}>
		<Link to={`/room/${data.id}`}>
			{data.name}
		</Link>
	</li>
)

const RoomPicker = () => (
 <div>
	<h3>All Rooms</h3>
	<aside id="rooms" className="rooms">
		<ul>
			{allRooms.map(displayRoom)}
		</ul>
	</aside>
 </div>
)

export default RoomPicker
