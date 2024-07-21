/** @format */

type AdvanceProfileCardProps = {
	type: 'advanced';
	name: string;
	email: string;
};

type BasicProfileCardProps = {
	type: 'basic';
	name: string;
};
type ProfileCardProps = BasicProfileCardProps | AdvanceProfileCardProps;

function Component(props: ProfileCardProps) {
	const { type, name } = props;
	// const alertType = type === 'basic' ? 'success' : 'danger';
	// const className = `alert alert-${alertType}`;
	if (type === 'basic') {
		return (
			<article className="alert alert-success">
				<h2>User: {name}</h2>
			</article>
		);
	}
	return (
		<article className="alert alert-danger">
			<h2>User: {name}</h2>
			<h2>Email:{props.email}</h2>
		</article>
	);
}
export default Component;
