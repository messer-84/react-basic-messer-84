import React from 'react';

const Avatar = props => {
	return (
			<div className="avatar-block col-md-3 col-lg-3 ">
				<img src={props.avatarUrl} className="pull-left" />
			</div>
	);
};

export default Avatar;